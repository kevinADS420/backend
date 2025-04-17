import express from "express";
import verifyToken from "../../middleware/VerifyToken";
import verifyCustomerRole from "../../middleware/VerifyCustomerRole";
import customerProfileController from "../../controllers/Customer-controller/profile-customer-controller";
import { getCustomerByEmail } from "../../controllers/Customer-controller/get-customer-by-email";

const router = express.Router();

router.get('/', verifyToken, verifyCustomerRole, customerProfileController);
router.get('/email/:email', getCustomerByEmail);

export default router;