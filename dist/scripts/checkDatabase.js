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
const database_1 = __importDefault(require("../config/database"));
function checkDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield database_1.default.getConnection();
            try {
                // Obtener todas las tablas
                const [tables] = yield connection.execute('SHOW TABLES');
                console.log('Tablas en la base de datos:');
                console.log(tables);
                // Para cada tabla, obtener su estructura
                for (const table of tables) {
                    const tableName = Object.values(table)[0];
                    console.log(`\nEstructura de la tabla ${tableName}:`);
                    const [columns] = yield connection.execute(`DESCRIBE ${tableName}`);
                    console.log(columns);
                }
            }
            finally {
                connection.release();
            }
        }
        catch (error) {
            console.error('Error al consultar la base de datos:', error);
            process.exit(1);
        }
    });
}
checkDatabase();
