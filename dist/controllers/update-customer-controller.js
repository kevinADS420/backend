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
const RegisterCustomerDto_1 = __importDefault(require("../Dto/RegisterCustomerDto"));
const CustomerServices_1 = __importDefault(require("../services/CustomerServices"));
let update_customer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido1, apellido2, direccion, calle, carrera, email, contraseña } = req.body;
        const update = yield CustomerServices_1.default.UpdateCustomer(new RegisterCustomerDto_1.default(nombre, apellido1, apellido2, direccion, calle, carrera, email, contraseña));
        return res.status(201).json({ status: 'Cliente actualizado con exito' });
    }
    catch (error) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
        else {
            return res.status(500).json({ error: "Error al actualizar cliente", details: error.message });
        }
    }
});
exports.default = update_customer;
