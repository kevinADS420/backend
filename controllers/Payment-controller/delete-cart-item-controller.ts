import { Request, Response } from 'express';
import  pool  from '../../config/database';

export const deleteCartItem = async (req: Request, res: Response) => {
    const { cartItemId } = req.params;

    try {
        // Verificar si el item existe en el carrito
        const [existingItem] = await pool.query(
            'SELECT * FROM Carrito WHERE id_carrito = ?',
            [cartItemId]
        );

        if ((existingItem as any[]).length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }

        // Eliminar el item del carrito
        await pool.query(
            'DELETE FROM Carrito WHERE id_carrito = ?',
            [cartItemId]
        );

        res.json({
            message: 'Item eliminado del carrito exitosamente'
        });
    } catch (error) {
        console.error('Error al eliminar item del carrito:', error);
        res.status(500).json({
            error: 'Error al eliminar item del carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 