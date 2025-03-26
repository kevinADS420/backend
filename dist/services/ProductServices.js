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
const ProductRepository_1 = __importDefault(require("../repositories/ProductRepository"));
class ProductService {
    static register(Product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductRepository_1.default.registerProduct(Product);
        });
    }
    static registerWithInventory(product, inventory) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductRepository_1.default.registerProductWithInventory(product, inventory);
        });
    }
    static registerProductWithInventoryId(product, id_inventario) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductRepository_1.default.registerProductWithInventoryId(product, id_inventario);
        });
    }
    static getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductRepository_1.default.getAllProducts();
        });
    }
    static UpdateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductRepository_1.default.UpdateProduct(product);
        });
    }
    static deleteProduct(deleteProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductRepository_1.default.deleteProduct(deleteProduct);
        });
    }
}
exports.default = ProductService;
