import { Request, Response, NextFunction } from "express";

const verifyProveedorRole = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.role !== 'proveedor') {
        return res.status(403).json({ 
            status: 'error',
            message: 'Acceso denegado. Solo proveedores pueden acceder a esta ruta' 
        });
    }
    next();
};

export default verifyProveedorRole; 