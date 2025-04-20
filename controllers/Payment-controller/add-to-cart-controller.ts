import { Request, Response } from 'express';
import pool from '../../config/database';

export const addToCart = async (req: Request, res: Response) => {
    const { id_cliente } = req.params;
    const { id_producto, cantidad } = req.body;

    try {
        // Verificar si el producto existe y obtener su cantidad disponible
        const [product] = await pool.query(
            'SELECT cantidad FROM Producto WHERE id_producto = ?',
            [id_producto]
        );

        if ((product as any[]).length === 0) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }

        const producto = (product as any[])[0];

        // Verificar si hay suficiente cantidad disponible
        if (cantidad > producto.cantidad) {
            return res.status(400).json({
                error: 'No hay suficiente cantidad disponible',
                cantidad_disponible: producto.cantidad
            });
        }

        // Verificar si el producto ya está en el carrito
        const [existingItem] = await pool.query(
            'SELECT * FROM Carrito WHERE id_cliente = ? AND id_producto = ?',
            [id_cliente, id_producto]
        );

        if ((existingItem as any[]).length > 0) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            const newCantidad = (existingItem as any[])[0].cantidad + cantidad;
            
            if (newCantidad > producto.cantidad) {
                return res.status(400).json({
                    error: 'No hay suficiente cantidad disponible',
                    cantidad_disponible: producto.cantidad
                });
            }

            await pool.query(
                'UPDATE Carrito SET cantidad = ? WHERE id_cliente = ? AND id_producto = ?',
                [newCantidad, id_cliente, id_producto]
            );

            return res.json({
                message: 'Cantidad actualizada en el carrito',
                cantidad: newCantidad
            });
        }

        // Si el producto no está en el carrito, agregarlo
        await pool.query(
            'INSERT INTO Carrito (id_cliente, id_producto, cantidad) VALUES (?, ?, ?)',
            [id_cliente, id_producto, cantidad]
        );

        res.status(201).json({
            message: 'Producto agregado al carrito',
            cantidad: cantidad
        });
    } catch (error) {
        console.error('Error al agregar producto al carrito:', error);
        res.status(500).json({
            error: 'Error al agregar producto al carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 