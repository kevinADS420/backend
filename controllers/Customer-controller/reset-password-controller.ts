import { Request, Response } from "express";
import PasswordReset from '../../Dto/Customer-Dto/PasswordResetDto';
import CustomerRepository from '../../repositories/CustomerRepository';

export const solicitar_reset = async (req: Request, res: Response) => {
    try {
        const { Email } = req.body;
        const resetData = new PasswordReset(Email);
        
        await CustomerRepository.solicitarResetPassword(resetData);
        
        return res.status(200).json({
            status: 'Código de verificación enviado al correo'
        });
    } catch (error: any) {
        return res.status(500).json({
            error: "Error al procesar la solicitud",
            details: error.message
        });
    }
};

export const verificar_y_resetear = async (req: Request, res: Response) => {
    try {
        const { Email, codigo, nuevaContraseña } = req.body;
        const resetData = new PasswordReset(Email, codigo, nuevaContraseña);
        
        await CustomerRepository.verificarCodigoYResetearPassword(resetData);
        
        return res.status(200).json({
            status: 'Contraseña actualizada exitosamente'
        });
    } catch (error: any) {
        return res.status(500).json({
            error: "Error al resetear la contraseña",
            details: error.message
        });
    }
}; 