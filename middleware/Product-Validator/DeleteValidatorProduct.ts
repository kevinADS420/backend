import {check, validationResult} from 'express-validator'
import { Request, Response, NextFunction } from 'express'

let validatorParams=[
    check('id_producto').isInt({ min: 1, max:60})
]

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