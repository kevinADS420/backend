import Product from "../Dto/Product-Dto/RegisterProductDto";
import DeleteProduct from "../Dto/Product-Dto/DeleteProductDts";
import GetProduct from "../Dto/Product-Dto/getProductDto";
import Inventory from "../Dto/Product-Dto/InventoryDto";
import ProductRepository from '../repositories/ProductRepository';

class ProductService {
    static async register(Product: Product) {
        return await ProductRepository.registerProduct(Product);
    }

    static async registerWithInventory(product: Product, inventory: Inventory) {
        return await ProductRepository.registerProductWithInventory(product, inventory);
    }

    static async registerProductWithInventoryAndProvider(product: Product, id_inventario: number, id_proveedor?: number) {
        return await ProductRepository.registerProductWithInventoryAndProvider(product, id_inventario, id_proveedor);
    }

    static async getAllProducts() {
        return await ProductRepository.getAllProducts();
    }

    static async getProductsByProveedor(id_proveedor: string | number) {
        return await ProductRepository.getProductsByProveedor(id_proveedor);
    }

    static async UpdateProduct(product: Product) {
        return await ProductRepository.UpdateProduct(product);
    }

    static async deleteProduct(deleteProduct: DeleteProduct) {
        return await ProductRepository.deleteProduct(deleteProduct);
    }
}

export default ProductService;