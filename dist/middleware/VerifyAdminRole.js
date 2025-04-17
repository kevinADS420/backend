"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyAdminRole = (req, res, next) => {
    if (req.body.role !== 'admin') {
        return res.status(403).json({
            status: 'error',
            message: 'Acceso denegado. Solo administradores pueden acceder a esta ruta'
        });
    }
    next();
};
exports.default = verifyAdminRole;
