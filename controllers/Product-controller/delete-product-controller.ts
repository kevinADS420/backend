import { Request, Response } from "express";
import DeleteProduct from "../../Dto/Product-Dto/DeleteProductDts"
import productService from "../../services/ProductServices";

const delete_product = async (req: Request, res: Response) => {
    try {
        const { id_producto } = req.params; // Obtener el ID de los parámetros de la URL

        if (!id_producto) {
            return res.status(400).json({ error: "Se requiere el ID del producto" });
        }

        const deleteProduct = await productService.deleteProduct(new DeleteProduct(parseInt(id_producto)));

        return res.status(200).json({
            status: "Producto Eliminado",
            message: "Producto eliminado con éxito",
            data: {
                id_producto: id_producto
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