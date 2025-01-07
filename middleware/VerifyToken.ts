import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

interface JwtPayload {
    data: { id: number, role: string },
    exp: number,
    iat: number
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    let authorization = req.get('Authorization');    
    if (authorization) {
        const token = authorization.split(' ')[1];        
        if (!token) {
            return res.status(401).json({ status: 'Token is required' });
        }
        try {
            let decoded = jwt.verify(token, process.env.KEY_TOKEN as string) as JwtPayload;
            if (decoded.data.role !== 'admin') {
                return res.status(403).json({ status: 'Acceso denegado. Solo administradores.' });
            }
            req.body.id = decoded.data.id;
            next();
        } catch (error) {
            return res.status(403).json({ status: 'Unauthorized' });
        }
    } else {
        return res.status(403).json({ status: 'Se requiere encabezado de autorización' });
    }
}

export default verifyToken;
