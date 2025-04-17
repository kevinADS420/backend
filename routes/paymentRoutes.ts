import { Router } from 'express';
import { PaymentController } from '../controllers/paymentController';

const router = Router();
const paymentController = new PaymentController();

// Crear una preferencia de pago
router.post('/create-preference', paymentController.createPaymentPreference.bind(paymentController));

// Webhook para recibir notificaciones de Mercado Pago
router.post('/webhook', paymentController.handleWebhook.bind(paymentController));

// Obtener el estado de un pago
router.get('/status/:paymentId', paymentController.getPaymentStatus.bind(paymentController));

export default router; 