import { Request, Response } from "express";
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
import pool from "../../config/database";
import { config } from 'dotenv';

config();

interface PaymentPreference {
    id_cliente: number;
}

const client = new MercadoPagoConfig({ 
    accessToken: process.env.MP_ACCESS_TOKEN || ''
});

const createPreference = async (req: Request, res: Response) => {
    try {
        const { id_cliente } = req.body;

        if (!id_cliente) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente no proporcionado'
            });
        }

        // Obtener los items del carrito con la información del producto
        const [cartItems] = await pool.query(
            `SELECT c.cantidad, p.id_producto, p.nombreP, p.Precio 
             FROM Carrito c 
             JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_cliente = ?`,
            [id_cliente]
        );

        if ((cartItems as any[]).length === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'El carrito está vacío'
            });
        }

        // Crear items para la preferencia
        const preferenceItems = (cartItems as any[]).map(item => ({
            id: item.id_producto.toString(),
            title: item.nombreP,
            unit_price: Number(item.Precio),
            quantity: Number(item.cantidad),
            currency_id: "COP"
        }));

        // Calcular el total
        const total = preferenceItems.reduce((sum, item) => sum + (item.unit_price * item.quantity), 0);

        // Crear la preferencia de pago
        const preference = new Preference(client);
        const result = await preference.create({
            body: {
                items: preferenceItems,
                back_urls: {
                    success: "http://localhost:5173/success",
                    failure: "http://localhost:5173/failure",
                    pending: "http://localhost:5173/pending"
                },
                auto_return: "approved"
            }
        });

        // Guardar la preferencia en la base de datos
        await pool.query(
            'INSERT INTO ordenes (id_cliente, id_preferencia, estado, total) VALUES (?, ?, ?, ?)',
            [id_cliente, result.id, 'pending', total]
        );

        return res.json({
            preferenceId: result.id,
            init_point: result.init_point,
            items: preferenceItems,
            total: total
        });

    } catch (error) {
        console.error('Error al crear la preferencia:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error al crear la preferencia',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
};

const handleWebhook = async (req: Request, res: Response) => {
    try {
        const { type, data } = req.body;

        if (type === 'payment') {
            const paymentId = data.id;
            const payment = new Payment(client);
            const result = await payment.get({ id: paymentId });

            if (result.status === 'approved') {
                // Obtener el id_cliente y los items del carrito
                const [preference] = await pool.query(
                    'SELECT id_cliente FROM payment_preferences WHERE preference_id = ?',
                    [data.preference_id]
                ) as [PaymentPreference[], any];

                if (!Array.isArray(preference) || preference.length === 0) {
                    console.error('Preferencia no encontrada:', data.preference_id);
                    return res.status(404).json({ message: 'Preferencia no encontrada' });
                }

                const { id_cliente } = preference[0];

                // Obtener los items del carrito
                const [cartItems] = await pool.query(
                    `SELECT c.id_producto, c.cantidad 
                     FROM Carrito c 
                     WHERE c.id_cliente = ?`,
                    [id_cliente]
                );

                // Actualizar el inventario y eliminar del carrito
                for (const item of cartItems as any[]) {
                    // Actualizar el inventario restando la cantidad comprada
                    await pool.query(
                        `UPDATE Inventario 
                         SET cantidad_disponible = cantidad_disponible - ? 
                         WHERE id_producto = ?`,
                        [item.cantidad, item.id_producto]
                    );

                    // Eliminar el item del carrito
                    await pool.query(
                        'DELETE FROM Carrito WHERE id_cliente = ? AND id_producto = ?',
                        [id_cliente, item.id_producto]
                    );
                }

                console.log('Pago aprobado y carrito actualizado:', result);
            } else if (result.status === 'rejected') {
                console.log('Pago rechazado:', result);
            } else if (result.status === 'pending') {
                console.log('Pago pendiente:', result);
            }
        }

        res.status(200).send('OK');
    } catch (error) {
        console.error('Error al procesar el webhook:', error);
        res.status(500).json({ error: 'Error al procesar el webhook' });
    }
};

export { createPreference, handleWebhook }; 