import { Request, Response } from "express";
import GetProduct from "../../Dto/Product-Dto/getProductDto";
import ProductService from "../../services/ProductServices";


let get_product = async (req: Request, res: Response) => {
    try {
        const {
            nombre
        } = req.query;
        const product = await ProductService.Getproduct(new GetProduct(nombre as string));


        return res.status(200).json(product);
    } catch (error:any){
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({errorInfo: error.sqlMessage});
    }else {
        return res.status(500).json({error: "Internal Server Error", details: error.message});
    }
    }   
}

export default get_product