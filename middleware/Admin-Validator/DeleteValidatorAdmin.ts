import {check, validationResult} from 'express-validator'
import { Request, Response, NextFunction } from 'express'


let validatorParams=[
    check('Apellidos').isLength({ min: 4, max:60}),
    check('Email').isEmail()
];

function validator( req:Request, res:Response, next: NextFunction){
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
    }
    next();
}


export default {
    validator, validatorParams
}