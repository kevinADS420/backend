"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyCustomerRole = (req, res, next) => {
    if (req.body.role !== 'customer') {
        return res.status(403).json({ status: 'Acceso denegado. Solo clientes.' });
    }
    next();
};
exports.default = verifyCustomerRole;
