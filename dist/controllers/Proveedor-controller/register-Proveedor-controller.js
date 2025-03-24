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
const RegisterProveedorDto_1 = __importDefault(require("../../Dto/Proveedor-Dto/RegisterProveedorDto"));
const ProveedorServices_1 = __importDefault(require("../../services/ProveedorServices"));
let register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('Solicitud recibida:', req.body); // Añade esto para depuración
        const { nombres, apellidos, Email, contraseña } = req.body;
        console.log('Datos extraídos:', { nombres, apellidos, Email }); // Añade esto
        const registerProveedor = yield ProveedorServices_1.default.register(new RegisterProveedorDto_1.default(nombres, apellidos, Email, contraseña));
        console.log('Registro exitoso'); // Añade esto
        return res.status(201).json({ status: 'Registro con éxito' });
    }
    catch (error) {
        console.error('Error al registrar proveedor:', error); // Añade esto
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(409).json({ errorInfo: error.sqlMessage });
        }
        else {
            return res.status(500).json({ error: "Error interno del servidor", details: error.message });
        }
    }
});
exports.default = register;
