import express from "express";
import getproductcontriller from "../../controllers/Product-controller/get-product-controller";
import GetValidatorProduct from "../../middleware/Product-Validator/GetValidatorProduct";

const router = express.Router();

router.get('/', GetValidatorProduct.validatorParams,GetValidatorProduct.validator,getproductcontriller)

export default router;