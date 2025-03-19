import { Request, Response } from "express";
import Customer from '../../Dto/Customer-Dto/RegisterCustomerDto';
import CustomerService from '../../services/CustomerServices';


let register = async (req: Request, res: Response) => {  

  try {
    
    const {
      Nombres,
      Apellidos,
      Email,
      contraseña
    } = req.body;
    const registerCustomer = await CustomerService.register(new Customer(Nombres, Apellidos, Email, contraseña))


    return res.status(201).json(
      { status: 'register ok'}
    );
  } catch (error: any) {    
    if (error && error.code == "ER_DUP_ENTRY") {
        return res.status(500).json({ errorInfo: error.sqlMessage });
    }
  }
}


export default register;