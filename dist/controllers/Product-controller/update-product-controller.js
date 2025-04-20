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
const ProductService_1 = __importDefault(require("../../services/ProductService"));
const productService = new ProductService_1.default();
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { nombreP, tipo, Precio, cantidad, imagen } = req.body;
        const updateProduct = new RegisterProductDto_1.default(nombreP, tipo, Precio, cantidad, imagen, undefined, undefined, parseInt(id));
        const result = yield productService.updateProduct(updateProduct);
        return res.status(200).json({
            status: 'Producto actualizado exitosamente',
            data: result
        });
    }
    catch (error) {
        console.error('Error al actualizar el producto:', error);
        return res.status(500).json({
            status: 'Error al actualizar el producto',
            error: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});
exports.default = updateProduct;
