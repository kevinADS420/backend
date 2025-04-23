"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteValidatorCustomer {
    validatorParams(req, res, next) {
        const { id_cliente } = req.body;
        if (!id_cliente) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente es requerido'
            });
        }
        if (isNaN(Number(id_cliente))) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente debe ser un número'
            });
        }
        next();
    }
    validator(req, res, next) {
        // Aquí puedes agregar validaciones adicionales si son necesarias
        next();
    }
}
const deleteValidatorCustomer = new DeleteValidatorCustomer();
exports.default = deleteValidatorCustomer;
