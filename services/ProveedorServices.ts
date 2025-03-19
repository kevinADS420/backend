import generateHash from '../Helpers/generateHash';
import proveedor from '../Dto/Proveedor-Dto/RegisterProveedorDto';
import ProveedorRepository from '../repositories/ProveedorRepository';


class ProveedorService {

    static async register(proveedor: proveedor) {
        proveedor.contraseña = await generateHash(proveedor.contraseña);
        return await ProveedorRepository.add(proveedor);
    }


}


export default ProveedorService;