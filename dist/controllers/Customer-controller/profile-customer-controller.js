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
const customerProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let connection;
    try {
        const idUser = req.body.id;
        const role = req.body.role;
        if (!idUser) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de usuario no proporcionado'
            });
        }
        if (role !== 'customer') {
            return res.status(403).json({
                status: 'error',
                message: 'Acceso denegado. Rol incorrecto'
            });
        }
        connection = yield config_db_1.default.getConnection();
        const [customerResult] = yield connection.execute('SELECT id_cliente, Nombres, Apellidos, Email FROM cliente WHERE id_cliente = ?', [idUser]);
        if (!customerResult || customerResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Cliente no encontrado'
            });
        }
        const customer = customerResult[0];
        const [phoneResult, addressResult] = yield Promise.all([
            connection.execute('SELECT númeroTelefono, tipo FROM Telefono WHERE id_cliente = ?', [idUser]),
            connection.execute('SELECT barrio, calle, numero FROM Direccion WHERE id_cliente = ?', [idUser])
        ]);
        return res.status(200).json({
            status: 'success',
            data: {
                id_cliente: customer.id_cliente,
                Nombres: customer.Nombres,
                Apellidos: customer.Apellidos,
                Email: customer.Email,
                telefono: phoneResult[0].length > 0 ? {
                    numero: phoneResult[0][0].númeroTelefono,
                    tipo: phoneResult[0][0].tipo
                } : null,
                direccion: addressResult[0].length > 0 ? {
                    barrio: addressResult[0][0].barrio,
                    calle: addressResult[0][0].calle,
                    numero: addressResult[0][0].numero
                } : null
            }
        });
    }
    catch (error) {
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
    finally {
        if (connection) {
            connection.release();
        }
    }
});
exports.default = customerProfile;
