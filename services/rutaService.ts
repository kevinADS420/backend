import pool from '../config/database';
import { Ruta } from '../types/database';

export class RutaService {
    async buscarRutaPorId(id: number): Promise<Ruta[]> {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(
                'SELECT * FROM rutas WHERE id = ?',
                [id]
            );
            return rows as Ruta[];
        } finally {
            connection.release();
        }
    }
} 