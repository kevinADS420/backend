import pool from './config/config-db';

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Conexión exitosa a la base de datos');
        connection.release();
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    } finally {
        await pool.end();
    }
}

testConnection(); 