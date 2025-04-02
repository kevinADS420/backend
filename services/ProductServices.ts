import Product from "../Dto/Product-Dto/RegisterProductDto";
import DeleteProduct from "../Dto/Product-Dto/DeleteProductDts";
import Inventory from "../Dto/Product-Dto/InventoryDto";
import ProductRepository from '../repositories/ProductRepository';

class ProductService {
    async register(product: Product) {
        return await ProductRepository.registerProduct(product);
    }

    async registerWithInventory(product: Product, inventory: Inventory) {
        return await ProductRepository.registerProductWithInventory(product, inventory);
    }

    async registerProductWithInventoryId(product: Product, id_inventario: number) {
        return await ProductRepository.registerProductWithInventoryId(product, id_inventario);
    }

    async getAllProducts() {
        return await ProductRepository.getAllProducts();
    }

    async updateProduct(product: Product) {
        return await ProductRepository.UpdateProduct(product);
    }

    async deleteProduct(deleteProduct: DeleteProduct) {
        return await ProductRepository.deleteProduct(deleteProduct);
    }
}

export default ProductService;