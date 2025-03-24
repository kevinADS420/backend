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
