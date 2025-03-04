import db from '../config/config-db';
import Customer from '../Dto/Customer-Dto/RegisterCustomerDto';
import DeleteCustomer from '../Dto/Customer-Dto/DeleteCustomersDto';


class CustomerRepository {

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