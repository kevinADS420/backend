import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('nombre').isLength({ min: 1, max: 50}),
    check('apellido1').isLength({ min: 1, max: 50}),
    check('apellido2').isLength({ min: 1, max: 50}),
    check('direccion').isLength({ min: 1, max: 100}),
    check('calle').isLength({ min: 1, max: 50}),
    check('carrera').isLength({ min: 1, max: 50}),
    check('email').isEmail(),
    check('contraseña').isLength({ min: 8, max: 500})
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