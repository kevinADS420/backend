import { Request, Response } from "express"; 
import Product from "../../Dto/Product-Dto/RegisterProductDto";
import ProductService from "../../services/ProductServices";

let register = async (req: Request, res: Response) => {
    try {
        const {
            nombreP,
            tipo,
            Precio,
            
        } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "Se requiere una imagen" });
        }

        const imagen = req.file.buffer; // Imagen en formato binario

        const RegisterProduct = await ProductService.register(new Product(nombreP, tipo, Precio, imagen))

        return res.status(201).json({ status: "Producto Registrado" });
    } catch (error: any) {
        if (error?.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        console.error(error); // Agrega esto para ver el error en la terminal
        res.status(500).json({ error: error.message || "Error interno del servidor" });
    }
};

export default register;