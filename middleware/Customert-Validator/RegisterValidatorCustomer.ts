import { check, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express";

let validatorParams = [
    check('Nombres').isLength({ min: 1, max: 50}),
    check('Apellidos').isLength({ min: 1, max: 50}),
    check('Email').isLength({ min: 1, max: 50}),
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