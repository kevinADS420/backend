import { Request, Response } from "express"; 
import Product from "../../Dto/Product-Dto/RegisterProductDto";
import ProductService from "../../services/ProductServices";

let register = async (req: Request, res: Response) => {
    try {
        const {
            id,
            nombre,
            precio,
            caracteristicas
        } = req.body;
        const RegisterProduct = await ProductService.register(new Product(id, nombre, precio, caracteristicas))


        return res.status(201).json(
            { status: 'Producto Registrado' }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage }
        );
        }
    }
}

export default register;