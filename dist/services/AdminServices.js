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
const generateHash_1 = __importDefault(require("../Helpers/generateHash"));
const AdminRepository_1 = __importDefault(require("../repositories/AdminRepository"));
class AdminSercives {
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AdminRepository_1.default.login(auth);
        });
    }
    static register(Admin) {
        return __awaiter(this, void 0, void 0, function* () {
            Admin.contraseña = yield (0, generateHash_1.default)(Admin.contraseña);
            return yield AdminRepository_1.default.addAdmin(Admin);
        });
    }
    static deleteAdmin(deleteAdmin) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield AdminRepository_1.default.deleteAdmin(deleteAdmin);
        });
    }
}
exports.default = AdminSercives;
