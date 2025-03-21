import { Request, Response, NextFunction } from "express";

const verifyRoles = (allowedRoles: string[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        if (!allowedRoles.includes(req.body.role)) {
            return res.status(403).json({ 
                status: `Acceso denegado. Roles permitidos: ${allowedRoles.join(', ')}` 
            });
        }
        next();
    };
};

export default verifyRoles;