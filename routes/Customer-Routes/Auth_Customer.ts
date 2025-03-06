import express from "express";
import customerAuthController from '../../controllers/Customer-controller/auth-customer-controller';

const router = express.Router();

router.post('/', customerAuthController);

export default router;