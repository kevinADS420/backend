import express from "express";
import verifyToken from "../../middleware/VerifyToken";
import verifyCustomerRole from "../../middleware/VerifyCustomerRole";
import proveedorProfileController from "../../controllers/Proveedor-controller/profile-proveedor-controller";

const router = express.Router();

router.get('/', verifyToken, verifyCustomerRole, proveedorProfileController);

export default router;                     