import express from "express";
import verifyToken from "../../middleware/VerifyToken";
import verifyAdminRole from "../../middleware/VerifyAdminRole";
import adminProfileController from "../../controllers/Admin-controller/profile-admin-controller";
import { getAdminByEmail } from "../../controllers/Admin-controller/get-admin-by-email";

const router = express.Router();

router.get('/', verifyToken, verifyAdminRole, adminProfileController);
router.get('/email/:email', getAdminByEmail);

export default router; 