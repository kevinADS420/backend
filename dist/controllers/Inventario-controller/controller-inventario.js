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
const InventoryDto_1 = __importDefault(require("../../Dto/Product-Dto/InventoryDto"));
const InventoryServices_1 = __importDefault(require("../../services/InventoryServices"));
const createInventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { cantidad, fechaIngreso, fechaSalida, fechaRealización } = req.body;
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
        // Crear objeto de inventario (sin id_producto por ahora)
        const inventoryData = new InventoryDto_1.default(cantidadInventario, parsedFechaIngreso, parsedFechaSalida, parsedFechaRealización);
        // Registrar inventario
        const inventoryService = new InventoryServices_1.default();
        const result = yield inventoryService.createInventory(inventoryData);
        return res.status(201).json({
            status: "Inventario Registrado",
            message: "Registro de inventario creado correctamente",
            data: {
                id_inventario: result.id_inventario,
                cantidad: cantidadInventario,
                fechaIngreso: parsedFechaIngreso,
                fechaSalida: parsedFechaSalida,
                fechaRealización: parsedFechaRealización
            }
        });
    }
    catch (error) {
        console.error("Error al registrar inventario:", error);
        res.status(500).json({ error: error.message || "Error interno del servidor" });
    }
});
exports.default = createInventory;
