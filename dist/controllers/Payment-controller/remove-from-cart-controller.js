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
exports.removeFromCart = void 0;
const database_1 = __importDefault(require("../../config/database"));
const removeFromCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_cliente } = req.params;
    const { id_producto } = req.body;
    try {
        // Verificar si el item existe en el carrito
        const [item] = yield database_1.default.query('SELECT * FROM Carrito WHERE id_cliente = ? AND id_producto = ?', [id_cliente, id_producto]);
        if (item.length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }
        // Eliminar el item del carrito
        yield database_1.default.query('DELETE FROM Carrito WHERE id_cliente = ? AND id_producto = ?', [id_cliente, id_producto]);
        res.json({
            message: 'Item eliminado del carrito'
        });
    }
    catch (error) {
        console.error('Error al eliminar item del carrito:', error);
        res.status(500).json({
            error: 'Error al eliminar item del carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.removeFromCart = removeFromCart;
