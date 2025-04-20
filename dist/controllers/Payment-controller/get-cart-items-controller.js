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
exports.getCartItems = void 0;
const database_1 = __importDefault(require("../../config/database"));
const getCartItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId } = req.params;
    try {
        // Obtener todos los items del carrito del cliente con información del producto
        const [cartItems] = yield database_1.default.query(`
            SELECT c.id_carrito, c.cantidad, c.fecha_agregado,
                   p.id_producto, p.nombreP, p.tipo, p.Precio, p.imagen,
                   i.cantidad_disponible
            FROM Carrito c
            INNER JOIN Producto p ON c.id_producto = p.id_producto
            INNER JOIN Inventario i ON p.id_inventario = i.id_inventario
            WHERE c.id_cliente = ?
            ORDER BY c.fecha_agregado DESC
        `, [customerId]);
        res.json({
            items: cartItems,
            totalItems: cartItems.length
        });
    }
    catch (error) {
        console.error('Error al obtener items del carrito:', error);
        res.status(500).json({
            error: 'Error al obtener items del carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.getCartItems = getCartItems;
