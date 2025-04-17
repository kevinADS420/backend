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
const config_db_1 = __importDefault(require("../../config/config-db"));
const getCustomerByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Email = req.params.email;
        const sql = 'SELECT id_cliente, Nombres, Apellidos, Email FROM cliente WHERE Email = ?';
        const [rows] = yield config_db_1.default.execute(sql, [Email]);
        if (rows.length === 0) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        return res.status(200).json(rows[0]);
    }
    catch (error) {
        console.error("Error al obtener cliente por email:", error);
        return res.status(500).json({
            error: "Error interno del servidor",
            details: error.message
        });
    }
});
exports.default = getCustomerByEmail;
