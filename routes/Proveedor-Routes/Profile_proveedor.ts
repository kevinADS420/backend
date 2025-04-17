import express from "express";
import verifyToken from "../../middleware/VerifyToken";
import verifyProveedorRole from "../../middleware/VerifyProveedorRole";
import proveedorProfileController from "../../controllers/Proveedor-controller/profile-proveedor-controller";
import { getProveedorByEmail } from "../../controllers/Proveedor-controller/get-proveedor-by-email";

const router = express.Router();

router.get('/', verifyToken, verifyProveedorRole, proveedorProfileController);
router.get('/email/:email', getProveedorByEmail);

export default router;                     