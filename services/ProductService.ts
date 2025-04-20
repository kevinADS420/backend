import Product from '../Dto/Product-Dto/RegisterProductDto';
import DeleteProduct from '../Dto/Product-Dto/DeleteProductDts';
import ProductRepository from '../repositories/ProductRepository';

class ProductService {
    async registerProduct(product: Product) {
        return await ProductRepository.registerProduct(product);
    }

    async updateProduct(product: Product) {
        return await ProductRepository.UpdateProduct(product);
    }

    async deleteProduct(id: number) {
        const deleteProduct = new DeleteProduct(id);
        return await ProductRepository.deleteProduct(deleteProduct);
    }

    async getAllProducts() {
        return await ProductRepository.getAllProducts();
    }
}

export default ProductService; 