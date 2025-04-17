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
function createPaymentTable() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield database_1.default.getConnection();
            try {
                // Verificar si la tabla ya existe
                const [tables] = yield connection.execute("SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?", [process.env.DB_DATABASE, 'payment_preferences']);
                if (tables.length > 0) {
                    console.log('La tabla payment_preferences ya existe');
                    return;
                }
                // Crear la tabla si no existe
                const sql = `
            CREATE TABLE payment_preferences (
                id_pago VARCHAR(36) PRIMARY KEY,
                preference_id VARCHAR(255) UNIQUE NOT NULL,
                items JSON NOT NULL,
                payer JSON NOT NULL,
                status VARCHAR(50) NOT NULL,
                fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );`;
                yield connection.execute(sql);
                console.log('Tabla payment_preferences creada exitosamente');
            }
            finally {
                connection.release();
            }
        }
        catch (error) {
            console.error('Error al crear la tabla:', error);
            process.exit(1);
        }
    });
}
createPaymentTable();
