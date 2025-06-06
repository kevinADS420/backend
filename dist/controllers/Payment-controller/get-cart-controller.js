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
exports.getCart = void 0;
const database_1 = __importDefault(require("../../config/database"));
const getCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_cliente } = req.params;
    try {
        // Obtener los items del carrito con la información del producto
        const [items] = yield database_1.default.query(`SELECT c.id_producto, c.cantidad, p.nombreP, p.Precio, p.imagen 
             FROM Carrito c 
             JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_cliente = ?`, [id_cliente]);
        // Calcular el total del carrito
        const total = items.reduce((sum, item) => {
            return sum + (item.Precio * item.cantidad);
        }, 0);
        res.json({
            items: items,
            total: total
        });
    }
    catch (error) {
        console.error('Error al obtener el carrito:', error);
        res.status(500).json({
            error: 'Error al obtener el carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.getCart = getCart;
