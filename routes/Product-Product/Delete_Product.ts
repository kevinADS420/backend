import express from "express";
import deleteProductController from "../../controllers/Product-controller/delete-product-controller";
import deleteValidatorProduct from "../../middleware/Product-Validator/DeleteValidatorProduct";

const router = express.Router();

router.delete('/', deleteProductController)

export default router;