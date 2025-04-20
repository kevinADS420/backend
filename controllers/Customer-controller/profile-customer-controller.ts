import { Request, Response } from "express";
import db from "../../config/config-db";

const customerProfile = async (req: Request, res: Response) => {
    let connection;
    try {
        const idUser = req.body.id;
        const role = req.body.role;
        
        if (!idUser) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de usuario no proporcionado'
            });
        }

        if (role !== 'customer') {
            return res.status(403).json({
                status: 'error',
                message: 'Acceso denegado. Rol incorrecto'
            });
        }

        connection = await db.getConnection();

        const [customerResult]: any = await connection.execute(
            'SELECT id_cliente, Nombres, Apellidos, Email FROM cliente WHERE id_cliente = ?',
            [idUser]
        );

        if (!customerResult || customerResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Cliente no encontrado'
            });
        }

        const customer = customerResult[0];

        const [phoneResult, addressResult]: any = await Promise.all([
            connection.execute(
                'SELECT númeroTelefono, tipo FROM Telefono WHERE id_cliente = ?',
                [idUser]
            ),
            connection.execute(
                'SELECT barrio, calle, numero FROM Direccion WHERE id_cliente = ?',
                [idUser]
            )
        ]);

        return res.status(200).json({
            status: 'success',
            data: {
                id_cliente: customer.id_cliente,
                Nombres: customer.Nombres,
                Apellidos: customer.Apellidos,
                Email: customer.Email,
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

export default customerProfile;