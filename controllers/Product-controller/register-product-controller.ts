import { Request, Response } from "express"; 
import Product from "../../Dto/Product-Dto/RegisterProductDto";
import ProductService from "../../services/ProductServices";

let register = async (req: Request, res: Response) => {
    try {
        const {
            nombreP,
            tipo,
            Precio,
            id_inventario,
            id_proveedor // Nuevo campo que viene del middleware VerifyToken
        } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Se requiere una imagen" });
        }

        const imagen = req.file.buffer;

        if (!id_inventario) {
            return res.status(400).json({ error: "Se requiere un ID de inventario válido" });
        }

        // Crear objeto de producto (ahora con id_proveedor)
        const productData = new Product(nombreP, tipo, Precio, imagen);
        
        // Registrar el producto y asociarlo con el inventario existente y el proveedor
        const result = await ProductService.registerProductWithInventoryAndProvider(
            productData, 
            id_inventario,
            id_proveedor // Pasamos el ID del proveedor
        );

        return res.status(201).json({ 
            status: "Producto Registrado",
            message: "Producto registrado y asociado con inventario correctamente",
            data: {
                producto: nombreP,
                productId: result.productId,
                id_inventario: id_inventario,
                id_proveedor: id_proveedor
            }
        });
    } catch (error: any) {
        if (error?.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        console.error("Error al registrar producto:", error);
        res.status(500).json({ error: error.message || "Error interno del servidor" });
    }
};
export default register;