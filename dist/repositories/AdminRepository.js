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
class AdminRepository {
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT id_administrador, contraseña FROM Administrador WHERE Email=?';
            const values = [auth.Email];
            const result = yield config_db_1.default.execute(sql, values);
            if (result[0].length > 0) {
                const isPasswordValid = yield bcryptjs_1.default.compare(auth.contraseña, result[0][0].contraseña);
                if (isPasswordValid) {
                    return { logged: true, status: "Successful authentication", id: result[0][0].id_administrador, role: "admin" };
                }
                return { logged: false, status: "1.0 Invalid username or password" };
            }
            return { logged: false, status: "2.0 Invalid username or password" };
        });
    }
    static addAdmin(admin) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO Administrador (Nombres, Apellidos, Email, contraseña) VALUES (?, ?, ?, ?) ';
            const values = [admin.Nombre, admin.Apellido, admin.Email, admin.contraseña];
            return config_db_1.default.execute(sql, values);
        });
    }
    static deleteAdmin(deleteAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'DELETE FROM Administrador WHERE Apellidos = ? AND Email = ?';
            const values = [deleteAdmin.Apellidos, deleteAdmin.Email];
            return config_db_1.default.execute(sql, values);
        });
    }
}
exports.default = AdminRepository;
