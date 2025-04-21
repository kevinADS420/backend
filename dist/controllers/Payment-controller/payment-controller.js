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
const database_1 = __importDefault(require("../../config/database"));
const client = new mercadopago_1.MercadoPagoConfig({
    accessToken: 'APP_USR-844363715892854-041021-8efdb2d81700ddae2b860944b1a2fd9a-2381703263'
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
        const [cartItems] = yield database_1.default.query(`SELECT c.cantidad, p.id_producto, p.nombreP, p.Precio 
             FROM Carrito c 
             JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_cliente = ?`, [id_cliente]);
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
exports.default = createPreference;
