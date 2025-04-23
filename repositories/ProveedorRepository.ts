import db from '../config/config-db';
import bcrypt from 'bcryptjs';
import Auth from '../Dto/AuthDto';
import Proveedor from '../Dto/Proveedor-Dto/RegisterProveedorDto';

class ProveedorRepository {

    static async login(auth: Auth) {
        try {
            const sql = 'SELECT id_proveedor, contraseña FROM Proveedor WHERE Email = ?';
            const values = [auth.Email];
            const [result]: any = await db.execute(sql, values);
            
            if (!result || result.length === 0) {
                return { logged: false, status: "Invalid username or password" };
            }

            const storedPassword = result[0].contraseña;
            const providedPassword = auth.contraseña;

            if (!storedPassword || !providedPassword) {
                return { logged: false, status: "Invalid username or password" };
            }

            try {
                const storedPasswordStr = Buffer.isBuffer(storedPassword) ? storedPassword.toString('utf8') : storedPassword;
                const isPasswordValid = await bcrypt.compare(providedPassword, storedPasswordStr);
                
                if (isPasswordValid) {
                    return { 
                        logged: true, 
                        status: "Successful authentication", 
                        id: result[0].id_proveedor, 
                        role: "proveedor" 
                    };
                } else {
                    return { logged: false, status: "Invalid username or password" };
                }
            } catch (compareError) {
                console.error('Error al comparar contraseñas:', compareError);
                return { logged: false, status: "Error en la autenticación" };
            }
        } catch (error) {
            console.error('Error en login:', error);
            return { logged: false, status: "Error de conexión con la base de datos" };
        }
    }

    static async add(proveedor: Proveedor){
        try {
            const sql = 'INSERT INTO Proveedor (nombres, apellidos, Email, contraseña) VALUES (?, ?, ?, ?)';
            const values = [proveedor.nombres, proveedor.apellidos, proveedor.Email, proveedor.contraseña];        
            
            const [result] = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error en add:', error);
            throw error;
        }
    }
}

export default ProveedorRepository;