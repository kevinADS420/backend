import { Request, Response } from "express";
import db from "../../config/config-db";

const getProveedorByEmail = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        
        if (!email) {
            return res.status(400).json({
                status: 'error',
                message: 'Email no proporcionado'
            });
        }

        // Obtener información del proveedor
        const [proveedorResult]: any = await db.execute(
            'SELECT id_proveedor, nombres, apellidos, Email FROM Proveedor WHERE Email = ?',
            [email]
        );

        if (!proveedorResult || proveedorResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Proveedor no encontrado'
            });
        }

        const proveedor = proveedorResult[0];
        const idUser = proveedor.id_proveedor;

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
        console.error('Error en get-proveedor-by-email:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
}

export { getProveedorByEmail }; 