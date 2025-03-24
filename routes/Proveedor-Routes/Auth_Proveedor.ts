import express from "express";
import proveedorAuthController from '../../controllers/Proveedor-controller/auth-proveedor-controller';

const router = express.Router();

router.post('/', proveedorAuthController);

export default router;