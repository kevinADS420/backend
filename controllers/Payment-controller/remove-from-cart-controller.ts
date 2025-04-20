import { Request, Response } from 'express';
import pool from '../../config/database';

export const removeFromCart = async (req: Request, res: Response) => {
    const { id_cliente } = req.params;
    const { id_producto } = req.body;

    try {
        // Verificar si el item existe en el carrito
        const [item] = await pool.query(
            'SELECT * FROM Carrito WHERE id_cliente = ? AND id_producto = ?',
            [id_cliente, id_producto]
        );

        if ((item as any[]).length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }

        // Eliminar el item del carrito
        await pool.query(
            'DELETE FROM Carrito WHERE id_cliente = ? AND id_producto = ?',
            [id_cliente, id_producto]
        );

        res.json({
            message: 'Item eliminado del carrito'
        });
    } catch (error) {
        console.error('Error al eliminar item del carrito:', error);
        res.status(500).json({
            error: 'Error al eliminar item del carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 