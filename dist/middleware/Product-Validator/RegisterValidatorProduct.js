"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
let validatorParams = [
    (0, express_validator_1.check)('nombreP').isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)('tipo').isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)('Precio').isFloat({ min: 0.01, max: 99999.99 }),
    (0, express_validator_1.check)("imagen").custom((_, { req }) => {
        if (!req.file) {
            throw new Error("Se requiere una imagen");
        }
        return true;
    }),
    (0, express_validator_1.check)('id_proveedor').isInt({ min: 0 }),
    (0, express_validator_1.check)('id_proveedor').isInt({ min: 1 }).withMessage('El ID del proveedor debe ser un número entero positivo'),
    // Nuevos validadores para los campos de inventario
    (0, express_validator_1.check)('cantidad').optional().isInt({ min: 0 }).withMessage('La cantidad debe ser un número entero positivo'),
    (0, express_validator_1.check)('fechaIngreso').optional().isISO8601().withMessage('Formato de fecha inválido para fecha de ingreso'),
    (0, express_validator_1.check)('fechaSalida').optional().isISO8601().withMessage('Formato de fecha inválido para fecha de salida'),
    (0, express_validator_1.check)('fechaRealización').optional().isISO8601().withMessage('Formato de fecha inválido para fecha de realización'),
];
function validator(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}
exports.default = {
    validatorParams,
    validator
};
