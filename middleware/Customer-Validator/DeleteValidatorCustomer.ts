import { Request, Response, NextFunction } from "express";

class DeleteValidatorCustomer {
    public validatorParams(req: Request, res: Response, next: NextFunction) {
        const { id_cliente } = req.body;

        if (!id_cliente) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente es requerido'
            });
        }

        if (isNaN(Number(id_cliente))) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de cliente debe ser un número'
            });
        }

        next();
    }

    public validator(req: Request, res: Response, next: NextFunction) {
        // Aquí puedes agregar validaciones adicionales si son necesarias
        next();
    }
}

const deleteValidatorCustomer: DeleteValidatorCustomer = new DeleteValidatorCustomer();
export default deleteValidatorCustomer; 