import { Request, Response } from "express";
import db from "../../config/config-db";

const getAdminByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        
        if (!email) {
            return res.status(400).json({
                status: 'error',
                message: 'Email no proporcionado'
            });
        }

        // Obtener información del administrador
        const [adminResult]: any = await db.execute(
            'SELECT id_administrador, Nombres, Apellidos, Email FROM Administrador WHERE Email = ?',
            [email]
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
        console.error('Error en get-admin-by-email:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
}

export { getAdminByEmail }; 