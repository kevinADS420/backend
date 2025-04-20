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
exports.updateCart = void 0;
const database_1 = __importDefault(require("../../config/database"));
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customerId, cartItemId } = req.params;
    const { quantity } = req.body;
    if (!quantity || quantity < 0) {
        return res.status(400).json({
            error: 'La cantidad debe ser un número positivo'
        });
    }
    try {
        // Verificar si el item existe en el carrito
        const [existingItem] = yield database_1.default.query('SELECT id_carrito FROM Carrito WHERE id_carrito = ? AND id_cliente = ?', [cartItemId, customerId]);
        if (existingItem.length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }
        if (quantity === 0) {
            // Eliminar el item si la cantidad es 0
            yield database_1.default.query('DELETE FROM Carrito WHERE id_carrito = ?', [cartItemId]);
            return res.json({
                message: 'Producto eliminado del carrito'
            });
        }
        // Actualizar la cantidad
        yield database_1.default.query('UPDATE Carrito SET cantidad = ? WHERE id_carrito = ?', [quantity, cartItemId]);
        res.json({
            message: 'Cantidad actualizada exitosamente'
        });
    }
    catch (error) {
        console.error('Error al actualizar el carrito:', error);
        res.status(500).json({
            error: 'Error al actualizar el carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.updateCart = updateCart;
