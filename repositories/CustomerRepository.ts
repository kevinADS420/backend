import db from '../config/config-db';
import Customer from '../Dto/Customer-Dto/RegisterCustomerDto';
import DeleteCustomer from '../Dto/Customer-Dto/DeleteCustomersDto';
import Auth from '../Dto/AuthDto';
import bcrypt from 'bcryptjs';

class CustomerRepository {

    static async login(auth: Auth) {
        const sql = 'SELECT id, contraseña FROM Cliente WHERE Email=?';
        const values = [auth.email];
        const result: any = await db.execute(sql, values);
        if (result[0].length > 0) {
            const isPasswordValid = await bcrypt.compare(auth.contraseña, result[0][0].contraseña);
            if (isPasswordValid) {
                return { logged: true, status: "Successful authentication", id: result[0][0].id, role: "customer" }
            }
            return { logged: false, status: "1.0 Invalid username or password" };
        }
        return { logged: false, status: "2.0 Invalid username or password" };
    }

    static async add(customer: Customer){
        const sql = 'INSERT INTO Cliente (Nombres, Apellidos, Email, contraseña) VALUES (?, ?, ?, ?)';
        const values = [ customer.Nombres, customer.Apellidos, customer.Email, customer.contraseña];        
        return db.execute(sql, values);
    }

    static async deleteCustomer(deleteCustomer : DeleteCustomer){
      const sql = 'DELETE FROM Cliente WHERE Apellidos = ? AND Email = ?';
      const values = [deleteCustomer.Apellidos, deleteCustomer.Email];
      return db.execute(sql,values);
    }

    static async UpdateCustomer(customer: Customer){
        const sql = 'UPDATE Cliente SET Nombres = ?, Apellidos = ?, contraseña = ? WHERE Email = ?';
        const values = [customer.Nombres, customer.Apellidos, customer.contraseña, customer.Email];
        return db.execute(sql, values);
    }
  
}

export default CustomerRepository;