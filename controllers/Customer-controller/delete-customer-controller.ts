import { Request, Response } from "express";
import CostomerService from '../../services/CustomerServices';
import DeleteCustomer from "../../Dto/Customer-Dto/DeleteCustomersDto";



const delete_customer = async (req: Request, res: Response) => {
    try {
        const { 
            Apellidos, 
            Email 
        } = req.body;
        const deleteCustomer = await CostomerService.deleteCustomer(new DeleteCustomer(Apellidos, Email));


        return res.status(200).json(
            { message: 'Cliente eliminado con éxito' }
        );
    } catch (error: any) {
        if (error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage });
        } else {
            return res.status(500).json({ error: "Error, no se pudo eliminar el cliente", details: error.message });
        }
    }
}

export default delete_customer;