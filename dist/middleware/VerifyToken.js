"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const verifyToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
            let decoded = jsonwebtoken_1.default.verify(token, process.env.KEY_TOKEN);
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
            }
            else if (req.path.includes('/product') && decoded.data.role === 'inventario') {
                req.body.id_inventario = decoded.data.id;
            }
            next();
        }
        catch (error) {
            console.error('Error al verificar el token:', error);
            return res.status(403).json({ status: 'Unauthorized' });
        }
    }
    else {
        console.log('Error: No se encontró el header de autorización');
        return res.status(403).json({ status: 'Se requiere encabezado de autorización' });
    }
});
exports.default = verifyToken;
