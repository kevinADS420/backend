import { Request, Response } from "express";
import Customer from '../../Dto/Customer-Dto/RegisterCustomerDto';
import CustomerService from '../../services/CustomerServices';


let register = async (req: Request, res: Response) => {  
  try {
    const {
      nombre,
      apellido1,
      apellido2,
      direccion,
      calle,
      carrera,
      email,
      contraseña
    } = req.body;
    const registerCustomer = await CustomerService.register(new Customer(nombre, apellido1, apellido2, direccion,calle, carrera, email, contraseña))


    return res.status(201).json(
      { status: 'register ok'}
    );
  } catch (error: any) {    
    if (error && error.code == "ER_DUP_ENTRY") {
      return res.status(500).json({ errorInfo: error.sqlMessage }
      );
    }
  }
}


export default register;