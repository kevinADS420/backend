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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const paymentRepository_1 = require("../repositories/paymentRepository");
const axios_1 = __importDefault(require("axios"));
const database_1 = __importDefault(require("../config/database"));
// Configuración de Mercado Pago
const MERCADO_PAGO_ACCESS_TOKEN = process.env.MERCADO_PAGO_ACCESS_TOKEN || '';
class PaymentController {
    constructor() {
        this.paymentRepository = new paymentRepository_1.PaymentRepository();
    }
    createPaymentPreference(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                // Verificar si el cliente existe
                const connection = yield database_1.default.getConnection();
                try {
                    const [cliente] = yield connection.execute('SELECT id_cliente FROM cliente WHERE id_cliente = ?', [((_a = req.user) === null || _a === void 0 ? void 0 : _a.id_cliente) || 1] // Usar el ID del usuario autenticado o 1 como ejemplo
                    );
                    if (!Array.isArray(cliente) || cliente.length === 0) {
                        res.status(404).json({ message: "Cliente no encontrado" });
                        return;
                    }
                    const idCliente = cliente[0].id_cliente;
                    // Producto de ejemplo
                    const producto = {
                        id: 1,
                        nombre: "Tour por el Huerto",
                        descripcion: "Visita guiada por nuestro huerto ecológico",
                        precio: 50000, // 50.000 COP
                        cantidad: 1
                    };
                    // Crear preferencia de pago
                    const preference = {
                        items: [
                            {
                                title: producto.nombre,
                                description: producto.descripcion,
                                quantity: producto.cantidad,
                                currency_id: "COP",
                                unit_price: producto.precio
                            }
                        ],
                        back_urls: {
                            success: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/pago/exitoso`,
                            failure: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/pago/fallido`,
                            pending: `${process.env.FRONTEND_URL || 'http://localhost:3000'}/pago/pendiente`
                        },
                        auto_return: "approved",
                        notification_url: `${process.env.BACKEND_URL || 'http://localhost:3000'}/api/payments/webhook`,
                        statement_descriptor: "HUERTO MKT",
                        external_reference: `PRODUCTO_${producto.id}_CLIENTE_${idCliente}_${new Date().toISOString()}`
                    };
                    // Crear preferencia en Mercado Pago
                    let response;
                    try {
                        response = yield axios_1.default.post("https://api.mercadopago.com/checkout/preferences", preference, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`
                            }
                        });
                    }
                    catch (mpError) {
                        const error = mpError;
                        res.status(500).json({
                            message: "Error al procesar el pago",
                            error: error.message || "Error con el servicio de pagos"
                        });
                        return;
                    }
                    // Guardar la preferencia en la base de datos
                    yield this.paymentRepository.savePreference({
                        preferenceId: response.data.id,
                        items: preference.items,
                        payer: { id: idCliente },
                        status: 'pending'
                    });
                    res.status(200).json({
                        message: "Preferencia de pago creada exitosamente",
                        init_point: response.data.init_point,
                        preference_id: response.data.id,
                        factura: {
                            numero: `FAC-${Date.now()}`,
                            fecha: new Date().toISOString(),
                            producto: {
                                nombre: producto.nombre,
                                descripcion: producto.descripcion,
                                cantidad: producto.cantidad,
                                precioUnitario: producto.precio,
                                total: producto.precio * producto.cantidad
                            },
                            estado: "Pendiente de pago"
                        }
                    });
                }
                finally {
                    connection.release();
                }
            }
            catch (error) {
                console.error("Error en createPaymentPreference:", error);
                res.status(500).json({
                    message: "Error al procesar la solicitud",
                    error: error.message || "Error desconocido"
                });
            }
        });
    }
    handleWebhook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, data } = req.body;
                if (type === 'payment') {
                    const paymentId = data.id;
                    const paymentStatus = data.status;
                    // Actualizar el estado del pago en la base de datos
                    yield this.paymentRepository.updatePaymentStatus(paymentId, paymentStatus);
                    // Si el pago fue exitoso, generar factura
                    if (paymentStatus === 'approved') {
                        const factura = {
                            numero: `FAC-${Date.now()}`,
                            fecha: new Date().toISOString(),
                            pago_id: paymentId,
                            estado: "Pagado",
                            detalles: {
                                metodo_pago: data.payment_method_id,
                                monto: data.transaction_amount,
                                moneda: data.currency_id
                            }
                        };
                        // Aquí podrías guardar la factura en la base de datos
                        console.log("Factura generada:", factura);
                    }
                    res.status(200).json({ message: 'Webhook recibido y procesado correctamente' });
                }
                else {
                    res.status(400).json({ message: 'Tipo de webhook no soportado' });
                }
            }
            catch (error) {
                console.error('Error en webhook:', error);
                res.status(500).json({ message: 'Error al procesar webhook' });
            }
        });
    }
    getPaymentStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { paymentId } = req.params;
                const payment = yield this.paymentRepository.getPaymentByPreferenceId(paymentId);
                if (!payment) {
                    res.status(404).json({ message: 'Pago no encontrado' });
                    return;
                }
                res.status(200).json(payment);
            }
            catch (error) {
                console.error('Error al obtener estado del pago:', error);
                res.status(500).json({ message: 'Error al obtener estado del pago' });
            }
        });
    }
}
exports.PaymentController = PaymentController;
