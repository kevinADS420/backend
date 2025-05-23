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
const config_db_1 = __importDefault(require("../../config/config-db"));
const deleteCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        const { id_cliente } = req.body;
        if (!id_cliente) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente no proporcionado'
            });
        }
        connection = yield config_db_1.default.getConnection();
        // Primero verificar si el cliente existe
        const [clienteResult] = yield connection.execute('SELECT * FROM cliente WHERE id_cliente = ?', [id_cliente]);
        if (!clienteResult || clienteResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Cliente no encontrado'
            });
        }
        // Eliminar registros relacionados primero
        yield connection.execute('DELETE FROM Telefono WHERE id_cliente = ?', [id_cliente]);
        yield connection.execute('DELETE FROM Direccion WHERE id_cliente = ?', [id_cliente]);
        yield connection.execute('DELETE FROM Carrito WHERE id_cliente = ?', [id_cliente]);
        // Finalmente eliminar el cliente
        yield connection.execute('DELETE FROM cliente WHERE id_cliente = ?', [id_cliente]);
        return res.status(200).json({
            status: 'success',
            message: 'Cliente eliminado exitosamente'
        });
    }
    catch (error) {
        console.error('Error en deleteCustomer:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
    finally {
        if (connection) {
            yield connection.release();
        }
    }
});
exports.default = deleteCustomer;
