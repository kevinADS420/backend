"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const mercadopago_1 = require("mercadopago");
const paymentRepository_1 = require("../repositories/paymentRepository");
class PaymentController {
    constructor() {
        this.paymentRepository = new paymentRepository_1.PaymentRepository();
        // Configurar Mercado Pago con tu access token
        this.client = new mercadopago_1.MercadoPagoConfig({
            accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || ''
        });
    }
    // Crear una preferencia de pago
    createPaymentPreference(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { items, payer, back_urls } = req.body;
                const preference = {
                    items: items.map((item) => ({
                        title: item.title,
                        unit_price: Number(item.price),
                        quantity: Number(item.quantity),
                    })),
                    payer: {
                        email: payer.email,
                    },
                    back_urls: {
                        success: back_urls.success,
                        failure: back_urls.failure,
                        pending: back_urls.pending,
                    },
                    auto_return: "approved",
                };
                const preferenceClient = new mercadopago_1.Preference(this.client);
                const response = yield preferenceClient.create({ body: preference });
                // Guardar la preferencia en la base de datos
                yield this.paymentRepository.savePreference({
                    preferenceId: response.id || '',
                    items,
                    payer,
                    status: 'pending'
                });
                res.json({
                    id: response.id,
                    init_point: response.init_point
                });
            }
            catch (error) {
                console.error('Error creating payment preference:', error);
                res.status(500).json({ error: 'Error creating payment preference' });
            }
        });
    }
    // Webhook para recibir notificaciones de Mercado Pago
    handleWebhook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, data } = req.body;
                if (type === 'payment') {
                    const paymentId = data.id;
                    const paymentClient = new mercadopago_1.Payment(this.client);
                    const payment = yield paymentClient.get({ id: paymentId });
                    // Actualizar el estado del pago en la base de datos
                    yield this.paymentRepository.updatePaymentStatus(paymentId, payment.status || 'unknown');
                    // Aquí puedes agregar lógica adicional según el estado del pago
                    switch (payment.status) {
                        case 'approved':
                            // Pago aprobado
                            break;
                        case 'rejected':
                            // Pago rechazado
                            break;
                        case 'pending':
                            // Pago pendiente
                            break;
                    }
                }
                res.sendStatus(200);
            }
            catch (error) {
                console.error('Error processing webhook:', error);
                res.sendStatus(500);
            }
        });
    }
    // Obtener el estado de un pago
    getPaymentStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { paymentId } = req.params;
                const paymentClient = new mercadopago_1.Payment(this.client);
                const payment = yield paymentClient.get({ id: paymentId });
                res.json({
                    status: payment.status,
                    status_detail: payment.status_detail,
                    transaction_details: payment.transaction_details
                });
            }
            catch (error) {
                console.error('Error getting payment status:', error);
                res.status(500).json({ error: 'Error getting payment status' });
            }
        });
    }
}
exports.PaymentController = PaymentController;
