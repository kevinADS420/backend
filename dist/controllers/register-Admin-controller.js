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
const RegisterAdminDto_1 = __importDefault(require("../Dto/RegisterAdminDto"));
const AdminServices_1 = __importDefault(require("../services/AdminServices"));
let register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, apellido, email, contraseña } = req.body;
        const registerAdmin = yield AdminServices_1.default.register(new RegisterAdminDto_1.default(nombre, apellido, email, contraseña));
        return res.status(201).json({ status: '!Admin registrado correctamente¡' });
    }
    catch (error) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        }
    }
});
exports.default = register;
