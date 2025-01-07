import Auth from '../Dto/AuthDto';
import Admin from '../Dto/Admin-Dto/RegisterAdminDto';
import DeleteAdmin from '../Dto/Admin-Dto/DeleteAdminDto'
import generateHash from '../Helpers/generateHash';
import AdminRepository from '../repositories/AdminRepository';

class AdminSercives {

    static async login(auth: Auth) {
        return await AdminRepository.login(auth);
    }

    static async register (Admin: Admin) {
        Admin.contraseña = await generateHash(Admin.contraseña)
        return await AdminRepository.addAdmin(Admin)
    }

    static async deleteAdmin(deleteAdmin: DeleteAdmin) {
        return await AdminRepository.deleteAdmin(deleteAdmin)
      }


}

export default AdminSercives;