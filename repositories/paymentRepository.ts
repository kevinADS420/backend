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
            // Primero crear un pedido
            const [pedidoResult] = await connection.execute(
                'INSERT INTO Pedido (estado_pedido, fecha_pedido, total_pago, id_cliente, id_administrador) VALUES (?, ?, ?, ?, ?)',
                ['pendiente', new Date(), data.items.reduce((sum, item) => sum + (item.unit_price * item.quantity), 0), data.payer.id, 1] // Usando 1 como id_administrador por defecto
            );

            // Obtener el ID del pedido creado
            const [pedido] = await connection.execute(
                'SELECT id_pedido FROM Pedido WHERE id_cliente = ? ORDER BY id_pedido DESC LIMIT 1',
                [data.payer.id]
            );

            if (!Array.isArray(pedido) || pedido.length === 0) {
                throw new Error('No se pudo crear el pedido');
            }

            const idPedido = (pedido[0] as any).id_pedido;
            const id = uuidv4();
            
            // Generar un número de radicado único (formato: RAD-YYYYMMDD-XXXXX)
            const fecha = new Date();
            const radicado = `RAD-${fecha.getFullYear()}${String(fecha.getMonth() + 1).padStart(2, '0')}${String(fecha.getDate()).padStart(2, '0')}-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`;
            
            // Ahora crear la preferencia de pago con el ID del pedido
            const [result] = await connection.execute(
                'INSERT INTO payment_preferences (id_pago, preference_id, items, payer, status, id_cliente, id_pedido, radicado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                [id, data.preferenceId, JSON.stringify(data.items), JSON.stringify(data.payer), data.status, data.payer.id, idPedido, radicado]
            );
            return { id, idPedido, radicado, ...data };
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