import { Request, Response } from "express";
import Auth from '../Dto/AuthDto';
import AdminSercives from "../services/AdminServices";
import CustomerService from "../services/CustomerServices";
import generateToken from '../Helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();

let unifiedAuth = async (req: Request, res: Response) => {
  try {
    const { Email, contraseña } = req.body;
    
    // Primero intentamos autenticar como administrador
    const adminLogin = await AdminSercives.login(new Auth(Email, contraseña));
    
    if (adminLogin.logged) {
      return res.status(200).json({
        status: adminLogin.status,
        userType: "admin",
        token: generateToken({id: adminLogin.id, role: "admin"}, process.env.KEY_TOKEN, 60) // Token válido por 60 minutos
      });
    }
    
    // Si no tiene éxito como administrador, intentamos como cliente
    const customerLogin = await CustomerService.login(new Auth(Email, contraseña));
    
    if (customerLogin.logged) {
      return res.status(200).json({
        status: customerLogin.status,
        userType: "customer",
        token: generateToken({id: customerLogin.id, role: "customer"}, process.env.KEY_TOKEN, 60) // Token válido por 60 minutos
      });
    }
    
    // Si ninguno de los dos tiene éxito, devolvemos un error de autenticación
    return res.status(401).json({
      status: "Invalid username or password"
    });
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Error interno del servidor"
    });
  }
}

export default unifiedAuth;