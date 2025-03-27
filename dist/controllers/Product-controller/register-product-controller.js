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
let register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombreP, tipo, Precio, id_inventario // Ahora recibimos el ID del inventario
         } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "Se requiere una imagen" });
        }
        const imagen = req.file.buffer; // Imagen en formato binario
        // Validar id_inventario
        if (!id_inventario) {
            return res.status(400).json({ error: "Se requiere un ID de inventario válido" });
        }
        // Crear objeto de producto
        const productData = new RegisterProductDto_1.default(nombreP, tipo, Precio, imagen);
        // Registrar el producto y asociarlo con el inventario existente
        const result = yield ProductServices_1.default.registerProductWithInventoryId(productData, id_inventario);
        return res.status(201).json({
            status: "Producto Registrado",
            message: "Producto registrado y asociado con inventario correctamente",
            data: {
                producto: nombreP,
                productId: result.productId,
                id_inventario: id_inventario
            }
        });
    }
    catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        console.error("Error al registrar producto:", error);
        res.status(500).json({ error: error.message || "Error interno del servidor" });
    }
});
exports.default = register;
