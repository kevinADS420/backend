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
exports.getCustomerByEmail = void 0;
const config_db_1 = __importDefault(require("../../config/config-db"));
const getCustomerByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        if (!email) {
            return res.status(400).json({
                status: 'error',
                message: 'Email no proporcionado'
            });
        }
        // Obtener información del cliente
        const [customerResult] = yield config_db_1.default.execute('SELECT id_cliente, Nombres, Apellidos, Email FROM Cliente WHERE Email = ?', [email]);
        if (!customerResult || customerResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Cliente no encontrado'
            });
        }
        const customer = customerResult[0];
        const idUser = customer.id_cliente;
        // Obtener información de teléfono si existe
        const [phoneResult] = yield config_db_1.default.execute('SELECT númeroTelefono, tipo FROM Telefono WHERE id_cliente = ?', [idUser]);
        // Obtener información de dirección si existe
        const [addressResult] = yield config_db_1.default.execute('SELECT barrio, calle, numero FROM Direccion WHERE id_cliente = ?', [idUser]);
        return res.status(200).json({
            status: 'success',
            data: {
                id_cliente: customer.id_cliente,
                nombres: customer.Nombres,
                apellidos: customer.Apellidos,
                Email: customer.Email,
                telefono: phoneResult.length > 0 ? {
                    numero: phoneResult[0].númeroTelefono,
                    tipo: phoneResult[0].tipo
                } : null,
                direccion: addressResult.length > 0 ? {
                    barrio: addressResult[0].barrio,
                    calle: addressResult[0].calle,
                    numero: addressResult[0].numero
                } : null
            }
        });
    }
    catch (error) {
        console.error('Error en get-customer-by-email:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
});
exports.getCustomerByEmail = getCustomerByEmail;
