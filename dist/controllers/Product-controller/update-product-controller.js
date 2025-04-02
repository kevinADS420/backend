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
const ProductServices_1 = __importDefault(require("../../services/ProductServices"));
let update_Product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombreP, tipo, Precio, imagen } = req.body;
        const productService = new ProductServices_1.default();
        const updateProduct = yield productService.updateProduct(new RegisterProductDto_1.default(nombreP, tipo, Precio, imagen));
        return res.status(201).json({ status: 'Producto Actualizado con exito' });
    }
    catch (error) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        else {
            return res.status(500).json({ error: "Error al actualizar producto", details: error.message });
        }
    }
});
exports.default = update_Product;
