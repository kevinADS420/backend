import express from "express";
import getAllProductsController from "../../controllers/Product-controller/get-product-controller";

const router = express.Router();

router.get('/', getAllProductsController);

export default router;