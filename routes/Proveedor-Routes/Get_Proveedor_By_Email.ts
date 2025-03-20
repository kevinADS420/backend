import express from "express";
import getProveedorByEmailController from "../../controllers/Proveedor-controller.ts/get-Proveedor-controller";

const router = express.Router();

// Ruta para obtener un cliente por su email
router.get('/:email', getProveedorByEmailController);

export default router;