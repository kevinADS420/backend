import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('nombreP').isLength({ min: 1, max: 50}),
    check('tipo').isLength({ min: 1, max: 50}),
    check('Precio').isFloat({ min: 0.01, max: 99999.99 }), 
    check("imagen").custom((_, { req }) => {
        if (!req.file) {
            throw new Error("Se requiere una imagen");
        }
        return true;
    }),
    check('id_proveedor').isInt({ min: 1 }).withMessage('El ID del proveedor debe ser un número entero positivo'),
    // Nuevos validadores para los campos de inventario
    check('cantidad').optional().isInt({ min: 0 }).withMessage('La cantidad debe ser un número entero positivo'),
    check('fechaIngreso').optional().isISO8601().withMessage('Formato de fecha inválido para fecha de ingreso'),
    check('fechaSalida').optional().isISO8601().withMessage('Formato de fecha inválido para fecha de salida'),
    check('fechaRealización').optional().isISO8601().withMessage('Formato de fecha inválido para fecha de realización'),
];

function validator(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    next();
}


export default {
  validatorParams,
  validator
};