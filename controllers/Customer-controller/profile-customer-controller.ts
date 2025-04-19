import { Request, Response } from "express";
import db from "../../config/config-db";

const customerProfile = async (req: Request, res: Response) => {
    try {
        console.log('Request body:', req.body);
        console.log('Request headers:', req.headers);
        
        const idUser = req.body.id;
        const role = req.body.role;
        const googleData = req.body.googleData; // Datos de Google si existen
        
        console.log('ID del usuario:', idUser);
        console.log('Rol del usuario:', role);
        console.log('Datos de Google:', googleData);
        
        if (!idUser) {
            console.log('Error: ID de usuario no proporcionado');
            return res.status(400).json({
                status: 'error',
                message: 'ID de usuario no proporcionado'
            });
        }

        if (role !== 'customer' && role !== 'cliente') {
            console.log('Error: Rol incorrecto');
            return res.status(403).json({
                status: 'error',
                message: 'Acceso denegado. Rol incorrecto'
            });
        }

        // Si hay datos de Google, actualizar el perfil
        if (googleData) {
            try {
                await db.execute(
                    'UPDATE cliente SET Nombres = ?, Apellidos = ?, Email = ?, googleId = ? WHERE id_cliente = ?',
                    [googleData.nombres, googleData.apellidos, googleData.email, googleData.googleId, idUser]
                );
                console.log('Perfil actualizado con datos de Google');
            } catch (updateError) {
                console.error('Error al actualizar con datos de Google:', updateError);
            }
        }

        // Obtener información del cliente
        const [customerResult]: any = await db.execute(
            'SELECT id_cliente, Nombres, Apellidos, Email, googleId FROM cliente WHERE id_cliente = ?',
            [idUser]
        );

        console.log('Resultado de la consulta del cliente:', customerResult);

        if (!customerResult || customerResult.length === 0) {
            console.log('Error: Cliente no encontrado');
            return res.status(404).json({
                status: 'error',
                message: 'Cliente no encontrado'
            });
        }

        const customer = customerResult[0];

        // Obtener información de teléfono si existe
        const [phoneResult]: any = await db.execute(
            'SELECT númeroTelefono, tipo FROM Telefono WHERE id_cliente = ?',
            [idUser]
        );

        console.log('Resultado de la consulta del teléfono:', phoneResult);

        // Obtener información de dirección si existe
        const [addressResult]: any = await db.execute(
            'SELECT calle, ciudad, departamento, codigoPostal FROM Direccion WHERE id_cliente = ?',
            [idUser]
        );

        console.log('Resultado de la consulta de la dirección:', addressResult);

        return res.status(200).json({
            status: 'success',
            data: {
                id_cliente: customer.id_cliente,
                Nombres: customer.Nombres,
                Apellidos: customer.Apellidos,
                Email: customer.Email,
                googleId: customer.googleId,
                telefono: phoneResult.length > 0 ? {
                    numero: phoneResult[0].númeroTelefono,
                    tipo: phoneResult[0].tipo
                } : null,
                direccion: addressResult.length > 0 ? {
                    calle: addressResult[0].calle,
                    ciudad: addressResult[0].ciudad,
                    departamento: addressResult[0].departamento,
                    codigoPostal: addressResult[0].códigoPostal
                } : null
            }
        });
    } catch (error: any) {
        console.error('Error en profile-customer-controller:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
}

export default customerProfile;