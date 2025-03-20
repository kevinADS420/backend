import generateHash from '../../Helpers/generateHash';
import proveedor from '../../Dto/Proveedor-Dto/RegisterProveedorDto';
import ProveedorRepository from '../../repositories/ProveedorRepository';
import Auth from '../../Dto/AuthDto';

class ProveedorService {
    static async login(auth: Auth) {
        return await ProveedorRepository.login(auth);
    }

    static async register(proveedor: proveedor) {
        proveedor.contraseña = await generateHash(proveedor.contraseña);
        return await ProveedorRepository.add(proveedor);
    }
}

export default ProveedorService;