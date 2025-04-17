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
const adminProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idUser = req.body.id;
        const role = req.body.role;
        if (!idUser) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de administrador no proporcionado'
            });
        }
        if (role !== 'admin') {
            return res.status(403).json({
                status: 'error',
                message: 'Acceso denegado. Rol incorrecto'
            });
        }
        const [adminResult] = yield config_db_1.default.execute('SELECT id_administrador, Nombres, Apellidos, Email FROM Administrador WHERE id_administrador = ?', [idUser]);
        if (!adminResult || adminResult.length === 0) {
            return res.status(404).json({
                status: 'error',
                message: 'Administrador no encontrado'
            });
        }
        const admin = adminResult[0];
        return res.status(200).json({
            status: 'success',
            data: {
                id_administrador: admin.id_administrador,
                nombres: admin.Nombres,
                apellidos: admin.Apellidos,
                Email: admin.Email
            }
        });
    }
    catch (error) {
        console.error('Error en profile-admin-controller:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Error interno del servidor',
            error: error.message
        });
    }
});
exports.default = adminProfile;
