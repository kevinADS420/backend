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
exports.handleWebhook = exports.createPreference = void 0;
const mercadopago_1 = require("mercadopago");
const database_1 = __importDefault(require("../../config/database"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const client = new mercadopago_1.MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN || ''
});
const createPreference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_cliente } = req.body;
        if (!id_cliente) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente no proporcionado'
            });
        }
        // Obtener los items del carrito con la información del producto
        const [cartItems] = yield database_1.default.query(`SELECT cantidad, id_producto, nombreP, Precio FROM Carrito JOIN Producto ON Carrito.id_producto = Producto.id_producto 
             WHERE id_cliente = ?`, [id_cliente]);
        if (cartItems.length === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'El carrito está vacío'
            });
        }
        // Crear items para la preferencia
        const preferenceItems = cartItems.map(item => ({
            id: item.id_producto.toString(),
            title: item.nombreP,
            unit_price: Number(item.Precio),
            quantity: Number(item.cantidad),
            currency_id: "COP"
        }));
        // Calcular el total
        const total = preferenceItems.reduce((sum, item) => sum + (item.unit_price * item.quantity), 0);
        // Crear la preferencia de pago
        const preference = new mercadopago_1.Preference(client);
        const result = yield preference.create({
            body: {
                items: preferenceItems,
                back_urls: {
                    success: "http://localhost:5173/success",
                    failure: "http://localhost:5173/failure",
                    pending: "http://localhost:5173/pending"
                },
                auto_return: "approved"
            }
        });
        // Guardar la preferencia en la base de datos
        yield database_1.default.query('INSERT INTO ordenes (id_cliente, id_preferencia, estado, total) VALUES (?, ?, ?, ?)', [id_cliente, result.id, 'pending', total]);
        return res.json({
            preferenceId: result.id,
            init_point: result.init_point,
            items: preferenceItems,
            total: total
        });
    }
    catch (error) {
        console.error('Error al crear la preferencia:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error al crear la preferencia',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.createPreference = createPreference;
const handleWebhook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, data } = req.body;
        if (type === 'payment') {
            const paymentId = data.id;
            const payment = new mercadopago_1.Payment(client);
            const result = yield payment.get({ id: paymentId });
            if (result.status === 'approved') {
                // Obtener el id_cliente y los items del carrito
                const [preference] = yield database_1.default.query('SELECT id_cliente FROM payment_preferences WHERE preference_id = ?', [data.preference_id]);
                if (!Array.isArray(preference) || preference.length === 0) {
                    console.error('Preferencia no encontrada:', data.preference_id);
                    return res.status(404).json({ message: 'Preferencia no encontrada' });
                }
                const { id_cliente } = preference[0];
                // Obtener los items del carrito
                const [cartItems] = yield database_1.default.query(`SELECT c.id_producto, c.cantidad FROM Carrito c WHERE c.id_cliente = ?`, [id_cliente]);
                // Actualizar el inventario y eliminar del carrito
                for (const item of cartItems) {
                    // Actualizar el inventario restando la cantidad comprada
                    yield database_1.default.query(`UPDATE Inventario 
                         SET cantidad_disponible = cantidad_disponible - ? 
                         WHERE id_producto = ?`, [item.cantidad, item.id_producto]);
                    // Eliminar el item del carrito
                    yield database_1.default.query('DELETE FROM Carrito WHERE id_cliente = ? AND id_producto = ?', [id_cliente, item.id_producto]);
                }
                console.log('Pago aprobado y carrito actualizado:', result);
            }
            else if (result.status === 'rejected') {
                console.log('Pago rechazado:', result);
            }
            else if (result.status === 'pending') {
                console.log('Pago pendiente:', result);
            }
        }
        res.status(200).send('OK');
    }
    catch (error) {
        console.error('Error al procesar el webhook:', error);
        res.status(500).json({ error: 'Error al procesar el webhook' });
    }
});
exports.handleWebhook = handleWebhook;
