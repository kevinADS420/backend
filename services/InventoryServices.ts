import Inventory from "../Dto/Product-Dto/InventoryDto";
import InventoryRepository from '../repositories/InventoryRepository';

interface Inventory {
    id: string;
    quantity: number;
    inSeason: boolean;
}

class InventoryService {
    static async createInventory(inventory: Inventory) {
        return await InventoryRepository.createInventory(inventory);
    }

    async getProductInventory(productId: string): Promise<Inventory | null> {
        try {
            // Aquí implementarías la lógica para obtener el inventario de un producto
            // Por ahora retornamos un objeto de ejemplo
            return {
                id: productId,
                quantity: 15,
                inSeason: true
            };
        } catch (error) {
            console.error('Error al obtener inventario:', error);
            return null;
        }
    }

    async updateInventory(productId: string, quantity: number): Promise<boolean> {
        try {
            // Aquí implementarías la lógica para actualizar el inventario
            return true;
        } catch (error) {
            console.error('Error al actualizar inventario:', error);
            return false;
        }
    }
}

export default InventoryService;