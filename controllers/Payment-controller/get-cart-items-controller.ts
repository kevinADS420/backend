import { Request, Response } from 'express';
import pool  from '../../config/database';

export const getCartItems = async (req: Request, res: Response) => {
    const { customerId } = req.params;

    try {
        // Obtener todos los items del carrito del cliente con información del producto
        const [cartItems] = await pool.query(`
            SELECT c.id_carrito, c.cantidad, c.fecha_agregado,
                   p.id_producto, p.nombreP, p.tipo, p.Precio, p.imagen,
                   i.cantidad_disponible
            FROM Carrito c
            INNER JOIN Producto p ON c.id_producto = p.id_producto
            INNER JOIN Inventario i ON p.id_inventario = i.id_inventario
            WHERE c.id_cliente = ?
            ORDER BY c.fecha_agregado DESC
        `, [customerId]);

        res.json({
            items: cartItems,
            totalItems: (cartItems as any[]).length
        });
    } catch (error) {
        console.error('Error al obtener items del carrito:', error);
        res.status(500).json({
            error: 'Error al obtener items del carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 