import express from "express";
import RegisterProductController from '../../controllers/Product-controller/register-product-controller'
import RegisterValidator from '../../middleware/Product-Validator/RegisterValidatorProduct'
import upload from "../../middleware/upload";
import verifyToken from "../../middleware/VerifyToken";

const router = express.Router();

router.post('/', verifyToken, upload.single("imagen"), RegisterValidator.validatorParams, RegisterValidator.validator, RegisterProductController);

export default router;