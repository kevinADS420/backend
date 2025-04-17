import express from "express";
import getProveedorByEmailController from "../../controllers/Proveedor-controller/get-Proveedor-controller";

const router = express.Router();

router.get('/emil', getProveedorByEmailController);
router.post('/', getProveedorByEmailController);

export default router;