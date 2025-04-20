import express from "express";
import getCustomerByEmailController from "../../controllers/Customer-controller/get-customer-by-email-controller";

const router = express.Router();

// Ruta para obtener un cliente por su email
router.get('/:email', getCustomerByEmailController);
router.post('/', getCustomerByEmailController);

export default router;