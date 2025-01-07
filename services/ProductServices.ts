import Product from "../Dto/Product-Dto/RegisterProductDto";
import DeleteProduct from "../Dto/Product-Dto/DeleteProductDts";
import GetProduct from "../Dto/Product-Dto/getProductDto";
import ProductRepository from '../repositories/ProductRepository'


class ProductService {

    static async register(Product: Product){
        return await ProductRepository.registerProduct(Product)
    }

    static async Getproduct(getproduct:GetProduct){
        return await ProductRepository.getProduct(getproduct)
    }

    static async UpdateProduct(product: Product){
        return await ProductRepository.UpdateProduct(product)
    }


    static async deleteProduct(deleteProduct:DeleteProduct){
        return await ProductRepository.deleteProduct(deleteProduct)
    }

}

export default ProductService;