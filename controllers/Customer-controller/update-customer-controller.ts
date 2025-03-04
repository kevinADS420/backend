import { Request, Response } from "express";
import Customer from '../../Dto/Customer-Dto/RegisterCustomerDto';
import CustomerService from '../../services/CustomerServices';

let update_customer= async(req:Request, res:Response)=>{
    try{
        const {
            Nombres,
            Apellidos,
            Email,
            contraseña
        } = req.body;
        const update=await CustomerService.UpdateCustomer(new Customer(Nombres, Apellidos, Email, contraseña))


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