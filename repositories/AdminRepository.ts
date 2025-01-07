import db from '../config/config-db';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';
import Admin from '../Dto/Admin-Dto/RegisterAdminDto';
import DeleteAdmin from '../Dto/Admin-Dto/DeleteAdminDto'


class AdminRepository {

    static async login(auth: Auth){
        const sql = 'SELECT id, contraseña FROM Admin WHERE email=?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0){
          const isPasswordValid = await bcrypt.compare(auth.contraseña, result[0][0].contraseña);
          if (isPasswordValid){
            return {logged: true, status: "Successful authentication", id: result[0][0].id}
          }
          return {logged: false, status: "1.0 Invalid username or password" };
        }
        return {logged: false, status: "2.0 Invalid username or password" };
    }


    static async addAdmin(admin: Admin){
        const sql = 'INSERT INTO Admin (nombre, apellido, email, contraseña) VALUES (?, ?, ?, ?) '
        const values = [ admin.nombre, admin.apellido, admin.email, admin.contraseña ];
        return db.execute(sql, values)
    }

    static async deleteAdmin(deleteAdmin: DeleteAdmin){
      const sql = 'DELETE FROM Admin WHERE apellido = ? AND email = ?';
      const values = [deleteAdmin.apellido, deleteAdmin.email];
      return db.execute(sql,values);
    }


}



export default AdminRepository;