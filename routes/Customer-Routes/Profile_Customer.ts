import express from "express";
import verifyToken from "../../middleware/VerifyToken";
import verifyCustomerRole from "../../middleware/VerifyCustomerRole";
import customerProfileController from "../../controllers/Customer-controller/profile-customer-controller";

const router = express.Router();

router.get('/', verifyToken, verifyCustomerRole, customerProfileController);

export default router;