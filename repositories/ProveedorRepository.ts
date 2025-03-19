import db from '../config/config-db';
import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
import Proveedor from '../Dto/Proveedor-Dto/RegisterProveedorDto';

class ProveedorRepository {

    static async add(proveedor: Proveedor){
        const sql = 'INSERT INTO Proveedor (nombres, apellidos, email, contraseña) VALUES (?, ?, ?, ?)';
        const values = [ proveedor.nombres, proveedor.apellidos, proveedor.email, proveedor.contraseña];        
        return db.execute(sql, values);
    }

}

export default ProveedorRepository;