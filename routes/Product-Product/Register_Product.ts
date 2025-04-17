import express from "express";
import RegisterProductController from '../../controllers/Product-controller/register-product-controller'
import RegisterValidator from '../../middleware/Product-Validator/RegisterValidatorProduct'
import upload from "../../middleware/upload";

const   router = express.Router();

router.post('/',upload.single("imagen"), RegisterValidator.validatorParams, RegisterValidator.validator, RegisterProductController)


export default router;