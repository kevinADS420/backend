import express from "express";
import getAllProductsController from "../../controllers/Product-controller/get-product-controller";
import verifyToken from "../../middleware/VerifyToken";

const router = express.Router();

router.get('/', verifyToken, getAllProductsController);

export default router;