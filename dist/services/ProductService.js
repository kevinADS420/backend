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
const DeleteProductDts_1 = __importDefault(require("../Dto/Product-Dto/DeleteProductDts"));
const ProductRepository_1 = __importDefault(require("../repositories/ProductRepository"));
class ProductService {
    registerProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductRepository_1.default.registerProduct(product);
        });
    }
    updateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductRepository_1.default.UpdateProduct(product);
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleteProduct = new DeleteProductDts_1.default(id);
            return yield ProductRepository_1.default.deleteProduct(deleteProduct);
        });
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductRepository_1.default.getAllProducts();
        });
    }
}
exports.default = ProductService;
