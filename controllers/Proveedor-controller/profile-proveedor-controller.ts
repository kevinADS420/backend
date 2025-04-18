import { Request, Response } from "express";
import db from "../../config/config-db";

const proveedorProfile = async (req: Request, res: Response) => {
    try {
        console.log('Request body:', req.body);
        console.log('Request headers:', req.headers);
        
        const idUser = req.body.id;
        const role = req.body.role;
        
        console.log('ID del proveedor:', idUser);
        console.log('Rol del proveedor:', role);
        
        if (!idUser) {
            console.log('Error: ID de proveedor no proporcionado');
            return res.status(400).json({
                status: 'error',
                message: 'ID de proveedor no proporcionado'
            });
        }

        if (role !== 'proveedor') {
            console.log('Error: Rol incorrecto');
            return res.status(403).json({
                status: 'error',
                message: 'Acceso denegado. Rol incorrecto'
            });
        }

        // Obtener información del proveedor
        const [proveedorResult]: any = await db.execute(
            'SELECT id_proveedor, nombres, apellidos, Email FROM Proveedor WHERE id_proveedor = ?',
            [idUser]
        );

        console.log('Resultado de la consulta del proveedor:', proveedorResult);

        if (!proveedorResult || proveedorResult.length === 0) {
            console.log('Error: Proveedor no encontrado');
            return res.status(404).json({
                status: 'error',
                message: 'Proveedor no encontrado'
            });
        }

        const proveedor = proveedorResult[0];

        // Obtener información de teléfono si existe
        const [phoneResult]: any = await db.execute(
            'SELECT númeroTelefono, tipo FROM Telefono WHERE id_cliente = ?',
            [idUser]
        );

        console.log('Resultado de la consulta del teléfono:', phoneResult);

        // Obtener información de dirección si existe
        const [addressResult]: any = await db.execute(
            'SELECT barrio, calle, numero FROM Direccion WHERE id_cliente = ?',
            [idUser]
        );

        console.log('Resultado de la consulta de la dirección:', addressResult);

        return res.status(200).json({
            status: 'success',
            data: {
                id_proveedor: proveedor.id_proveedor,
                nombres: proveedor.nombres,
                apellidos: proveedor.apellidos,
                Email: proveedor.Email,
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
        console.error('Error en profile-proveedor-controller:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
}

export default proveedorProfile;