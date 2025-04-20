import Customer from '../Dto/Customer-Dto/RegisterCustomerDto';
import DeleteCustomer from '../Dto/Customer-Dto/DeleteCustomersDto';
import UpdateCustomer from '../Dto/Customer-Dto/UpdateCustomerDto';
import CustomerRepository from '../repositories/CustomerRepository';
import Auth from '../Dto/AuthDto';

class CustomerService {
    
    static async login(auth: Auth) {
        return await CustomerRepository.login(auth);
    }

    static async register(Customer: Customer) {
        return await CustomerRepository.add(Customer);
    }

    static async UpdateCustomer(customer: UpdateCustomer) {
        console.log('Servicio recibió:', customer);
        try {
            const result = await CustomerRepository.UpdateCustomer(customer);
            console.log('Resultado de la actualización:', result);
            return result;
        } catch (error) {
            console.error('Error en el servicio:', error);
            throw error;
        }
    }

    static async deleteCustomer(deleteCustomer: DeleteCustomer){
        return await CustomerRepository.deleteCustomer(deleteCustomer);
    }
}

export default CustomerService;

