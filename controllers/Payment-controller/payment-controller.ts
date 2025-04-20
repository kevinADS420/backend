import { Request, Response } from "express";
import { MercadoPagoConfig, Preference } from 'mercadopago';
import db from "../../config/config-db";

const client = new MercadoPagoConfig({ 
    accessToken: process.env.MP_ACCESS_TOKEN || 'TEST-1234567890123456-123456-12345678901234567890123456789012-123456789'
});

const createPreference = async (req: Request, res: Response) => {
    let connection;
    try {
        const { items, customerId } = req.body;

        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'El carrito está vacío'
            });
        }

        if (!customerId) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente no proporcionado'
            });
        }

        connection = await db.getConnection();

        // Verificar que el cliente existe
        const [customerResult]: any = await connection.execute(
            'SELECT id_cliente FROM cliente WHERE id_cliente = ?',
            [customerId]
        );

        if (!customerResult || customerResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Cliente no encontrado'
            });
        }

        // Obtener información de los productos del carrito
        const productIds = items.map(item => item.id);
        const [productsResult]: any = await connection.execute(
            'SELECT id_producto, nombre, precio FROM producto WHERE id_producto IN (?)',
            [productIds]
        );

        if (!productsResult || productsResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Productos no encontrados'
            });
        }

        // Crear items para la preferencia
        const preferenceItems = items.map((item: any) => ({
            id: item.id.toString(),
            title: item.title,
            unit_price: Number(item.unit_price),
            quantity: Number(item.quantity),
            currency_id: item.currency_id
        }));

        // Crear la preferencia de pago
        const preference = new Preference(client);
        const result = await preference.create({
            body: {
                items: preferenceItems,
                payer: {
                    email: req.body.payer?.email,
                    name: req.body.payer?.name,
                    surname: req.body.payer?.surname
                },
                back_urls: {
                    success: "http://localhost:5173/success",
                    failure: "http://localhost:5173/failure",
                    pending: "http://localhost:5173/pending"
                },
                auto_return: "approved"
            }
        });

        // Guardar la preferencia en la base de datos
        await connection.execute(
            'INSERT INTO ordenes (id_cliente, id_preferencia, estado, total) VALUES (?, ?, ?, ?)',
            [customerId, result.id, 'pending', preferenceItems.reduce((total, item) => total + (item.unit_price * item.quantity), 0)]
        );

        return res.status(200).json({
            status: 'Preferencia creada exitosamente',
            data: result
        });

    } catch (error: any) {
        console.error('Error al crear la preferencia:', error);
        return res.status(500).json({
            status: 'Error al crear la preferencia',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    } finally {
        if (connection) {
            await connection.release();
        }
    }
};

export default createPreference; 