import { Request, Response } from "express";
import Auth from '../../Dto/AuthDto';
import CustomerService from "../../services/CustomerServices";
import generateToken from '../../Helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();

let customerAuth = async (req: Request, res: Response) => {
  try {
    const { Email, contraseña } = req.body;
    const login = await CustomerService.login(new Auth(Email, contraseña));

    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({id: login.id, role: "customer"}, process.env.KEY_TOKEN, 6)
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "Error interno del servidor"
    });
  }
}

export default customerAuth;