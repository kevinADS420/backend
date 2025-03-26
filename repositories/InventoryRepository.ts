import db from '../config/config-db';
import Inventory from '../Dto/Product-Dto/InventoryDto';

class InventoryRepository {
    static async createInventory(inventory: Inventory) {
        try {
            // Insertar registro en la tabla Inventario sin id_producto (se asociará después)
            const sql = 'INSERT INTO Inventario (cantidad, fechaIngreso, fechaSalida, fechaRealización) VALUES (?, ?, ?, ?)';
            const values = [
                inventory.cantidad,
                inventory.fechaIngreso,
                inventory.fechaSalida,
                inventory.fechaRealización
            ];
            
            const [result]: any = await db.execute(sql, values);
            
            // Devolver el ID generado
            return { 
                id_inventario: result.insertId,
                success: true 
            };
        } catch (error) {
            console.error('Error al crear inventario:', error);
            throw error;
        }
    }
}

export default InventoryRepository;