import { Request, Response } from "express";
import Proveedor from '../../Dto/Proveedor-Dto/RegisterProveedorDto'
import ProveedorService from '../../services/ProveedorServices';


let register = async (req: Request, res: Response) => {
    try {

        const {
            nombres,
            apellidos,
            email,
            contraseña
        }   = req.body;
        const registerProveedor = await ProveedorService.register(new Proveedor(nombres, apellidos, email, contraseña))


        return res.status(201).json(
            { status: 'Registro con exsito'}
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {  
            res.status(600).json({ errorInfo: error.sqlMessage });
        }
    }
}


export default register;