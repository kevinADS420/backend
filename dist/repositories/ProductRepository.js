"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_db_1 = __importDefault(require("../config/config-db"));
class ProductRepository {
    static getProductsByProveedor(id_proveedor) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT id_producto, nombreP, tipo, Precio, imagen FROM Producto WHERE id_proveedor = ?';
            const [rows] = yield config_db_1.default.execute(sql, [id_proveedor]);
            return rows;
        });
    }
    // static async getAllProducts() {
    //     const sql = 'SELECT id_producto, nombreP, tipo, Precio, imagen FROM Producto';
    //     const [rows] = await db.execute(sql);
    //     return rows as any[];
    // }
    static registerProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO Producto (nombreP, tipo, Precio, imagen) VALUES (?, ?, ?, ?)';
            const values = [product.nombreP, product.tipo, product.Precio, product.imagen];
            const result = yield config_db_1.default.execute(sql, values);
            return result;
        });
    }
    static registerInventory(inventory) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO Inventario (id_producto, cantidad, fechaIngreso, fechaSalida, fechaRealización) VALUES (?, ?, ?, ?, ?)';
            const values = [
                inventory.id_producto,
                inventory.cantidad,
                inventory.fechaIngreso,
                inventory.fechaSalida,
                inventory.fechaRealización
            ];
            return config_db_1.default.execute(sql, values);
        });
    }
    static registerProductWithInventory(product, inventory) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield config_db_1.default.getConnection();
            try {
                yield connection.beginTransaction();
                // Registrar el producto
                const [productResult] = yield connection.execute('INSERT INTO Producto (nombreP, tipo, Precio, imagen) VALUES (?, ?, ?, ?)', [product.nombreP, product.tipo, product.Precio, product.imagen]);
                const productId = productResult.insertId;
                // Registrar en el inventario
                yield connection.execute('INSERT INTO Inventario (id_producto, cantidad, fechaIngreso, fechaSalida, fechaRealización) VALUES (?, ?, ?, ?, ?)', [
                    productId,
                    inventory.cantidad,
                    inventory.fechaIngreso,
                    inventory.fechaSalida,
                    inventory.fechaRealización
                ]);
                yield connection.commit();
                return { productId, success: true };
            }
            catch (error) {
                yield connection.rollback();
                throw error;
            }
            finally {
                connection.release();
            }
        });
    }
    static registerProductWithInventoryAndProvider(product, id_inventario, id_proveedor) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield config_db_1.default.getConnection();
            try {
                yield connection.beginTransaction();
                // Registrar el producto con id_proveedor si está disponible
                const [productResult] = yield connection.execute('INSERT INTO Producto (nombreP, tipo, Precio, imagen, id_proveedor) VALUES (?, ?, ?, ?, ?)', [product.nombreP, product.tipo, product.Precio, product.imagen, id_proveedor || null]);
                const productId = productResult.insertId;
                // Actualizar el registro de inventario con el id_producto
                yield connection.execute('UPDATE Inventario SET id_producto = ? WHERE id_inventario = ?', [productId, id_inventario]);
                yield connection.commit();
                return { productId, success: true };
            }
            catch (error) {
                yield connection.rollback();
                throw error;
            }
            finally {
                connection.release();
            }
        });
    }
    static deleteProduct(deleteProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'DELETE FROM Producto WHERE nombreP = ?';
            const values = [deleteProduct.nombreP];
            return config_db_1.default.execute(sql, values);
        });
    }
    static UpdateProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'UPDATE Producto SET nombreP = ?, tipo = ?, Precio = ?, imagen = ? WHERE id_producto = ?';
            const values = [product.nombreP, product.tipo, product.Precio, product.imagen];
            return config_db_1.default.execute(sql, values);
        });
    }
}
exports.default = ProductRepository;
