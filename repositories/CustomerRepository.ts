import db from '../config/config-db';
import Customer from '../Dto/Customer-Dto/RegisterCustomerDto';
import DeleteCustomer from '../Dto/Customer-Dto/DeleteCustomersDto';


class CustomerRepository {

    static async add(customer: Customer){
        const sql = 'INSERT INTO Cliente (nombre, apellido1, apellido2, direccion, calle, carrera, email, contraseña) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [ customer.nombre, customer.apellido1, customer.apellido2, customer.direccion, customer.calle, customer.carrera, customer.email, customer.contraseña];        
        return db.execute(sql, values);
    }

    static async deleteCustomer(deleteCustomer : DeleteCustomer){
      const sql = 'DELETE FROM Cliente WHERE apellido1 = ? AND email = ?';
      const values = [deleteCustomer.apellido1, deleteCustomer.email];
      return db.execute(sql,values);
      }


      static async UpdateCustomer(customer: Customer){
        const sql = 'UPDATE Cliente SET nombre = ?, apellido1 = ?, apellido2 = ?, direccion = ?, calle = ?, carrera = ?, contraseña = ? WHERE email = ?';
        const values = [customer.nombre, customer.apellido1, customer.apellido2, customer.direccion, customer.calle, customer.carrera, customer.contraseña, customer.email];
        return db.execute(sql, values);
      }
  
}


export default CustomerRepository;