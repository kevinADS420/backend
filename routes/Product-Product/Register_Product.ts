import express from "express";
import RegisterProductController from '../../controllers/Product-controller/register-product-controller'
import RegisterValidator from '../../middleware/Product-Validator/RegisterValidatorProduct'

const router = express.Router();

router.post('/', RegisterValidator.validatorParams, RegisterValidator.validator, RegisterProductController)


export default router;