"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeleteValidatorProveedor {
    validatorParams(req, res, next) {
        const { id_proveedor } = req.body;
        if (!id_proveedor) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de proveedor es requerido'
            });
        }
        if (isNaN(Number(id_proveedor))) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de proveedor debe ser un número'
            });
        }
        next();
    }
    validator(req, res, next) {
        // Aquí puedes agregar validaciones adicionales si son necesarias
        next();
    }
}
const deleteValidatorProveedor = new DeleteValidatorProveedor();
exports.default = deleteValidatorProveedor;
