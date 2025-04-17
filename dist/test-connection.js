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
const config_db_1 = __importDefault(require("./config/config-db"));
function testConnection() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield config_db_1.default.getConnection();
            console.log('Conexión exitosa a la base de datos');
            connection.release();
        }
        catch (error) {
            console.error('Error al conectar a la base de datos:', error);
        }
        finally {
            yield config_db_1.default.end();
        }
    });
}
testConnection();
