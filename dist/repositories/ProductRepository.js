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
    static getProduct(getproduct) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT nombre, precio, caracteristicas FROM Producto WHERE nombre = ?';
            const values = [getproduct.nombre];
            const [rows] = yield config_db_1.default.execute(sql, values);
            return rows;
        });
    }
    static registerProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO Producto (nombreP, tipo, Precio, imagen ) VALUES (?, ?, ?, ?)';
            const values = [product.nombreP, product.tipo, product.Precio, product.imagen];
            return config_db_1.default.execute(sql, values);
        });
    }
    static deleteProduct(deleteProduct) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'DELETE FROM Producto WHERE nombreP = ?';
            const values = [deleteProduct.nombre];
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
