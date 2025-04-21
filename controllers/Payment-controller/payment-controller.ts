import { Request, Response } from "express";
import { MercadoPagoConfig, Preference } from 'mercadopago';
import pool from "../../config/database";

const client = new MercadoPagoConfig({ 
    accessToken: 'APP_USR-844363715892854-041021-8efdb2d81700ddae2b860944b1a2fd9a-2381703263'
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

export default createPreference; 