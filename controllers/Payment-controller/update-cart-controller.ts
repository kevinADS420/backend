import { Request, Response } from 'express';
import pool from '../../config/database';

export const updateCart = async (req: Request, res: Response) => {
    const { customerId, cartItemId } = req.params;
    const { quantity } = req.body;

    if (!quantity || quantity < 0) {
        return res.status(400).json({
            error: 'La cantidad debe ser un número positivo'
        });
    }

    try {
        // Verificar si el item existe en el carrito
        const [existingItem] = await pool.query(
            'SELECT id_carrito FROM Carrito WHERE id_carrito = ? AND id_cliente = ?',
            [cartItemId, customerId]
        );

        if ((existingItem as any[]).length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }

        if (quantity === 0) {
            // Eliminar el item si la cantidad es 0
            await pool.query(
                'DELETE FROM Carrito WHERE id_carrito = ?',
                [cartItemId]
            );
            return res.json({
                message: 'Producto eliminado del carrito'
            });
        }

        // Actualizar la cantidad
        await pool.query(
            'UPDATE Carrito SET cantidad = ? WHERE id_carrito = ?',
            [quantity, cartItemId]
        );

        res.json({
            message: 'Cantidad actualizada exitosamente'
        });
    } catch (error) {
        console.error('Error al actualizar el carrito:', error);
        res.status(500).json({
            error: 'Error al actualizar el carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 