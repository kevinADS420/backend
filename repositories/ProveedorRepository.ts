import db from '../config/config-db';
import bcrypt from 'bcryptjs';
import Auth from '../Dto/AuthDto';
import Proveedor from '../Dto/Proveedor-Dto/RegisterProveedorDto';

class ProveedorRepository {

    static async login(auth: Auth) {
        const sql = 'SELECT id_proveedor, contraseña FROM Proveedor WHERE Email=?';
        const values = [auth.Email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.contraseña, result[0][0].contraseña);
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id_proveedor, role: "proveedor" }
            }
            return { logged: false, status: "1.0 Invalid username or password" };
        }
        return { logged: false, status: "2.0 Invalid username or password" };
    }

    static async add(proveedor: Proveedor){
        const sql = 'INSERT INTO Proveedor (nombres, apellidos, Email, contraseña) VALUES (?, ?, ?, ?)';
        const values = [ proveedor.nombres, proveedor.apellidos, proveedor.Email, proveedor.contraseña];        
        return db.execute(sql, values);
    }

}

export default ProveedorRepository;