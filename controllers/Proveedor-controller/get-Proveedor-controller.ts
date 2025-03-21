import { Request, Response } from "express";
import db from "../../config/config-db";

const proveedorAuth = async (req: Request, res: Response) => {
  try {
      const Email = req.params.email;
      
      const sql = 'SELECT id_cliente, Nombres, Apellidos, Email FROM Cliente WHERE Email = ?';
      const [rows]: any = await db.execute(sql, [Email]);
      
      if (rows.length === 0) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      
      return res.status(200).json(rows[0]);
    } catch (error: any) {
      console.error("Error al obtener cliente por email:", error);
      return res.status(500).json({ 
        error: "Error interno del servidor", 
        details: error.message 
      });
    }
}

export default proveedorAuth;