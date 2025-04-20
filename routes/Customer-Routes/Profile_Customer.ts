import express from "express";
import verifyToken from "../../middleware/VerifyToken";
import verifyRoles from "../../middleware/VerifyCustomerRole";
import customerProfileController from "../../controllers/Customer-controller/profile-customer-controller";
import { getCustomerByEmail } from "../../controllers/Customer-controller/get-customer-by-email";

const router = express.Router();

// Crear una instancia del middleware con el rol 'customer'
const verifyCustomerRole = verifyRoles(['customer']);

router.get('/profile', verifyToken, verifyCustomerRole, customerProfileController);
router.get('/email/:email', getCustomerByEmail);

export default router;