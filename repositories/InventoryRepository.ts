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

    static async getInventoryByProductId(productId: string): Promise<Inventory | null> {
        try {
            const sql = 'SELECT * FROM Inventario WHERE id_producto = ?';
            const [rows]: any = await db.execute(sql, [productId]);
            if (rows.length === 0) return null;
            
            const inventory = rows[0];
            return new Inventory(
                inventory.cantidad,
                inventory.fechaIngreso,
                inventory.fechaSalida,
                inventory.fechaRealización,
                inventory.id_producto
            );
        } catch (error) {
            console.error('Error al obtener inventario:', error);
            throw error;
        }
    }

    static async updateInventory(productId: string, quantity: number): Promise<boolean> {
        try {
            const sql = 'UPDATE Inventario SET cantidad = ? WHERE id_producto = ?';
            await db.execute(sql, [quantity, productId]);
            return true;
        } catch (error) {
            console.error('Error al actualizar inventario:', error);
            throw error;
        }
    }
}

export default InventoryRepository;