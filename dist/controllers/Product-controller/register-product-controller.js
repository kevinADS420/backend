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
const RegisterProductDto_1 = __importDefault(require("../../Dto/Product-Dto/RegisterProductDto"));
const ProductService_1 = __importDefault(require("../../services/ProductService"));
const config_db_1 = __importDefault(require("../../config/config-db"));
const productService = new ProductService_1.default();
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        const { nombreP, tipo, Precio, cantidad, imagen, id_proveedor } = req.body;
        if (!req.file) {
            return res.status(400).json({ error: "Se requiere una imagen" });
        }
        const imagenBuffer = req.file.buffer;
        // Validar cantidad
        if (!cantidad || cantidad <= 0) {
            return res.status(400).json({ error: "Se requiere una cantidad válida mayor a 0" });
        }
        connection = yield config_db_1.default.getConnection();
        // Configurar el tiempo de espera de bloqueo
        yield connection.execute('SET SESSION innodb_lock_wait_timeout = 50');
        try {
            yield connection.beginTransaction();
            // 1. Primero crear el inventario
            const [inventoryResult] = yield connection.execute('INSERT INTO Inventario (cantidad, fechaIngreso, fechaSalida, fechaRealización) VALUES (?, NOW(), NOW(), NOW())', [cantidad]);
            const id_inventario = inventoryResult.insertId;
            // 2. Crear objeto de producto con el id_inventario generado
            const productData = new RegisterProductDto_1.default(nombreP, tipo, Precio, cantidad, imagenBuffer, id_inventario, id_proveedor);
            // 3. Registrar el producto directamente en la base de datos
            const [result] = yield connection.execute('INSERT INTO Producto (nombreP, tipo, Precio, cantidad, imagen, id_inventario, id_proveedor) VALUES (?, ?, ?, ?, ?, ?, ?)', [nombreP, tipo, Precio, cantidad, imagenBuffer, id_inventario, id_proveedor]);
            const productId = result.insertId;
            yield connection.commit();
            return res.status(201).json({
                status: "Producto Registrado",
                message: "Producto registrado y asociado con inventario correctamente",
                data: {
                    producto: nombreP,
                    productId: productId,
                    id_inventario: id_inventario,
                    id_proveedor: id_proveedor,
                    cantidad: cantidad
                }
            });
        }
        catch (error) {
            if (connection) {
                yield connection.rollback();
            }
            throw error;
        }
    }
    catch (error) {
        if ((error === null || error === void 0 ? void 0 : error.code) === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        return res.status(500).json({
            error: "Error interno del servidor",
            message: error.message
        });
    }
    finally {
        if (connection) {
            yield connection.release();
        }
    }
});
exports.default = register;
