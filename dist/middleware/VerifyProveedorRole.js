"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyProveedorRole = (req, res, next) => {
    if (req.body.role !== 'proveedor') {
        return res.status(403).json({
            status: 'error',
            message: 'Acceso denegado. Solo proveedores pueden acceder a esta ruta'
        });
    }
    next();
};
exports.default = verifyProveedorRole;
