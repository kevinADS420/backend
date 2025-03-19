import { Request, Response } from "express";
import UpdateCustomer from '../../Dto/Customer-Dto/UpdateCustomerDto';
import CustomerService from '../../services/CustomerServices';

let update_customer = async(req: Request, res: Response) => {
    try {
        console.log('Params recibidos:', req.params);
        console.log('Body recibido:', req.body);
        
        // Capturar el id de la URL, no del body
        const id_cliente = parseInt(req.params.id);
        
        const {
            Nombres,
            Apellidos,
            Email,
            numeroTelefono,       // Cambiado de Telefono a numeroTelefono para que coincida con DTO
            tipo = 'movil'
        } = req.body;

        if (!id_cliente || isNaN(id_cliente)) {
            return res.status(400).json({ error: 'ID de cliente inválido' });
        }

        console.log('Creando objeto UpdateCustomer con:', {
            Nombres, Apellidos, Email, numeroTelefono, tipo, id_cliente
        });

        const customerData = new UpdateCustomer(
            Nombres, 
            Apellidos, 
            Email, 
            numeroTelefono,       // Corregido para coincidir con el DTO
            tipo,
            undefined,
            id_cliente
        );

        console.log('Objeto UpdateCustomer creado:', customerData);

        const update = await CustomerService.UpdateCustomer(customerData);

        if (!update) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        return res.status(200).json({ 
            status: 'Cliente actualizado con éxito',
            data: update
        });
    } catch(error: any) {
        console.error('Error completo:', error);
        
        if(error && error.code === "ER_DUP_ENTRY") {
            return res.status(500).json({
                error: "Error de duplicación",
                details: error.sqlMessage
            });
        } else {
            return res.status(500).json({
                error: "Error al actualizar cliente",
                message: error.message,
                stack: error.stack
            });
        }
    }
}

export default update_customer;