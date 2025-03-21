import express from "express";
import proveedorAuthController from '../../controllers/Proveedor-controller/get-Proveedor-controller';


const router = express.Router();

router.post('/', proveedorAuthController);

export default router;