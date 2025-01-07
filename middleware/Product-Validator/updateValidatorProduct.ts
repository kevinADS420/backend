import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";
import { isUndefined } from 'util';

let validatorParams = [
    check('id').isLength({ min: 1, max: 100 }),
    check('nombre').isLength({ min: 1, max: 100}),
    check('precio').isFloat({ min: 0.01, max: 99999.99 }), 
    check('caracteristicas').isLength({ min: 1, max: 200}),
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