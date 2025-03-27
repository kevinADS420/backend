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
        const { nombreP } = req.body;
        const deleteProduct = yield ProductServices_1.default.deleteProduct(new DeleteProductDts_1.default(nombreP));
        return res.status(200).json({ message: 'Priducto eliminado con éxito' });
    }
    catch (error) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        else {
            return res.status(300).json({ error: "Error, no se pudo eliminar el producto", details: error.message });
        }
    }
});
exports.default = delete_product;
