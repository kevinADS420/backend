import { Request, Response } from "express";
import db from "../../config/config-db";

const adminProfile = async (req: Request, res: Response) => {
    try {
        const idUser = req.body.id;
        const role = req.body.role;

        if (!idUser) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de administrador no proporcionado'
            });
        }

        if (role !== 'admin') {
            return res.status(403).json({
                status: 'error',
                message: 'Acceso denegado. Rol incorrecto'
            });
        }

        const [adminResult]: any = await db.execute(
            'SELECT id_administrador, Nombres, Apellidos, Email FROM Administrador WHERE id_administrador = ?',
            [idUser]
        );

        if (!adminResult || adminResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Administrador no encontrado'
            });
        }

        const admin = adminResult[0];

        return res.status(200).json({
            status: 'success',
            data: {
                id_administrador: admin.id_administrador,
                nombres: admin.Nombres,
                apellidos: admin.Apellidos,
                Email: admin.Email
            }
        });
    } catch (error: any) {
        console.error('Error en profile-admin-controller:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
}

export default adminProfile; 