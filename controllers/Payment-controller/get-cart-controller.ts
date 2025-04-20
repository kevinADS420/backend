import { Request, Response } from 'express';
import  pool  from '../../config/database';

export const getCart = async (req: Request, res: Response) => {
    const { id_cliente } = req.params;

    try {
        // Obtener los items del carrito con la información del producto
        const [items] = await pool.query(
            `SELECT c.id_producto, c.cantidad, p.nombreP, p.Precio, p.imagen 
             FROM Carrito c 
             JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_cliente = ?`,
            [id_cliente]
        );

        // Calcular el total del carrito
        const total = (items as any[]).reduce((sum, item) => {
            return sum + (item.Precio * item.cantidad);
        }, 0);

        res.json({
            items: items,
            total: total
        });
    } catch (error) {
        console.error('Error al obtener el carrito:', error);
        res.status(500).json({
            error: 'Error al obtener el carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
}; 