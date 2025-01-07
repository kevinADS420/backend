import { Request, Response } from "express";
import Customer from '../../Dto/Customer-Dto/RegisterCustomerDto';
import CustomerService from '../../services/CustomerServices';

let update_customer= async(req:Request, res:Response)=>{
    try{
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
        const update=await CustomerService.UpdateCustomer(new Customer(nombre, apellido1, apellido2, direccion,calle, carrera, email, contraseña))


        return res.status(201).json(
            { status: 'Cliente actualizado con exito' }
        );
    } catch(error:any){
        if(error && error.code == "ER_DUP_ENTRY"){
            return res.status(500).json({errorInfo: error.sqlMessage});
        }else{
            return res.status(500).json({error: "Error al actualizar cliente", details: error.message});
        }
    }
}

export default update_customer;