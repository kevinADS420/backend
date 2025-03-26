import Inventory from "../Dto/Product-Dto/InventoryDto";
import InventoryRepository from '../repositories/InventoryRepository';

class InventoryService {
    static async createInventory(inventory: Inventory) {
        return await InventoryRepository.createInventory(inventory);
    }
}

export default InventoryService;