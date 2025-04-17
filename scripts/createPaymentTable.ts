import pool from '../config/database';

async function createPaymentTable() {
    try {
        const connection = await pool.getConnection();
        try {
            // Verificar si la tabla ya existe
            const [tables] = await connection.execute(
                "SELECT TABLE_NAME FROM information_schema.TABLES WHERE TABLE_SCHEMA = ? AND TABLE_NAME = ?",
                [process.env.DB_DATABASE, 'payment_preferences']
            );
            
            if ((tables as any[]).length > 0) {
                console.log('La tabla payment_preferences ya existe');
                return;
            }
            
            // Crear la tabla si no existe
            const sql = `
            CREATE TABLE payment_preferences (
                id_pago VARCHAR(36) PRIMARY KEY,
                preference_id VARCHAR(255) UNIQUE NOT NULL,
                items JSON NOT NULL,
                payer JSON NOT NULL,
                status VARCHAR(50) NOT NULL,
                fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            );`;

            await connection.execute(sql);
            console.log('Tabla payment_preferences creada exitosamente');
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error('Error al crear la tabla:', error);
        process.exit(1);
    }
}

createPaymentTable(); 