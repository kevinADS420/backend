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
exports.getCartItem = void 0;
const database_1 = __importDefault(require("../../config/database"));
const getCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cartItemId } = req.params;
    try {
        // Obtener detalles del item del carrito incluyendo información del producto
        const [cartItem] = yield database_1.default.query(`SELECT c.*, p.nombreP, p.Precio, p.cantidad_disponible, p.imagen 
             FROM Carrito c 
             JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_carrito = ?`, [cartItemId]);
        if (cartItem.length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }
        const item = cartItem[0];
        // Calcular subtotal
        const subtotal = item.Precio * item.cantidad;
        res.json({
            id_carrito: item.id_carrito,
            id_producto: item.id_producto,
            nombre_producto: item.nombreP,
            precio_unitario: item.Precio,
            cantidad: item.cantidad,
            cantidad_disponible: item.cantidad_disponible,
            imagen: item.imagen,
            subtotal: subtotal
        });
    }
    catch (error) {
        console.error('Error al obtener detalles del item del carrito:', error);
        res.status(500).json({
            error: 'Error al obtener detalles del item del carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.getCartItem = getCartItem;
