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
const InventoryRepository_1 = __importDefault(require("../repositories/InventoryRepository"));
class InventoryService {
    createInventory(inventory) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield InventoryRepository_1.default.createInventory(inventory);
        });
    }
    getProductInventory(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Aquí implementarías la lógica para obtener el inventario de un producto
                return yield InventoryRepository_1.default.getInventoryByProductId(productId);
            }
            catch (error) {
                console.error('Error al obtener inventario:', error);
                return null;
            }
        });
    }
    updateInventory(productId, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield InventoryRepository_1.default.updateInventory(productId, quantity);
            }
            catch (error) {
                console.error('Error al actualizar inventario:', error);
                return false;
            }
        });
    }
}
exports.default = InventoryService;
