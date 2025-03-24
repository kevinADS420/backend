"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
let validatorParams = [
    (0, express_validator_1.check)('nombre').isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)('apellido1').isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)('apellido2').isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)('direccion').isLength({ min: 1, max: 100 }),
    (0, express_validator_1.check)('calle').isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)('carrera').isLength({ min: 1, max: 50 }),
    (0, express_validator_1.check)('email').isEmail(),
    (0, express_validator_1.check)('contraseña').isLength({ min: 8, max: 500 })
];
function validator(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}
exports.default = {
    validator, validatorParams
};
