import { Request, Response } from "express";
import DeleteProduct from "../../Dto/Product-Dto/DeleteProductDts"
import ProductService from "../../services/ProductServices";

const delete_product = async (req: Request, res: Response) => {
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

        const productService = new ProductService();
        const deleteProduct = await productService.deleteProduct(new DeleteProduct(productId));

        return res.status(200).json({
            status: "Producto Eliminado",
            message: "Producto eliminado con éxito",
            data: {
                id_producto: productId
            }
        });
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ 
                status: "Error",
                message: "No se pudo eliminar el producto", 
                details: error.message 
            });
        }
    }
}

export default delete_product;