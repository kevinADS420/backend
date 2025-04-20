import { Request, Response } from 'express';
import pool from '../../config/database';

export const updateCartItem = async (req: Request, res: Response) => {
    const { cartItemId } = req.params;
    const { cantidad } = req.body;

    try {
        // Verificar si el item existe y obtener la cantidad disponible del producto
        const [existingItem] = await pool.query(
            `SELECT c.*, p.cantidad as cantidad_disponible 
             FROM Carrito c 
             JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_carrito = ?`,
            [cartItemId]
        );

        if ((existingItem as any[]).length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }

        const item = (existingItem as any[])[0];

        // Verificar si hay suficiente cantidad disponible
        if (cantidad > item.cantidad_disponible) {
            return res.status(400).json({
                error: 'No hay suficiente cantidad disponible',
                cantidad_disponible: item.cantidad_disponible
            });
        }

        // Actualizar la cantidad
        await pool.query(
            'UPDATE Carrito SET cantidad = ? WHERE id_carrito = ?',
            [cantidad, cartItemId]
        );

        res.json({
            message: 'Cantidad actualizada correctamente',
            cantidad: cantidad
        });
    } catch (error) {
        console.error('Error al actualizar la cantidad del item:', error);
        res.status(500).json({
            error: 'Error al actualizar la cantidad del item',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 