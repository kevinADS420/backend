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
const proveedorProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        const idUser = req.body.id;
        const role = req.body.role;
        if (!idUser) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de proveedor no proporcionado'
            });
        }
        if (role !== 'proveedor') {
            return res.status(403).json({
                status: 'error',
                message: 'Acceso denegado. Rol incorrecto'
            });
        }
        connection = yield config_db_1.default.getConnection();
        const [proveedorResult] = yield connection.execute('SELECT * FROM Proveedor WHERE id_proveedor = ?', [idUser]);
        if (!proveedorResult || proveedorResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Proveedor no encontrado'
            });
        }
        const proveedor = proveedorResult[0];
        // Por ahora, retornamos solo la información básica del proveedor
        // ya que las tablas Telefono y Direccion están diseñadas para clientes
        return res.status(200).json({
            status: 'success',
            data: {
                id_proveedor: proveedor.id_proveedor,
                nombres: proveedor.nombres,
                apellidos: proveedor.apellidos,
                email: proveedor.Email,
                telefono: null, // No hay tabla de teléfonos para proveedores
                direccion: null // No hay tabla de direcciones para proveedores
            }
        });
    }
    catch (error) {
        console.error('Error en proveedorProfile:', error);
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
exports.default = proveedorProfile;
