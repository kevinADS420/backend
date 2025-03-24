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
exports.verificar_y_resetear = exports.solicitar_reset = void 0;
const PasswordResetDto_1 = __importDefault(require("../../Dto/Customer-Dto/PasswordResetDto"));
const CustomerRepository_1 = __importDefault(require("../../repositories/CustomerRepository"));
const solicitar_reset = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Email } = req.body;
        const resetData = new PasswordResetDto_1.default(Email);
        yield CustomerRepository_1.default.solicitarResetPassword(resetData);
        return res.status(200).json({
            status: 'Código de verificación enviado al correo'
        });
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al procesar la solicitud",
            details: error.message
        });
    }
});
exports.solicitar_reset = solicitar_reset;
const verificar_y_resetear = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Email, codigo, nuevaContraseña } = req.body;
        const resetData = new PasswordResetDto_1.default(Email, codigo, nuevaContraseña);
        yield CustomerRepository_1.default.verificarCodigoYResetearPassword(resetData);
        return res.status(200).json({
            status: 'Contraseña actualizada exitosamente'
        });
    }
    catch (error) {
        return res.status(500).json({
            error: "Error al resetear la contraseña",
            details: error.message
        });
    }
});
exports.verificar_y_resetear = verificar_y_resetear;
