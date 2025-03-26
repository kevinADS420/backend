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
const config_db_1 = __importDefault(require("../config/config-db"));
class InventoryRepository {
    static createInventory(inventory) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Insertar registro en la tabla Inventario sin id_producto (se asociará después)
                const sql = 'INSERT INTO Inventario (cantidad, fechaIngreso, fechaSalida, fechaRealización) VALUES (?, ?, ?, ?)';
                const values = [
                    inventory.cantidad,
                    inventory.fechaIngreso,
                    inventory.fechaSalida,
                    inventory.fechaRealización
                ];
                const [result] = yield config_db_1.default.execute(sql, values);
                // Devolver el ID generado
                return {
                    id_inventario: result.insertId,
                    success: true
                };
            }
            catch (error) {
                console.error('Error al crear inventario:', error);
                throw error;
            }
        });
    }
}
exports.default = InventoryRepository;
