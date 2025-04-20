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
exports.updateCartItem = void 0;
const database_1 = __importDefault(require("../../config/database"));
const updateCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cartItemId } = req.params;
    const { cantidad } = req.body;
    try {
        // Verificar si el item existe y obtener la cantidad disponible del producto
        const [existingItem] = yield database_1.default.query(`SELECT c.*, p.cantidad as cantidad_disponible 
             FROM Carrito c 
             JOIN Producto p ON c.id_producto = p.id_producto 
             WHERE c.id_carrito = ?`, [cartItemId]);
        if (existingItem.length === 0) {
            return res.status(404).json({
                error: 'Item no encontrado en el carrito'
            });
        }
        const item = existingItem[0];
        // Verificar si hay suficiente cantidad disponible
        if (cantidad > item.cantidad_disponible) {
            return res.status(400).json({
                error: 'No hay suficiente cantidad disponible',
                cantidad_disponible: item.cantidad_disponible
            });
        }
        // Actualizar la cantidad
        yield database_1.default.query('UPDATE Carrito SET cantidad = ? WHERE id_carrito = ?', [cantidad, cartItemId]);
        res.json({
            message: 'Cantidad actualizada correctamente',
            cantidad: cantidad
        });
    }
    catch (error) {
        console.error('Error al actualizar la cantidad del item:', error);
        res.status(500).json({
            error: 'Error al actualizar la cantidad del item',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.updateCartItem = updateCartItem;
