import mysql from 'mysql2';
import dotenv from "dotenv";
dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306, // Convertir a número
    connectionLimit: 10,
    queueLimit: 0
});
  
export default db.promise();