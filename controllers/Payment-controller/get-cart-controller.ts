import { Request, Response } from "express";
import db from "../../config/config-db";

const getCart = async (req: Request, res: Response) => {
    let connection;
    try {
        const { customerId } = req.params;

        if (!customerId) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente no proporcionado'
            });
        }

        connection = await db.getConnection();

        // Obtener los productos del carrito del cliente
        const [cartItems] = await connection.execute(
            `SELECT c.id_carrito, c.cantidad, p.id_producto, p.nombreP, p.Precio, p.imagen 
             FROM Carrito c 
             INNER JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_cliente = ?`,
            [customerId]
        );

        // Calcular el total
        const total = (cartItems as any[]).reduce((sum, item) => 
            sum + (item.Precio * item.cantidad), 0
        );

        return res.status(200).json({
            status: 'success',
            data: {
                items: cartItems,
                total: total
            }
        });

    } catch (error: any) {
        return res.status(500).json({
            status: 'error',
            message: 'Error al obtener el carrito',
            error: error.message
        });
    } finally {
        if (connection) {
            await connection.release();
        }
    }
};

export default getCart; 