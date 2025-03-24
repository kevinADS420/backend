import { Request, Response } from "express";
import Auth from '../Dto/AuthDto';
import db from "../config/config-db";
import bcrypt from 'bcryptjs';
import generateToken from '../Helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();

let secureAuth = async (req: Request, res: Response) => {
  try {
    const { Email, contraseña } = req.body;
    
    // Queries para buscar en las tres tablas
    const adminQuery = 'SELECT id_administrador, contraseña FROM Administrador WHERE Email=?';
    const customerQuery = 'SELECT id_cliente, contraseña FROM Cliente WHERE Email=?';
    const proveedorQuery = 'SELECT id_proveedor, contraseña FROM Proveedor WHERE Email=?';
    
    // Ejecutar las consultas
    const [adminResult]: any = await db.execute(adminQuery, [Email]);
    const [customerResult]: any = await db.execute(customerQuery, [Email]);
    const [proveedorResult]: any = await db.execute(proveedorQuery, [Email]);
    
    // Verificar si es un administrador
    if (adminResult && adminResult.length > 0) {
      // Extraer contraseña correctamente - convertir a string si es necesario
      const hashedPasswordAdmin = adminResult[0].contraseña?.toString();
      
      if (hashedPasswordAdmin && contraseña) {
        const isPasswordValid = await bcrypt.compare(contraseña, hashedPasswordAdmin);
        
        if (isPasswordValid) {
          return res.status(200).json({
            status: "Successful authentication",
            userType: "admin",
            token: generateToken({id: adminResult[0].id_administrador, role: "admin"}, process.env.KEY_TOKEN || 'default_secret_key', 60)
          });
        }
      }
    }
    
    // Verificar si es un cliente
    if (customerResult && customerResult.length > 0) {
      // Extraer contraseña correctamente - convertir a string si es necesario
      const hashedPasswordCustomer = customerResult[0].contraseña?.toString();
      
      if (hashedPasswordCustomer && contraseña) {
        const isPasswordValid = await bcrypt.compare(contraseña, hashedPasswordCustomer);
        
        if (isPasswordValid) {
          return res.status(200).json({
            status: "Successful authentication",
            userType: "customer",
            token: generateToken({id: customerResult[0].id_cliente, role: "customer"}, process.env.KEY_TOKEN || 'default_secret_key', 60)
          });
        }
      }
    }
    
    // Verificar si es un proveedor
    if (proveedorResult && proveedorResult.length > 0) {
      const hashedPasswordProveedor = proveedorResult[0].contraseña?.toString();
      
      if (hashedPasswordProveedor && contraseña) {
        const isPasswordValid = await bcrypt.compare(contraseña, hashedPasswordProveedor);
        
        if (isPasswordValid) {
          return res.status(200).json({
            status: "Successful authentication",
            userType: "proveedor",
            token: generateToken({id: proveedorResult[0].id_proveedor, role: "proveedor"}, process.env.KEY_TOKEN || 'default_secret_key', 60)
          });
        }
      }
    }
    
    return res.status(401).json({
      status: "Invalid username or password"
    });
    
  } catch (error: unknown) {
    const errorMessage = error instanceof Error 
      ? error.message 
      : "Error desconocido";
      
    return res.status(500).json({
      status: "Error interno del servidor",
      error: errorMessage
    });
  }
}

export default secureAuth;