import { Request, Response, NextFunction } from "express";

const verifyAdminRole = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.role !== 'admin') {
        return res.status(403).json({ 
            status: 'error',
            message: 'Acceso denegado. Solo administradores pueden acceder a esta ruta' 
        });
    }
    next();
};

export default verifyAdminRole; 