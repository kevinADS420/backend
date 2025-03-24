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
const nodemailer_1 = __importDefault(require("nodemailer"));
class CustomerRepository {
    static login(auth) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'SELECT id_cliente, contraseña FROM Cliente WHERE Email=?';
            const values = [auth.Email];
            const result = yield config_db_1.default.execute(sql, values);
            if (result[0].length > 0) {
                const isPasswordValid = yield bcryptjs_1.default.compare(auth.contraseña, result[0][0].contraseña);
                if (isPasswordValid) {
                    return { logged: true, status: "Successful authentication", id: result[0][0].id_cliente, role: "customer" };
                }
                return { logged: false, status: "1.0 Invalid username or password" };
            }
            return { logged: false, status: "2.0 Invalid username or password" };
        });
    }
    static add(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO Cliente (Nombres, Apellidos, Email, contraseña) VALUES (?, ?, ?, ?)';
            const values = [customer.Nombres, customer.Apellidos, customer.Email, customer.contraseña];
            return config_db_1.default.execute(sql, values);
        });
    }
    static deleteCustomer(deleteCustomer) {
        return __awaiter(this, void 0, void 0, function* () {
            const sql = 'DELETE FROM Cliente WHERE Apellidos = ? AND Email = ?';
            const values = [deleteCustomer.Apellidos, deleteCustomer.Email];
            return config_db_1.default.execute(sql, values);
        });
    }
    static UpdateCustomer(customer) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield config_db_1.default.getConnection();
            try {
                yield connection.beginTransaction();
                console.log('Actualizando cliente con ID:', customer.id_cliente);
                // Update customer basic info
                let sql = 'UPDATE Cliente SET Nombres = ?, Apellidos = ?, Email = ? WHERE id_cliente = ?';
                let values = [customer.Nombres, customer.Apellidos, customer.Email, customer.id_cliente];
                // If password is provided, update it
                if (customer.contraseña) {
                    sql = 'UPDATE Cliente SET Nombres = ?, Apellidos = ?, Email = ?, contraseña = ? WHERE id_cliente = ?';
                    values = [customer.Nombres, customer.Apellidos, customer.Email, customer.contraseña, customer.id_cliente];
                }
                const [updateResult] = yield connection.execute(sql, values);
                console.log('Resultado de la actualización:', updateResult);
                if (updateResult.affectedRows === 0) {
                    throw new Error('Cliente no encontrado');
                }
                // Update or insert phone number if provided
                if (customer.numeroTelefono && customer.tipo) {
                    const [phoneResult] = yield connection.execute('SELECT id_telefono FROM Telefono WHERE id_cliente = ?', [customer.id_cliente]);
                    if (phoneResult.length > 0) {
                        // Update existing phone
                        yield connection.execute('UPDATE Telefono SET númeroTelefono = ?, tipo = ? WHERE id_cliente = ?', [customer.numeroTelefono, customer.tipo, customer.id_cliente]);
                    }
                    else {
                        // Insert new phone
                        yield connection.execute('INSERT INTO Telefono (númeroTelefono, tipo, id_cliente) VALUES (?, ?, ?)', [customer.numeroTelefono, customer.tipo, customer.id_cliente]);
                    }
                }
                yield connection.commit();
                // Get updated customer data
                const [customerData] = yield connection.execute('SELECT c.*, t.númeroTelefono as numeroTelefono, t.tipo as tipoTelefono FROM Cliente c LEFT JOIN Telefono t ON c.id_cliente = t.id_cliente WHERE c.id_cliente = ?', [customer.id_cliente]);
                return customerData[0];
            }
            catch (error) {
                yield connection.rollback();
                throw error;
            }
            finally {
                connection.release();
            }
        });
    }
    static solicitarResetPassword(resetData) {
        return __awaiter(this, void 0, void 0, function* () {
            // Verificar si el email existe
            const [result] = yield config_db_1.default.execute('SELECT id_cliente FROM Cliente WHERE Email = ?', [resetData.Email]);
            if (result.length === 0) {
                throw new Error('Email no encontrado');
            }
            // Generar código de 6 dígitos
            const codigo = Math.floor(100000 + Math.random() * 900000).toString();
            // Almacenar código con timestamp
            this.codigosVerificacion.set(resetData.Email, {
                codigo,
                timestamp: Date.now()
            });
            // Configurar transporter de email (ajusta según tu configuración)
            const transporter = nodemailer_1.default.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                }
            });
            // Enviar email
            yield transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: resetData.Email,
                subject: 'Código de recuperación de contraseña',
                text: `Tu código de verificación es: ${codigo}\nEste código expirará en 10 minutos.`
            });
            return { success: true, message: 'Código de verificación enviado' };
        });
    }
    static verificarCodigoYResetearPassword(resetData) {
        return __awaiter(this, void 0, void 0, function* () {
            const codigoAlmacenado = this.codigosVerificacion.get(resetData.Email);
            if (!codigoAlmacenado) {
                throw new Error('No hay código de verificación pendiente');
            }
            if (Date.now() - codigoAlmacenado.timestamp > this.CODIGO_EXPIRACION) {
                this.codigosVerificacion.delete(resetData.Email);
                throw new Error('El código ha expirado');
            }
            if (codigoAlmacenado.codigo !== resetData.codigo) {
                throw new Error('Código inválido');
            }
            // Si el código es válido, actualizar la contraseña
            const hashedPassword = yield bcryptjs_1.default.hash(resetData.nuevaContraseña, 10);
            yield config_db_1.default.execute('UPDATE Cliente SET contraseña = ? WHERE Email = ?', [hashedPassword, resetData.Email]);
            // Limpiar el código usado
            this.codigosVerificacion.delete(resetData.Email);
            return { success: true, message: 'Contraseña actualizada exitosamente' };
        });
    }
}
CustomerRepository.codigosVerificacion = new Map();
CustomerRepository.CODIGO_EXPIRACION = 10 * 60 * 1000; // 10 minutos en milisegundos
exports.default = CustomerRepository;
