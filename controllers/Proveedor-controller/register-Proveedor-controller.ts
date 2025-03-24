import { Request, Response } from "express";
import Proveedor from '../../Dto/Proveedor-Dto/RegisterProveedorDto'
import ProveedorService from '../../services/ProveedorServices';


let register = async (req: Request, res: Response) => {
    try {
        console.log('Solicitud recibida:', req.body);  // Añade esto para depuración

        const {
            nombres,
            apellidos,
            Email,
            contraseña
        } = req.body;
        
        console.log('Datos extraídos:', { nombres, apellidos, Email });  // Añade esto
        
        const registerProveedor = await ProveedorService.register(new Proveedor(nombres, apellidos, Email, contraseña));
        console.log('Registro exitoso');  // Añade esto
        
        return res.status(201).json({ status: 'Registro con éxito' });
    } catch (error: any) {
        console.error('Error al registrar proveedor:', error);  // Añade esto
        
        if (error && error.code == "ER_DUP_ENTRY") {  
            return res.status(409).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ error: "Error interno del servidor", details: error.message });
        }
    }
}


export default register;