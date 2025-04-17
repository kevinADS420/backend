import pool from '../config/database';

async function checkDatabase() {
    try {
        const connection = await pool.getConnection();
        try {
            // Obtener todas las tablas
            const [tables] = await connection.execute('SHOW TABLES');
            console.log('Tablas en la base de datos:');
            console.log(tables);

            // Para cada tabla, obtener su estructura
            for (const table of tables as any[]) {
                const tableName = Object.values(table)[0];
                console.log(`\nEstructura de la tabla ${tableName}:`);
                const [columns] = await connection.execute(`DESCRIBE ${tableName}`);
                console.log(columns);
            }
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error('Error al consultar la base de datos:', error);
        process.exit(1);
    }
}

checkDatabase(); 