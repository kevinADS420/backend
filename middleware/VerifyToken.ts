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
    console.log('Authorization header:', authorization);
    
    if (authorization) {
        const token = authorization.split(' ')[1];        
        console.log('Token recibido:', token);
        
        if (!token) {
            console.log('Error: Token no proporcionado');
            return res.status(401).json({ status: 'Token is required' });
        }
        
        try {
            let decoded = jwt.verify(token, process.env.KEY_TOKEN as string) as JwtPayload;
            console.log('Token decodificado:', decoded);
            
            // Asegurarse de que los datos del token estén presentes
            if (!decoded.data || !decoded.data.id || !decoded.data.role) {
                console.log('Error: Token inválido - datos faltantes');
                return res.status(401).json({ status: 'Token inválido' });
            }
            
            req.body.id = decoded.data.id;
            req.body.role = decoded.data.role;
            
            console.log('Datos del token asignados al request:', {
                id: req.body.id,
                role: req.body.role
            });
            
            // Si la ruta es para productos y el rol es proveedor, incluir el id_proveedor
            if (req.path.includes('/product') && decoded.data.role === 'proveedor') {
                req.body.id_proveedor = decoded.data.id;
            } else if (req.path.includes('/product') && decoded.data.role === 'inventario') {
                req.body.id_inventario = decoded.data.id;
            }
            
            next();
        } catch (error) {
            console.error('Error al verificar el token:', error);
            return res.status(403).json({ status: 'Unauthorized' });
        }
    } else {
        console.log('Error: No se encontró el header de autorización');
        return res.status(403).json({ status: 'Se requiere encabezado de autorización' });
    }
}

export default verifyToken;