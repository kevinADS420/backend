import { Request, Response } from 'express';
import pool  from '../../config/database';

export const getCartTotal = async (req: Request, res: Response) => {
    const { customerId } = req.params;

    try {
        // Obtener todos los items del carrito con sus precios
        const [items] = await pool.query(
            `SELECT c.id_carrito, c.cantidad, p.precio 
             FROM Carrito c 
             JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_cliente = ?`,
            [customerId]
        );

        // Calcular el total
        let total = 0;
        (items as any[]).forEach(item => {
            total += item.cantidad * item.precio;
        });

        res.json({
            total: total,
            items_count: (items as any[]).length
        });
    } catch (error) {
        console.error('Error al calcular el total del carrito:', error);
        res.status(500).json({
            error: 'Error al calcular el total del carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 