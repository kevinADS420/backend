import express from "express";
import updateProductController from '../../controllers/Product-controller/update-product-controller'
import updateValidatorProduct from "../../middleware/Product-Validator/updateValidatorProduct";



const router = express.Router();

router.patch('/', updateValidatorProduct.validatorParams, updateValidatorProduct.validator, updateProductController)

export default router;