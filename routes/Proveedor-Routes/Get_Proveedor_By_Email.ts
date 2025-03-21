import express from "express";
import getProveedorByEmailController from "../../controllers/Proveedor-controller/get-Proveedor-controller";

const router = express.Router();

router.get('/:email', getProveedorByEmailController);

export default router;