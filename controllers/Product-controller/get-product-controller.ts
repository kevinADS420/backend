import { Request, Response } from "express";
import ProductService from "../../services/ProductServices";

const getAllProducts = async (req: Request, res: Response) => {
    try {
        let products;
        const id_proveedor = req.query.id_proveedor || req.body.id_proveedor;
        
        if (id_proveedor) {
            // Si hay un ID de proveedor, obtener solo productos de ese proveedor
            products = await ProductService.getProductsByProveedor(id_proveedor as string);
        } else {
            // De lo contrario, obtener todos los productos
            products = await ProductService.getAllProducts();
        }
        
        // Verificar que products es un array
        if (!Array.isArray(products)) {
            return res.status(200).json([]);
        }
        
        // Process products to convert LONGBLOB to base64 for each product
        const processedProducts = products.map((product: any) => {
            // Clone the product to avoid modifying the original
            const processedProduct = {...product};
            
            // If there's an image, convert the Buffer to base64
            if (processedProduct.imagen) {
                // Convert Buffer to Base64 string
                processedProduct.imagen = processedProduct.imagen.toString('base64');
            }
            
            return processedProduct;
        });
        
        return res.status(200).json(processedProducts);
    } catch (error: any) {
        console.error("Error fetching products:", error);
        return res.status(500).json({ 
            error: "Error al obtener productos", 
            details: error.message 
        });
    }
};

export default getAllProducts;