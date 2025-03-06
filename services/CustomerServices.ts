import generateHash from '../Helpers/generateHash';
import Customer from '../Dto/Customer-Dto/RegisterCustomerDto';
import DeleteCustomer from '../Dto/Customer-Dto/DeleteCustomersDto';
import CustomerRepository from '../repositories/CustomerRepository';
import Auth from '../Dto/AuthDto';



class CustomerService {
    
    static async login(auth: Auth) {
        return await CustomerRepository.login(auth);
    }

    static async register(Customer: Customer) {
        Customer.contraseña = await generateHash(Customer.contraseña);
        return await CustomerRepository.add(Customer);
    }

    static async UpdateCustomer(customer: Customer){
        return await CustomerRepository.UpdateCustomer(customer);
    }


    static async deleteCustomer(deleteCustomer: DeleteCustomer){
        return await CustomerRepository.deleteCustomer(deleteCustomer);
    }

}

export default CustomerService;

