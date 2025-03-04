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
]

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