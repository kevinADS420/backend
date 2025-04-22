import { Request, Response } from "express";
import db from "../../config/config-db";

const proveedorProfile = async (req: Request, res: Response) => {
    let connection;
    try {
        const idUser = req.body.id;
        const role = req.body.role;
        
        if (!idUser) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de proveedor no proporcionado'
            });
        }

        if (role !== 'proveedor') {
            return res.status(403).json({
                status: 'error',
                message: 'Acceso denegado. Rol incorrecto'
            });
        }

        connection = await db.getConnection();

        const [proveedorResult]: any = await connection.execute(
            'SELECT * FROM Proveedor WHERE id_proveedor = ?',
            [idUser]
        );

        if (!proveedorResult || proveedorResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Proveedor no encontrado'
            });
        }

        const proveedor = proveedorResult[0];

        // Por ahora, retornamos solo la información básica del proveedor
        // ya que las tablas Telefono y Direccion están diseñadas para clientes
        return res.status(200).json({
            status: 'success',
            data: {
                id_proveedor: proveedor.id_proveedor,
                nombres: proveedor.nombres,
                apellidos: proveedor.apellidos,
                email: proveedor.Email,
                telefono: null, // No hay tabla de teléfonos para proveedores
                direccion: null // No hay tabla de direcciones para proveedores
            }
        });
    } catch (error: any) {
        console.error('Error en proveedorProfile:', error);
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

export default proveedorProfile;