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
        const { nombres, apellidos, Email, contraseña } = req.body;
        const result = yield ProveedorServices_1.default.register(new RegisterProveedorDto_1.default(nombres, apellidos, Email, contraseña));
        if (result) {
            return res.status(201).json({
                status: 'Registro exitoso'
            });
        }
        return res.status(400).json({
            status: 'Error en el registro'
        });
    }
    catch (error) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(409).json({
                status: 'Error',
                message: error.sqlMessage
            });
        }
        return res.status(500).json({
            status: 'Error',
            message: 'Error interno del servidor'
        });
    }
});
exports.default = register;
