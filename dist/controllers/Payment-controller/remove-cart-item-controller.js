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
exports.removeCartItem = void 0;
const database_1 = __importDefault(require("../../config/database"));
const removeCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cartItemId } = req.params;
    try {
        // Verificar si el item existe en el carrito
        const [existingItem] = yield database_1.default.query('SELECT * FROM Carrito WHERE id_carrito = ?', [cartItemId]);
        if (existingItem.length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }
        // Eliminar el item del carrito
        yield database_1.default.query('DELETE FROM Carrito WHERE id_carrito = ?', [cartItemId]);
        res.json({
            message: 'Item eliminado del carrito exitosamente',
            cartItemId: cartItemId
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
exports.removeCartItem = removeCartItem;
