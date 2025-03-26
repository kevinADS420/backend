import express from "express";
import createInventoryController from '../../controllers/Inventario-controller/controller-inventario';

const router = express.Router();

router.post('/create', createInventoryController);

export default router;