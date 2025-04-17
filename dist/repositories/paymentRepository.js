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
exports.PaymentRepository = void 0;
const uuid_1 = require("uuid");
const database_1 = __importDefault(require("../config/database"));
class PaymentRepository {
    savePreference(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.default.getConnection();
            try {
                const id = (0, uuid_1.v4)();
                const [result] = yield connection.execute('INSERT INTO payment_preferences (id_pago, preference_id, items, payer, status) VALUES (?, ?, ?, ?, ?)', [id, data.preferenceId, JSON.stringify(data.items), JSON.stringify(data.payer), data.status]);
                return Object.assign({ id }, data);
            }
            finally {
                connection.release();
            }
        });
    }
    updatePaymentStatus(paymentId, status) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.default.getConnection();
            try {
                const [result] = yield connection.execute('UPDATE payment_preferences SET status = ? WHERE preference_id = ?', [status, paymentId]);
                return result;
            }
            finally {
                connection.release();
            }
        });
    }
    getPaymentByPreferenceId(preferenceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.default.getConnection();
            try {
                const [rows] = yield connection.execute('SELECT * FROM payment_preferences WHERE preference_id = ?', [preferenceId]);
                if (Array.isArray(rows) && rows.length > 0) {
                    const payment = rows[0];
                    return {
                        id: payment.id_pago,
                        preferenceId: payment.preference_id,
                        items: JSON.parse(payment.items),
                        payer: JSON.parse(payment.payer),
                        status: payment.status,
                        createdAt: payment.fecha_creacion,
                        updatedAt: payment.fecha_actualizacion
                    };
                }
                return null;
            }
            finally {
                connection.release();
            }
        });
    }
    getPaymentsByStatus(status) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield database_1.default.getConnection();
            try {
                const [rows] = yield connection.execute('SELECT * FROM payment_preferences WHERE status = ?', [status]);
                return rows.map(payment => ({
                    id: payment.id_pago,
                    preferenceId: payment.preference_id,
                    items: JSON.parse(payment.items),
                    payer: JSON.parse(payment.payer),
                    status: payment.status,
                    createdAt: payment.fecha_creacion,
                    updatedAt: payment.fecha_actualizacion
                }));
            }
            finally {
                connection.release();
            }
        });
    }
}
exports.PaymentRepository = PaymentRepository;
