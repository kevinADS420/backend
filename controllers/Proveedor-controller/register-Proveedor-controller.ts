import { Request, Response } from "express";
import Proveedor from '../../Dto/Proveedor-Dto/RegisterProveedorDto';
import ProveedorService from '../../services/ProveedorServices';

let register = async (req: Request, res: Response) => {
    try {
    const { nombres, apellidos, Email, contraseña } = req.body;
    const result = await ProveedorService.register(new Proveedor(nombres, apellidos, Email, contraseña));

    if (result) {
      return res.status(201).json({
        status: 'Registro exitoso'
      });
    }
    return res.status(400).json({
      status: 'Error en el registro'
    });
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {  
      return res.status(409).json({ 
        status: 'Error',
        message: error.sqlMessage 
      });
    }
    return res.status(500).json({
      status: 'Error',
      message: 'Error interno del servidor'
    });
        }
    }

export default register;