import { Request, Response } from "express";
import Auth from '../Dto/AuthDto';
import AdminSercives from "../services/AdminServices";
import generateToken from '../Helpers/generateToken';
import dotenv from "dotenv";
dotenv.config();


let auth = async (req: Request, res: Response) => {
  try {
    const { email, contraseña } = req.body;
    const login = await AdminSercives.login(new Auth(email, contraseña));
    if (login.logged) {
      return res.status(200).json({
        status: login.status,
        token: generateToken({id: login.id}, process.env.KEY_TOKEN, 6)
      });
    }
    return res.status(401).json({
      status: login.status
    });
  } catch (error) {
    console.log(error);
  }
}



export default auth;