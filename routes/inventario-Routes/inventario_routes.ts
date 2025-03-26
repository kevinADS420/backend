import express from "express";
import createInventoryController from '../../controllers/Inventario-controller/controller-inventario';

const router = express.Router();

router.post('/', createInventoryController);

export default router;