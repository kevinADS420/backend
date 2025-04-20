import { Request, Response } from 'express';
import pool from '../../config/database';

export const getCartItem = async (req: Request, res: Response) => {
    const { cartItemId } = req.params;

    try {
        // Obtener detalles del item del carrito incluyendo información del producto
        const [cartItem] = await pool.query(
            `SELECT c.*, p.nombreP, p.Precio, p.cantidad_disponible, p.imagen 
             FROM Carrito c 
             JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_carrito = ?`,
            [cartItemId]
        );

        if ((cartItem as any[]).length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }

        const item = (cartItem as any[])[0];
        
        // Calcular subtotal
        const subtotal = item.Precio * item.cantidad;

        res.json({
            id_carrito: item.id_carrito,
            id_producto: item.id_producto,
            nombre_producto: item.nombreP,
            precio_unitario: item.Precio,
            cantidad: item.cantidad,
            cantidad_disponible: item.cantidad_disponible,
            imagen: item.imagen,
            subtotal: subtotal
        });
    } catch (error) {
        console.error('Error al obtener detalles del item del carrito:', error);
        res.status(500).json({
            error: 'Error al obtener detalles del item del carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 