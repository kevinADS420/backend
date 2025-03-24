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
        const { nombres, apellidos, email, contraseña } = req.body;
        const registerProveedor = yield ProveedorServices_1.default.register(new RegisterProveedorDto_1.default(nombres, apellidos, email, contraseña));
        return res.status(201).json({ status: 'Registro con exsito' });
    }
    catch (error) {
        if (error && error.code == "ER_DUP_ENTRY") {
            res.status(600).json({ errorInfo: error.sqlMessage });
        }
    }
});
exports.default = register;
