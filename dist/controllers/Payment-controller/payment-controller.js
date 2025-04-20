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
const mercadopago_1 = require("mercadopago");
const config_db_1 = __importDefault(require("../../config/config-db"));
const client = new mercadopago_1.MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN || 'TEST-1234567890123456-123456-12345678901234567890123456789012-123456789'
});
const createPreference = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    let connection;
    try {
        const { items, customerId } = req.body;
        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'El carrito está vacío'
            });
        }
        if (!customerId) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente no proporcionado'
            });
        }
        connection = yield config_db_1.default.getConnection();
        // Verificar que el cliente existe
        const [customerResult] = yield connection.execute('SELECT id_cliente FROM cliente WHERE id_cliente = ?', [customerId]);
        if (!customerResult || customerResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Cliente no encontrado'
            });
        }
        // Obtener información de los productos del carrito
        const productIds = items.map(item => item.id);
        const [productsResult] = yield connection.execute('SELECT id_producto, nombre, precio FROM producto WHERE id_producto IN (?)', [productIds]);
        if (!productsResult || productsResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Productos no encontrados'
            });
        }
        // Crear items para la preferencia
        const preferenceItems = items.map((item) => ({
            id: item.id.toString(),
            title: item.title,
            unit_price: Number(item.unit_price),
            quantity: Number(item.quantity),
            currency_id: item.currency_id
        }));
        // Crear la preferencia de pago
        const preference = new mercadopago_1.Preference(client);
        const result = yield preference.create({
            body: {
                items: preferenceItems,
                payer: {
                    email: (_a = req.body.payer) === null || _a === void 0 ? void 0 : _a.email,
                    name: (_b = req.body.payer) === null || _b === void 0 ? void 0 : _b.name,
                    surname: (_c = req.body.payer) === null || _c === void 0 ? void 0 : _c.surname
                },
                back_urls: {
                    success: "http://localhost:5173/success",
                    failure: "http://localhost:5173/failure",
                    pending: "http://localhost:5173/pending"
                },
                auto_return: "approved"
            }
        });
        // Guardar la preferencia en la base de datos
        yield connection.execute('INSERT INTO ordenes (id_cliente, id_preferencia, estado, total) VALUES (?, ?, ?, ?)', [customerId, result.id, 'pending', preferenceItems.reduce((total, item) => total + (item.unit_price * item.quantity), 0)]);
        return res.status(200).json({
            status: 'Preferencia creada exitosamente',
            data: result
        });
    }
    catch (error) {
        console.error('Error al crear la preferencia:', error);
        return res.status(500).json({
            status: 'Error al crear la preferencia',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
    finally {
        if (connection) {
            yield connection.release();
        }
    }
});
exports.default = createPreference;
