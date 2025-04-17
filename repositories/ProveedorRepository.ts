import db from '../config/config-db';
import bcrypt from 'bcryptjs';
import Auth from '../Dto/AuthDto';
import Proveedor from '../Dto/Proveedor-Dto/RegisterProveedorDto';

class ProveedorRepository {

    static async login(auth: Auth) {
        try {
            const sql = 'SELECT id_proveedor, contraseña FROM Proveedor WHERE Email=?';
            const values = [auth.Email];
            const result: any = await db.execute(sql, values);
            
            if (!result || !result[0] || result[0].length === 0) {
                return { logged: false, status: "Invalid username or password" };
            }

            const storedPassword = result[0][0].contraseña;
            const providedPassword = auth.contraseña;

            if (!storedPassword || !providedPassword) {
                return { logged: false, status: "Invalid username or password" };
            }

            // Asegurarse de que storedPassword sea una cadena
            const storedPasswordStr = storedPassword.toString();
            
            try {
                const isPasswordValid = await bcrypt.compare(providedPassword, storedPasswordStr);
                
                if (isPasswordValid) {
                    return { 
                        logged: true, 
                        status: "Successful authentication", 
                        id: result[0][0].id_proveedor, 
                        role: "proveedor" 
                    };
                }
            } catch (compareError) {
                return { logged: false, status: "Error en la autenticación" };
            }
            
            return { logged: false, status: "Invalid username or password" };
        } catch (error) {
            console.error('Error en login:', error);
            return { logged: false, status: "Error de conexión con la base de datos" };
        }
    }

    static async add(proveedor: Proveedor){
        try {
            const hashedPassword = await bcrypt.hash(proveedor.contraseña, 10);
            const sql = 'INSERT INTO Proveedor (nombres, apellidos, Email, contraseña) VALUES (?, ?, ?, ?)';
            const values = [proveedor.nombres, proveedor.apellidos, proveedor.Email, hashedPassword];        
            return db.execute(sql, values);
        } catch (error) {
            console.error('Error en add:', error);
            throw error;
        }
    }
}

export default ProveedorRepository;