import db from '../config/config-db';
import Product from '../Dto/Product-Dto/RegisterProductDto';
import DeleteProduct from '../Dto/Product-Dto/DeleteProductDts';
import Inventory from '../Dto/Product-Dto/InventoryDto';

class ProductRepository {

   static async getAllProducts() {
    const sql = 'SELECT id_producto, nombreP, tipo, Precio, cantidad, imagen, id_inventario, id_proveedor FROM Producto';
    const [rows] = await db.execute(sql);
    return rows as any[];
}

    static async registerProduct(product: Product) {
        const sql = 'INSERT INTO Producto (nombreP, tipo, Precio, cantidad, imagen, id_inventario, id_proveedor) VALUES (?, ?, ?, ?, ?, ?, ?)';
        const values = [product.nombreP, product.tipo, product.Precio, product.cantidad, product.imagen, product.id_inventario, product.id_proveedor];
        const result = await db.execute(sql, values);
        return result;
    }

    static async registerInventory(inventory: Inventory) {
        const sql = 'INSERT INTO Inventario (id_producto, cantidad, fechaIngreso, fechaSalida, fechaRealización) VALUES (?, ?, ?, ?, ?)';
        const values = [
            inventory.id_producto,
            inventory.cantidad, 
            inventory.fechaIngreso, 
            inventory.fechaSalida, 
            inventory.fechaRealización
        ];
        return db.execute(sql, values);
    }

    static async registerProductWithInventory(product: Product, inventory: Inventory) {
        const connection = await db.getConnection();
        try {
            await connection.beginTransaction();

            // Registrar el producto
            const [productResult]: any = await connection.execute(
                'INSERT INTO Producto (nombreP, tipo, Precio, cantidad, imagen) VALUES (?, ?, ?, ?, ?)',
                [product.nombreP, product.tipo, product.Precio, product.cantidad, product.imagen]
            );

            const productId = productResult.insertId;

            // Registrar en el inventario
            await connection.execute(
                'INSERT INTO Inventario (id_producto, cantidad, fechaIngreso, fechaSalida, fechaRealización) VALUES (?, ?, ?, ?, ?)',
                [
                    productId,
                    inventory.cantidad,
                    inventory.fechaIngreso,
                    inventory.fechaSalida,
                    inventory.fechaRealización
                ]
            );

            await connection.commit();
            return { productId, success: true };
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    static async registerProductWithInventoryId(product: Product, id_inventario: number) {
        const connection = await db.getConnection();
        try {
            await connection.beginTransaction();

            // Registrar el producto
            const [productResult]: any = await connection.execute(
                'INSERT INTO Producto (nombreP, tipo, Precio, cantidad, imagen, id_proveedor) VALUES (?, ?, ?, ?, ?, ?)',
                [product.nombreP, product.tipo, product.Precio, product.cantidad, product.imagen, product.id_proveedor]
            );

            const productId = productResult.insertId;

            // Actualizar el registro de inventario con el id_producto
            await connection.execute(
                'UPDATE Inventario SET id_producto = ? WHERE id_inventario = ?',
                [productId, id_inventario]
            );

            await connection.commit();
            return { productId, success: true };
        } catch (error) {
            await connection.rollback();
            throw error;
        } finally {
            connection.release();
        }
    }

    static async deleteProduct(deleteProduct: DeleteProduct) {
        const sql = 'DELETE FROM Producto WHERE id_producto = ?';
        const values = [deleteProduct.id_producto];
        return db.execute(sql, values);
    }

    static async UpdateProduct(product: Product) {
        const sql = 'UPDATE Producto SET nombreP = ?, tipo = ?, Precio = ?, cantidad = ?, imagen = ? WHERE id_producto = ?';
        const values = [product.nombreP, product.tipo, product.Precio, product.cantidad, product.imagen, product.id_producto];
        return db.execute(sql, values);
    }
}

export default ProductRepository;