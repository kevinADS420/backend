import Product from "../Dto/Product-Dto/RegisterProductDto";
import DeleteProduct from "../Dto/Product-Dto/DeleteProductDts";
import Inventory from "../Dto/Product-Dto/InventoryDto";
import ProductRepository from '../repositories/ProductRepository';

class ProductService {
    static async register(Product: Product) {
        return await ProductRepository.registerProduct(Product);
    }

    static async registerWithInventory(product: Product, inventory: Inventory) {
        return await ProductRepository.registerProductWithInventory(product, inventory);
    }

    static async registerProductWithInventoryId(product: Product, id_inventario: number) {
        return await ProductRepository.registerProductWithInventoryId(product, id_inventario);
    }

    static async getAllProducts() {
        return await ProductRepository.getAllProducts();
    }

    static async UpdateProduct(product: Product) {
        return await ProductRepository.UpdateProduct(product);
    }

    static async deleteProduct(deleteProduct: DeleteProduct) {
        return await ProductRepository.deleteProduct(deleteProduct);
    }
}

export default ProductService;