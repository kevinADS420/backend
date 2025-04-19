import pool from '../config/database';
import { Guia } from '../types/database';

export class GuiaService {
    async asignarGuiaAleatorio(): Promise<Guia | null> {
        const connection = await pool.getConnection();
        try {
            // Obtener un guía aleatorio que esté disponible
            const [rows] = await connection.execute(
                `SELECT id, primerNombre, primerApellido 
                 FROM guias 
                 WHERE estado = 'disponible' 
                 ORDER BY RAND() 
                 LIMIT 1`
            );
            return Array.isArray(rows) && rows.length > 0 ? rows[0] as Guia : null;
        } finally {
            connection.release();
        }
    }
} 