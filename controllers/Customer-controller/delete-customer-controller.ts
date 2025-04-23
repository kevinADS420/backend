import { Request, Response } from "express";
import db from "../../config/config-db";

const deleteCustomer = async (req: Request, res: Response) => {
    let connection;
    try {
        const { id_cliente } = req.body;
        
        if (!id_cliente) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente no proporcionado'
            });
        }

        connection = await db.getConnection();

        // Primero verificar si el cliente existe
        const [clienteResult]: any = await connection.execute(
            'SELECT * FROM cliente WHERE id_cliente = ?',
            [id_cliente]
        );

        if (!clienteResult || clienteResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Cliente no encontrado'
            });
        }

        // Eliminar registros relacionados primero
        await connection.execute(
            'DELETE FROM Telefono WHERE id_cliente = ?',
            [id_cliente]
        );

        await connection.execute(
            'DELETE FROM Direccion WHERE id_cliente = ?',
            [id_cliente]
        );

        await connection.execute(
            'DELETE FROM Carrito WHERE id_cliente = ?',
            [id_cliente]
        );

        // Finalmente eliminar el cliente
        await connection.execute(
            'DELETE FROM cliente WHERE id_cliente = ?',
            [id_cliente]
        );

        return res.status(200).json({
            status: 'success',
            message: 'Cliente eliminado exitosamente'
        });
    } catch (error: any) {
        console.error('Error en deleteCustomer:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    } finally {
        if (connection) {
            await connection.release();
        }
    }
}

export default deleteCustomer;