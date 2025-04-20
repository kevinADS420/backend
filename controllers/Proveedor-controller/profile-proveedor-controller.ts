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
            'SELECT id_proveedor, Nombres, Apellidos, Email FROM proveedor WHERE id_proveedor = ?',
            [idUser]
        );

        if (!proveedorResult || proveedorResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Proveedor no encontrado'
            });
        }

        const proveedor = proveedorResult[0];

        const [phoneResult, addressResult]: any = await Promise.all([
            connection.execute(
                'SELECT númeroTelefono, tipo FROM Telefono WHERE id_proveedor = ?',
                [idUser]
            ),
            connection.execute(
                'SELECT barrio, calle, numero FROM Direccion WHERE id_proveedor = ?',
                [idUser]
            )
        ]);

        return res.status(200).json({
            status: 'success',
            data: {
                id_proveedor: proveedor.id_proveedor,
                Nombres: proveedor.Nombres,
                Apellidos: proveedor.Apellidos,
                Email: proveedor.Email,
                telefono: phoneResult[0].length > 0 ? {
                    numero: phoneResult[0][0].númeroTelefono,
                    tipo: phoneResult[0][0].tipo
                } : null,
                direccion: addressResult[0].length > 0 ? {
                    barrio: addressResult[0][0].barrio,
                    calle: addressResult[0][0].calle,
                    numero: addressResult[0][0].numero
                } : null
            }
        });
    } catch (error: any) {
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