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
            id_proveedor
        } = req.body;

        if (!req.file) {
            return res.status(400).json({ error: "Se requiere una imagen" });
        }

        const imagen = req.file.buffer; 

        // Validar id_inventario
        if (!id_inventario) {
            return res.status(400).json({ error: "Se requiere un ID de inventario válido" });
        }

        // Crear objeto de producto
        const productData = new Product(nombreP, tipo, Precio, imagen, id_proveedor);
        
        // Registrar el producto y asociarlo con el inventario existente
        const result = await ProductService.registerProductWithInventoryId(productData, id_inventario);

        return res.status(201).json({ 
            status: "Producto Registrado",
            message: "Producto registrado y asociado con inventario correctamente",
            data: {
                producto: nombreP,
                productId: result.productId,
                id_inventario: id_inventario
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