import db from '../config/config-db';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';
import Admin from '../Dto/Admin-Dto/RegisterAdminDto';
import DeleteAdmin from '../Dto/Admin-Dto/DeleteAdminDto'


class AdminRepository {

    static async login(auth: Auth){
        const sql = 'SELECT id, contraseña FROM Administrador WHERE email=?';
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
        const sql = 'INSERT INTO Administrador (Nombres, Apellidos, Email, contraseña) VALUES (?, ?, ?, ?) '
        const values = [ admin.Nombre, admin.Apellido, admin.Email, admin.contraseña ];
        return db.execute(sql, values)
    }

    static async deleteAdmin(deleteAdmin: DeleteAdmin){
      const sql = 'DELETE FROM Administrador WHERE Apellidos = ? AND Email = ?';
      const values = [deleteAdmin.Apellidos, deleteAdmin.Email];
      return db.execute(sql,values);
    }


}



export default AdminRepository;