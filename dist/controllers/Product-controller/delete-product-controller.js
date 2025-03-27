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
const DeleteProductDts_1 = __importDefault(require("../../Dto/Product-Dto/DeleteProductDts"));
const ProductServices_1 = __importDefault(require("../../services/ProductServices"));
const delete_product = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id_producto } = req.body; // Obtener el ID del body en lugar de params
        if (!id_producto) {
            return res.status(400).json({
                status: "Error",
                message: "Se requiere el ID del producto"
            });
        }
        // Convertir el ID a número
        const productId = parseInt(id_producto);
        if (isNaN(productId)) {
            return res.status(400).json({
                status: "Error",
                message: "El ID del producto debe ser un número válido"
            });
        }
        const deleteProduct = yield ProductServices_1.default.deleteProduct(new DeleteProductDts_1.default(productId));
        return res.status(200).json({
            status: "Producto Eliminado",
            message: "Producto eliminado con éxito",
            data: {
                id_producto: productId
            }
        });
    }
    catch (error) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        else {
            return res.status(500).json({
                status: "Error",
                message: "No se pudo eliminar el producto",
                details: error.message
            });
        }
    }
});
exports.default = delete_product;
