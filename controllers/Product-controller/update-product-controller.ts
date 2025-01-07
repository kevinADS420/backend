import {Request, Response} from "express"
import Product from "../../Dto/Product-Dto/RegisterProductDto";
import ProductService from "../../services/ProductServices";


let update_Product = async(req:Request, res: Response) => {
    try{
        const {
            id,
            nombre,
            precio,
            caracteristicas
        } = req.body;
        const updateProduct = await ProductService.UpdateProduct(new Product(id, nombre, precio, caracteristicas))


        return res.status(201).json(
            { status: 'Producto Actualizado con exito' }
        );
    }catch(error:any){
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({errorInfo: error.sqlMessage})
        }else {
            return res.status(500).json({error: "Error al actualizar producto", details: error.message});            
        }
    }
}


export default update_Product;