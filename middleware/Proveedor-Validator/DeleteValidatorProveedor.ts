import { Request, Response, NextFunction } from "express";

class DeleteValidatorProveedor {
    public validatorParams(req: Request, res: Response, next: NextFunction) {
        const { id_proveedor } = req.body;

        if (!id_proveedor) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de proveedor es requerido'
            });
        }

        if (isNaN(Number(id_proveedor))) {
            return res.status(400).json({
                status: 'error',
                message: 'ID de proveedor debe ser un número'
            });
        }

        next();
    }

    public validator(req: Request, res: Response, next: NextFunction) {
        // Aquí puedes agregar validaciones adicionales si son necesarias
        next();
    }
}

const deleteValidatorProveedor: DeleteValidatorProveedor = new DeleteValidatorProveedor();
export default deleteValidatorProveedor; 