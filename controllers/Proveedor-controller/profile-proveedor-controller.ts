import { Request, Response } from "express";

let proveedorProfile = async (req: Request, res: Response) => {
    try {
        const idUser = req.body.id;
        const role = req.body.role;
        return res.status(200).json({
            status: 'Get proveedor profile OK',
            id: idUser,
            role: role
        });
    } catch (error: any) {
        return res.status(500).json({
            errorInfo: "An unknown error has occurred"
        });
    }
}

export default proveedorProfile;