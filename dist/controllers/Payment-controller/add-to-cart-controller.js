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
exports.addToCart = void 0;
const database_1 = __importDefault(require("../../config/database"));
const addToCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_cliente } = req.params;
    const { id_producto, cantidad } = req.body;
    try {
        // Verificar si el producto existe y obtener su cantidad disponible
        const [product] = yield database_1.default.query('SELECT cantidad FROM Producto WHERE id_producto = ?', [id_producto]);
        if (product.length === 0) {
            return res.status(404).json({
                error: 'Producto no encontrado'
            });
        }
        const producto = product[0];
        // Verificar si hay suficiente cantidad disponible
        if (cantidad > producto.cantidad) {
            return res.status(400).json({
                error: 'No hay suficiente cantidad disponible',
                cantidad_disponible: producto.cantidad
            });
        }
        // Verificar si el producto ya está en el carrito
        const [existingItem] = yield database_1.default.query('SELECT * FROM Carrito WHERE id_cliente = ? AND id_producto = ?', [id_cliente, id_producto]);
        if (existingItem.length > 0) {
            // Si el producto ya está en el carrito, actualizar la cantidad
            const newCantidad = existingItem[0].cantidad + cantidad;
            if (newCantidad > producto.cantidad) {
                return res.status(400).json({
                    error: 'No hay suficiente cantidad disponible',
                    cantidad_disponible: producto.cantidad
                });
            }
            yield database_1.default.query('UPDATE Carrito SET cantidad = ? WHERE id_cliente = ? AND id_producto = ?', [newCantidad, id_cliente, id_producto]);
            return res.json({
                message: 'Cantidad actualizada en el carrito',
                cantidad: newCantidad
            });
        }
        // Si el producto no está en el carrito, agregarlo
        yield database_1.default.query('INSERT INTO Carrito (id_cliente, id_producto, cantidad) VALUES (?, ?, ?)', [id_cliente, id_producto, cantidad]);
        res.status(201).json({
            message: 'Producto agregado al carrito',
            cantidad: cantidad
        });
    }
    catch (error) {
        console.error('Error al agregar producto al carrito:', error);
        res.status(500).json({
            error: 'Error al agregar producto al carrito',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.addToCart = addToCart;
