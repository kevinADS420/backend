import express from "express";
import bodyParser from 'body-parser';
import cors = require('cors'); // Importa cors

import auth from './routes/auth';
import dotenv from "dotenv";
import unifiedAuth from './routes/unified-auth'; // Ruta de autenticación unificada
import authProveedor from './routes/Proveedor-Routes/Auth_Proveedor'; // Nueva importación

// Rutas de Administrador 
import register_Admin from "./routes/Admin-Routes/Register_Admin"
import delete_Admin from "./routes/Admin-Routes/Delete_Admin"
import profiles from "./routes//profile"


// Rutas de clientes 
import get_customer_by_email from "./routes/Customer-Routes/Get_Customer_By_Email";
import register_customer from './routes/Customer-Routes/Register_Customer';
import update_customer from "./routes/Customer-Routes/Update_Customer";
import delete_customer from "./routes/Customer-Routes/Delete_Customer";
import auth_customer from "./routes/Customer-Routes/Auth_Customer";
import profile_customer from "./routes/Customer-Routes/Profile_Customer";

// Rutas de Proveedor
import register_Proveedor from "./routes/Proveedor-Routes/Register_Proveedor";
import get_Proveedor_by_email from "./routes/Proveedor-Routes/Get_Proveedor_By_Email"
import profile_proveedor from "./routes/Proveedor-Routes/Profile_proveedor";

// rutas de productos 
import register_product from "./routes/Product-Product/Register_Product"
import update_Product from "./routes/Product-Product/Update_Product";
import delete_product from "./routes/Product-Product/Delete_Product";



dotenv.config();


const app = express().use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5173', // -> Permite solicitudes desde tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] //-> Añadido Authorization para permitir el token
}));

// Rutas Unificadas clientes, proveedor, admin
app.use('/login', unifiedAuth);
app.use('/login/admin', auth);
app.use('/login/customer', auth_customer);
app.use('/login/proveedor', authProveedor); // Nueva ruta específica para proveedores

// Rutas cliente
app.use('/customer', get_customer_by_email);
app.use('/register/customer', register_customer);
app.use('/Update/customer', update_customer);
app.use('/Delete/customer', delete_customer);
app.use('/profile/customer', profile_customer);

// Rutas Proveedor
app.use('/proveedor/login', get_Proveedor_by_email);
app.use('/register/Proveedor', register_Proveedor);
app.use('/profile/Proveedor', profile_proveedor)


// Rutas admin
app.use('/register/admin', register_Admin);
app.use('/delete/admin', delete_Admin);
app.use('/profile', profiles);

// Rutas produtos
app.use('/register/product', register_product);
app.use('/Update/product/:id', update_Product);
app.use('/delete/product', delete_product);


// Puerto 

const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});