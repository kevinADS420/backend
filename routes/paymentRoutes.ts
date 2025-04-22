import express from "express";
import verifyToken from "../middleware/VerifyToken";
import verifyRoles from "../middleware/VerifyCustomerRole";
import { createPreference, handleWebhook } from "../controllers/Payment-controller/payment-controller";
import { getCart } from '../controllers/Payment-controller/get-cart-controller';
import { addToCart } from '../controllers/Payment-controller/add-to-cart-controller';

const router = express.Router();

// Crear una instancia del middleware con el rol 'customer'
const verifyCustomerRole = verifyRoles(['customer']);

// Ruta para crear una preferencia de pago
router.post('/create-preference', verifyToken, verifyCustomerRole, createPreference);

// Ruta para obtener el carrito de compras
router.get('/cart/:customerId', verifyToken, verifyCustomerRole, getCart);

// Ruta para agregar productos al carrito
router.post('/cart/add', verifyToken, verifyCustomerRole, addToCart);

// Ruta para recibir notificaciones de webhook
router.post('/webhook', handleWebhook);

export default router; 