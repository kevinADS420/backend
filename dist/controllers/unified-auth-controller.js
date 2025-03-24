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
const generateToken_1 = __importDefault(require("../Helpers/generateToken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let secureAuth = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        const { Email, contraseña } = req.body;
        // Queries para buscar en las tres tablas
        const adminQuery = 'SELECT id_administrador, contraseña FROM Administrador WHERE Email=?';
        const customerQuery = 'SELECT id_cliente, contraseña FROM Cliente WHERE Email=?';
        const proveedorQuery = 'SELECT id_proveedor, contraseña FROM Proveedor WHERE Email=?';
        // Ejecutar las consultas
        const [adminResult] = yield config_db_1.default.execute(adminQuery, [Email]);
        const [customerResult] = yield config_db_1.default.execute(customerQuery, [Email]);
        const [proveedorResult] = yield config_db_1.default.execute(proveedorQuery, [Email]);
        // Verificar si es un administrador
        if (adminResult && adminResult.length > 0) {
            // Extraer contraseña correctamente - convertir a string si es necesario
            const hashedPasswordAdmin = (_a = adminResult[0].contraseña) === null || _a === void 0 ? void 0 : _a.toString();
            if (hashedPasswordAdmin && contraseña) {
                const isPasswordValid = yield bcryptjs_1.default.compare(contraseña, hashedPasswordAdmin);
                if (isPasswordValid) {
                    return res.status(200).json({
                        status: "Successful authentication",
                        userType: "admin",
                        token: (0, generateToken_1.default)({ id: adminResult[0].id_administrador, role: "admin" }, process.env.KEY_TOKEN || 'default_secret_key', 60)
                    });
                }
            }
        }
        // Verificar si es un cliente
        if (customerResult && customerResult.length > 0) {
            // Extraer contraseña correctamente - convertir a string si es necesario
            const hashedPasswordCustomer = (_b = customerResult[0].contraseña) === null || _b === void 0 ? void 0 : _b.toString();
            if (hashedPasswordCustomer && contraseña) {
                const isPasswordValid = yield bcryptjs_1.default.compare(contraseña, hashedPasswordCustomer);
                if (isPasswordValid) {
                    return res.status(200).json({
                        status: "Successful authentication",
                        userType: "customer",
                        token: (0, generateToken_1.default)({ id: customerResult[0].id_cliente, role: "customer" }, process.env.KEY_TOKEN || 'default_secret_key', 60)
                    });
                }
            }
        }
        // Verificar si es un proveedor
        if (proveedorResult && proveedorResult.length > 0) {
            const hashedPasswordProveedor = (_c = proveedorResult[0].contraseña) === null || _c === void 0 ? void 0 : _c.toString();
            if (hashedPasswordProveedor && contraseña) {
                const isPasswordValid = yield bcryptjs_1.default.compare(contraseña, hashedPasswordProveedor);
                if (isPasswordValid) {
                    return res.status(200).json({
                        status: "Successful authentication",
                        userType: "proveedor",
                        token: (0, generateToken_1.default)({ id: proveedorResult[0].id_proveedor, role: "proveedor" }, process.env.KEY_TOKEN || 'default_secret_key', 60)
                    });
                }
            }
        }
        return res.status(401).json({
            status: "Invalid username or password"
        });
    }
    catch (error) {
        const errorMessage = error instanceof Error
            ? error.message
            : "Error desconocido";
        return res.status(500).json({
            status: "Error interno del servidor",
            error: errorMessage
        });
    }
});
exports.default = secureAuth;
