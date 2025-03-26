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
const RegisterProductDto_1 = __importDefault(require("../../Dto/Product-Dto/RegisterProductDto"));
const InventoryDto_1 = __importDefault(require("../../Dto/Product-Dto/InventoryDto"));
const ProductServices_1 = __importDefault(require("../../services/ProductServices"));
let register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombreP, tipo, Precio, cantidad, // Nuevo campo para la cantidad del inventario
        fechaIngreso, // Fecha de ingreso 
        fechaSalida, // Fecha de salida
        fechaRealización // Fecha de realización
         } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "Se requiere una imagen" });
        }
        const imagen = req.file.buffer; // Imagen en formato binario
        // Convertir las fechas si están en formato string
        const parsedFechaIngreso = fechaIngreso ? new Date(fechaIngreso) : new Date();
        const parsedFechaSalida = fechaSalida ? new Date(fechaSalida) : new Date();
        const parsedFechaRealización = fechaRealización ? new Date(fechaRealización) : new Date();
        // Validar que las fechas sean válidas
        if (isNaN(parsedFechaIngreso.getTime()) || isNaN(parsedFechaSalida.getTime()) || isNaN(parsedFechaRealización.getTime())) {
            return res.status(400).json({ error: "Formato de fecha inválido" });
        }
        // Validar cantidad
        const cantidadInventario = cantidad ? parseInt(cantidad) : 0;
        if (isNaN(cantidadInventario) || cantidadInventario < 0) {
            return res.status(400).json({ error: "La cantidad debe ser un número positivo" });
        }
        // Crear objeto de producto
        const productData = new RegisterProductDto_1.default(nombreP, tipo, Precio, imagen);
        // Crear objeto de inventario
        const inventoryData = new InventoryDto_1.default(cantidadInventario, parsedFechaIngreso, parsedFechaSalida, parsedFechaRealización);
        // Registrar producto e inventario en una transacción
        const result = yield ProductServices_1.default.registerWithInventory(productData, inventoryData);
        return res.status(201).json({
            status: "Producto Registrado",
            message: "Producto e inventario registrados correctamente",
            data: {
                producto: nombreP,
                productId: result.productId,
                inventario: {
                    cantidad: cantidadInventario,
                    fechaIngreso: parsedFechaIngreso,
                    fechaSalida: parsedFechaSalida,
                    fechaRealización: parsedFechaRealización
                }
            }
        });
    }
    catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        console.error("Error al registrar producto:", error); // Mejorar el logging
        res.status(500).json({ error: error.message || "Error interno del servidor" });
    }
});
exports.default = register;
