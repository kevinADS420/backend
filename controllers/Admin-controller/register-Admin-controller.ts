import { Request, Response } from "express"; 
import Admin from "../../Dto/Admin-Dto/RegisterAdminDto";
import AdminSercives from "../../services/AdminServices";


let register = async (req: Request, res: Response) => {
    try {
        const {
            Nombres,
            Apellidos,
            Email,
            contraseña
        } = req.body;
        const registerAdmin = await AdminSercives.register(new Admin( Nombres, Apellidos, Email, contraseña ))
        return res.status(201).json(
            {  status: '!Admin registrado correctamente¡' }
        );


    }catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }   
}

export default register;
