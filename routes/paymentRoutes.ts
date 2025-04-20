import express from "express";
import verifyToken from "../middleware/VerifyToken";
import verifyRoles from "../middleware/VerifyCustomerRole";
import createPreference from "../controllers/Payment-controller/payment-controller";
import getCart from '../controllers/Payment-controller/get-cart-controller';

const router = express.Router();

// Crear una instancia del middleware con el rol 'customer'
const verifyCustomerRole = verifyRoles(['customer']);

// Ruta para crear una preferencia de pago
router.post('/create-preference', verifyToken, verifyCustomerRole, createPreference);

// Ruta para obtener el carrito de compras
router.get('/cart/:customerId', getCart);

// Ruta para recibir notificaciones de webhook
router.post('/webhook', (req, res) => {
    // Aquí manejaremos las notificaciones de Mercado Pago
    console.log('Webhook recibido:', req.body);
    res.status(200).send('OK');
});

export default router; 