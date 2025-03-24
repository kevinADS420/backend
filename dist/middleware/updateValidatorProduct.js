"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
let validatorParams = [
    (0, express_validator_1.check)('id').isLength({ min: 1, max: 100 }),
    (0, express_validator_1.check)('nombre').isLength({ min: 1, max: 100 }),
    (0, express_validator_1.check)('precio').isFloat({ min: 0.01, max: 99999.99 }),
    (0, express_validator_1.check)('caracteristicas').isLength({ min: 1, max: 200 }),
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
