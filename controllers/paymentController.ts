import { Request, Response } from 'express';
import { MercadoPagoConfig, Preference, Payment } from 'mercadopago';
import { PaymentRepository } from '../repositories/paymentRepository';

export class PaymentController {
    private paymentRepository: PaymentRepository;
    private client: MercadoPagoConfig;

    constructor() {
        this.paymentRepository = new PaymentRepository();
        // Configurar Mercado Pago con tu access token
        this.client = new MercadoPagoConfig({ 
            accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN || '' 
        });
    }

    // Crear una preferencia de pago
    async createPaymentPreference(req: Request, res: Response) {
        try {
            const { items, payer, back_urls } = req.body;

            const preference = {
                items: items.map((item: any) => ({
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

            const preferenceClient = new Preference(this.client);
            const response = await preferenceClient.create({ body: preference });

            // Guardar la preferencia en la base de datos
            await this.paymentRepository.savePreference({
                preferenceId: response.id || '',
                items,
                payer,
                status: 'pending'
            });

            res.json({
                id: response.id,
                init_point: response.init_point
            });
        } catch (error) {
            console.error('Error creating payment preference:', error);
            res.status(500).json({ error: 'Error creating payment preference' });
        }
    }

    // Webhook para recibir notificaciones de Mercado Pago
    async handleWebhook(req: Request, res: Response) {
        try {
            const { type, data } = req.body;

            if (type === 'payment') {
                const paymentId = data.id;
                const paymentClient = new Payment(this.client);
                const payment = await paymentClient.get({ id: paymentId });

                // Actualizar el estado del pago en la base de datos
                await this.paymentRepository.updatePaymentStatus(
                    paymentId,
                    payment.status || 'unknown'
                );

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
        } catch (error) {
            console.error('Error processing webhook:', error);
            res.sendStatus(500);
        }
    }

    // Obtener el estado de un pago
    async getPaymentStatus(req: Request, res: Response) {
        try {
            const { paymentId } = req.params;
            const paymentClient = new Payment(this.client);
            const payment = await paymentClient.get({ id: paymentId });

            res.json({
                status: payment.status,
                status_detail: payment.status_detail,
                transaction_details: payment.transaction_details
            });
        } catch (error) {
            console.error('Error getting payment status:', error);
            res.status(500).json({ error: 'Error getting payment status' });
        }
    }
} 