import Inventory from "../Dto/Product-Dto/InventoryDto";
import InventoryRepository from '../repositories/InventoryRepository';

class InventoryService {
    async createInventory(inventory: Inventory) {
        return await InventoryRepository.createInventory(inventory);
    }

    async getProductInventory(productId: string): Promise<Inventory | null> {
        try {
            // Aquí implementarías la lógica para obtener el inventario de un producto
            return await InventoryRepository.getInventoryByProductId(productId);
        } catch (error) {
            console.error('Error al obtener inventario:', error);
            return null;
        }
    }

    async updateInventory(productId: string, quantity: number): Promise<boolean> {
        try {
            return await InventoryRepository.updateInventory(productId, quantity);
        } catch (error) {
            console.error('Error al actualizar inventario:', error);
            return false;
        }
    }
}

export default InventoryService;