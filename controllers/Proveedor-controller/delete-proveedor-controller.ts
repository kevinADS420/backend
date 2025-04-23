import { Request, Response } from "express";
import db from "../../config/config-db";

const deleteProveedor = async (req: Request, res: Response) => {
    let connection;
    try {
        const { id_proveedor } = req.body;
        
        if (!id_proveedor) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de proveedor no proporcionado'
            });
        }

        connection = await db.getConnection();

        // Primero verificar si el proveedor existe
        const [proveedorResult]: any = await connection.execute(
            'SELECT * FROM Proveedor WHERE id_proveedor = ?',
            [id_proveedor]
        );

        if (!proveedorResult || proveedorResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Proveedor no encontrado'
            });
        }

        // Eliminar el proveedor
        await connection.execute(
            'DELETE FROM Proveedor WHERE id_proveedor = ?',
            [id_proveedor]
        );

        return res.status(200).json({
            status: 'success',
            message: 'Proveedor eliminado exitosamente'
        });
    } catch (error: any) {
        console.error('Error en deleteProveedor:', error);
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

export default deleteProveedor; 