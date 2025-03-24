"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyRoles = (allowedRoles) => {
    return (req, res, next) => {
        if (!allowedRoles.includes(req.body.role)) {
            return res.status(403).json({
                status: `Acceso denegado. Roles permitidos: ${allowedRoles.join(', ')}`
            });
        }
        next();
    };
};
exports.default = verifyRoles;
