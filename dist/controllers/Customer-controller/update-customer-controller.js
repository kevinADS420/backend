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
const UpdateCustomerDto_1 = __importDefault(require("../../Dto/Customer-Dto/UpdateCustomerDto"));
const CustomerServices_1 = __importDefault(require("../../services/CustomerServices"));
let update_customer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Params recibidos:', req.params);
        console.log('Body recibido:', req.body);
        // Capturar el id de la URL, no del body
        const id_cliente = parseInt(req.params.id);
        const { Nombres, Apellidos, Email, numeroTelefono, // Cambiado de Telefono a numeroTelefono para que coincida con DTO
        tipo = 'movil' } = req.body;
        if (!id_cliente || isNaN(id_cliente)) {
            return res.status(400).json({ error: 'ID de cliente inválido' });
        }
        console.log('Creando objeto UpdateCustomer con:', {
            Nombres, Apellidos, Email, numeroTelefono, tipo, id_cliente
        });
        const customerData = new UpdateCustomerDto_1.default(Nombres, Apellidos, Email, numeroTelefono, // Corregido para coincidir con el DTO
        tipo, undefined, id_cliente);
        console.log('Objeto UpdateCustomer creado:', customerData);
        const update = yield CustomerServices_1.default.UpdateCustomer(customerData);
        if (!update) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }
        return res.status(200).json({
            status: 'Cliente actualizado con éxito',
            data: update
        });
    }
    catch (error) {
        console.error('Error completo:', error);
        if (error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).json({
                error: "Error de duplicación",
                details: error.sqlMessage
            });
        }
        else {
            return res.status(500).json({
                error: "Error al actualizar cliente",
                message: error.message,
                stack: error.stack
            });
        }
    }
});
exports.default = update_customer;
