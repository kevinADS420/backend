import pool from '../config/database';
import { ServicioAdicional } from '../types/database';

export class ServiciosAdicionalesService {
    async obtenerPorId(id: number): Promise<ServicioAdicional | null> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT * FROM servicios_adicionales WHERE id = ?',
                [id]
            );
            return Array.isArray(rows) && rows.length > 0 ? rows[0] as ServicioAdicional : null;
        } finally {
            connection.release();
        }
    }
} 