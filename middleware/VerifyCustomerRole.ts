import { Request, Response, NextFunction } from "express";

const verifyCustomerRole = (req: Request, res: Response, next: NextFunction) => {
    if (req.body.role !== 'customer') {
        return res.status(403).json({ status: 'Acceso denegado. Solo clientes.' });
    }
    next();
};

export default verifyCustomerRole;