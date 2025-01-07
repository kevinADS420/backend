import { Request, Response } from "express";
import DeleteProduct from "../../Dto/Product-Dto/DeleteProductDts"
import productService from "../../services/ProductServices";

const delete_product = async (req: Request, res: Response) => {
    try {
        const {
            nombre
        } = req.body;
        const deleteProduct = await productService.deleteProduct(new DeleteProduct(nombre));


        return res.status(200).json(
            { message: 'Priducto eliminado con éxito'  }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }else {
            return res.status(300).json({ error: "Error, no se pudo eliminar el producto", details: error.message });
        }
    }

}

export default delete_product;