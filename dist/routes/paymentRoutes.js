"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paymentController_1 = require("../controllers/paymentController");
const router = (0, express_1.Router)();
const paymentController = new paymentController_1.PaymentController();
// Crear una preferencia de pago
router.post('/create-preference', paymentController.createPaymentPreference.bind(paymentController));
// Webhook para recibir notificaciones de Mercado Pago
router.post('/webhook', paymentController.handleWebhook.bind(paymentController));
// Obtener el estado de un pago
router.get('/status/:paymentId', paymentController.getPaymentStatus.bind(paymentController));
exports.default = router;
