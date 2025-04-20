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
const config_db_1 = __importDefault(require("../../config/config-db"));
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        const { customerId } = req.params;
        if (!customerId) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente no proporcionado'
            });
        }
        connection = yield config_db_1.default.getConnection();
        // Obtener los productos del carrito del cliente
        const [cartItems] = yield connection.execute(`SELECT c.id_carrito, c.cantidad, p.id_producto, p.nombreP, p.Precio, p.imagen 
             FROM Carrito c 
             INNER JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_cliente = ?`, [customerId]);
        // Calcular el total
        const total = cartItems.reduce((sum, item) => sum + (item.Precio * item.cantidad), 0);
        return res.status(200).json({
            status: 'success',
            data: {
                items: cartItems,
                total: total
            }
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error al obtener el carrito',
            error: error.message
        });
    }
    finally {
        if (connection) {
            yield connection.release();
        }
    }
});
exports.default = getCart;
