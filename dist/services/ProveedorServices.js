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
const ProveedorRepository_1 = __importDefault(require("../repositories/ProveedorRepository"));
class ProveedorService {
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProveedorRepository_1.default.login(auth);
        });
    }
    static register(proveedor) {
        return __awaiter(this, void 0, void 0, function* () {
            proveedor.contraseña = yield (0, generateHash_1.default)(proveedor.contraseña);
            return yield ProveedorRepository_1.default.add(proveedor);
        });
    }
}
exports.default = ProveedorService;
