import { Request, Response } from "express";
import AdminRepository from "../../services/AdminServices";
import DeleteAdmin from "../../Dto/Admin-Dto/DeleteAdminDto"


const delete_admin = async (req: Request, res: Response) => {
    try {
        const {
            Apellidos,
            Email
        } = req.body;
        const delteAdmin = await AdminRepository.deleteAdmin(new DeleteAdmin(Apellidos, Email))
        return res.status(200).json(
            { message: 'Administrador eliminado con éxito' }
        );
    }catch (error: any) {
        if (error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ error: "Error, no se pudo eliminar el administrador", details: error.message });
        }
    }
}

export default delete_admin;