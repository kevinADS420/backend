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
exports.GuiaService = void 0;
const database_1 = __importDefault(require("../config/database"));
class GuiaService {
    asignarGuiaAleatorio() {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.default.getConnection();
            try {
                // Obtener un guía aleatorio que esté disponible
                const [rows] = yield connection.execute(`SELECT id, primerNombre, primerApellido 
                 FROM guias 
                 WHERE estado = 'disponible' 
                 ORDER BY RAND() 
                 LIMIT 1`);
                return Array.isArray(rows) && rows.length > 0 ? rows[0] : null;
            }
            finally {
                connection.release();
            }
        });
    }
}
exports.GuiaService = GuiaService;
