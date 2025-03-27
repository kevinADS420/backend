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
const ProductServices_1 = __importDefault(require("../../services/ProductServices"));
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let products;
        const id_proveedor = req.query.id_proveedor || req.body.id_proveedor;
        if (id_proveedor) {
            // Si hay un ID de proveedor, obtener solo productos de ese proveedor
            products = yield ProductServices_1.default.getProductsByProveedor(id_proveedor);
        }
        else {
            // De lo contrario, obtener todos los productos
            // products = await ProductService.getAllProducts();
        }
        // Verificar que products es un array
        if (!Array.isArray(products)) {
            return res.status(200).json([]);
        }
        // Process products to convert LONGBLOB to base64 for each product
        const processedProducts = products.map((product) => {
            // Clone the product to avoid modifying the original
            const processedProduct = Object.assign({}, product);
            // If there's an image, convert the Buffer to base64
            if (processedProduct.imagen) {
                // Convert Buffer to Base64 string
                processedProduct.imagen = processedProduct.imagen.toString('base64');
            }
            return processedProduct;
        });
        return res.status(200).json(processedProducts);
    }
    catch (error) {
        console.error("Error fetching products:", error);
        return res.status(500).json({
            error: "Error al obtener productos",
            details: error.message
        });
    }
});
exports.default = getAllProducts;
