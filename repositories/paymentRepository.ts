import { v4 as uuidv4 } from 'uuid';
import pool from '../config/database';

export class PaymentRepository {
    async savePreference(data: {
        preferenceId: string;
        items: any[];
        payer: any;
        status: string;
    }) {
        const connection = await pool.getConnection();
        try {
            const id = uuidv4();
            const [result] = await connection.execute(
                'INSERT INTO payment_preferences (id_pago, preference_id, items, payer, status) VALUES (?, ?, ?, ?, ?)',
                [id, data.preferenceId, JSON.stringify(data.items), JSON.stringify(data.payer), data.status]
            );
            return { id, ...data };
        } finally {
            connection.release();
        }
    }

    async updatePaymentStatus(paymentId: string, status: string) {
        const connection = await pool.getConnection();
        try {
            const [result] = await connection.execute(
                'UPDATE payment_preferences SET status = ? WHERE preference_id = ?',
                [status, paymentId]
            );
            return result;
        } finally {
            connection.release();
        }
    }

    async getPaymentByPreferenceId(preferenceId: string) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT * FROM payment_preferences WHERE preference_id = ?',
                [preferenceId]
            );
            if (Array.isArray(rows) && rows.length > 0) {
                const payment = rows[0] as any;
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
        } finally {
            connection.release();
        }
    }

    async getPaymentsByStatus(status: string) {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT * FROM payment_preferences WHERE status = ?',
                [status]
            );
            return (rows as any[]).map(payment => ({
                id: payment.id_pago,
                preferenceId: payment.preference_id,
                items: JSON.parse(payment.items),
                payer: JSON.parse(payment.payer),
                status: payment.status,
                createdAt: payment.fecha_creacion,
                updatedAt: payment.fecha_actualizacion
            }));
        } finally {
            connection.release();
        }
    }
} 