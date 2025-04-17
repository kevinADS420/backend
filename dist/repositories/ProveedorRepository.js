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
const config_db_1 = __importDefault(require("../config/config-db"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class ProveedorRepository {
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT id_proveedor, contraseña FROM Proveedor WHERE Email=?';
                const values = [auth.Email];
                const result = yield config_db_1.default.execute(sql, values);
                if (!result || !result[0] || result[0].length === 0) {
                    return { logged: false, status: "Invalid username or password" };
                }
                const storedPassword = result[0][0].contraseña;
                const providedPassword = auth.contraseña;
                if (!storedPassword || !providedPassword) {
                    return { logged: false, status: "Invalid username or password" };
                }
                // Asegurarse de que storedPassword sea una cadena
                const storedPasswordStr = storedPassword.toString();
                try {
                    const isPasswordValid = yield bcryptjs_1.default.compare(providedPassword, storedPasswordStr);
                    if (isPasswordValid) {
                        return {
                            logged: true,
                            status: "Successful authentication",
                            id: result[0][0].id_proveedor,
                            role: "proveedor"
                        };
                    }
                }
                catch (compareError) {
                    return { logged: false, status: "Error en la autenticación" };
                }
                return { logged: false, status: "Invalid username or password" };
            }
            catch (error) {
                console.error('Error en login:', error);
                return { logged: false, status: "Error de conexión con la base de datos" };
            }
        });
    }
    static add(proveedor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedPassword = yield bcryptjs_1.default.hash(proveedor.contraseña, 10);
                const sql = 'INSERT INTO Proveedor (nombres, apellidos, Email, contraseña) VALUES (?, ?, ?, ?)';
                const values = [proveedor.nombres, proveedor.apellidos, proveedor.Email, hashedPassword];
                return config_db_1.default.execute(sql, values);
            }
            catch (error) {
                console.error('Error en add:', error);
                throw error;
            }
        });
    }
}
exports.default = ProveedorRepository;
