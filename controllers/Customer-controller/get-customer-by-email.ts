import { Request, Response } from "express";
import db from "../../config/config-db";

const getCustomerByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        
        if (!email) {
            return res.status(400).json({
                status: 'error',
                message: 'Email no proporcionado'
            });
        }

        // Obtener información del cliente
        const [customerResult]: any = await db.execute(
            'SELECT id_cliente, Nombres, Apellidos, Email FROM cliente WHERE Email = ?',
            [email]
        );

        if (!customerResult || customerResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Cliente no encontrado'
            });
        }

        const customer = customerResult[0];
        const idUser = customer.id_cliente;

        // Obtener información de teléfono si existe
        const [phoneResult]: any = await db.execute(
            'SELECT númeroTelefono, tipo FROM Telefono WHERE id_cliente = ?',
            [idUser]
        );

        // Obtener información de dirección si existe
        const [addressResult]: any = await db.execute(
            'SELECT barrio, calle, numero FROM Direccion WHERE id_cliente = ?',
            [idUser]
        );

        return res.status(200).json({
            status: 'success',
            data: {
                id_cliente: customer.id_cliente,
                nombres: customer.Nombres,
                apellidos: customer.Apellidos,
                Email: customer.Email,
                telefono: phoneResult.length > 0 ? {
                    numero: phoneResult[0].númeroTelefono,
                    tipo: phoneResult[0].tipo
                } : null,
                direccion: addressResult.length > 0 ? {
                    barrio: addressResult[0].barrio,
                    calle: addressResult[0].calle,
                    numero: addressResult[0].numero
                } : null
            }
        });
    } catch (error: any) {
        console.error('Error en get-customer-by-email:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
}

export { getCustomerByEmail }; 