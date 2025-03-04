import express from "express";
import bodyParser from 'body-parser';
import cors = require('cors'); // Importa cors

import auth from './routes/auth';
import dotenv from "dotenv";



// Rutas de Administrador 
import register_Admin from "./routes/Admin-Routes/Register_Admin"
import delete_Admin from "./routes/Admin-Routes/Delete_Admin"
import profiles from "./routes//profile"


// Rutas de clientes 
import register_customer from './routes/Customer-Routes/Register_Customer';
import update_customer from "./routes/Customer-Routes/Update_Customer";
import delete_customer from "./routes/Customer-Routes/Delete_Customer";


// rutas de productos 
import register_product from "./routes/Product-Product/Register_Product"
// import get_product from "./routes/Get_Products"
import update_Product from "./routes/Product-Product/Update_Product";
import delete_product from "./routes/Product-Product/Delete_Product";



dotenv.config();


const app = express().use(bodyParser.json());

app.use(cors({
  origin: 'http://localhost:5173', // Permite solicitudes desde tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use('/register/customer', register_customer);
app.use('/Update/customer', update_customer);
app.use('/Delete/customer', delete_customer);


app.use('/register/product', register_product);
// app.use('/get/product', get_product
app.use('/Update/product/:id', update_Product);
app.use('/delete/product', delete_product);


app.use('/register/admin', register_Admin);
app.use('/delete/admin', delete_Admin);
app.use('/login', auth);
app.use('/profile', profiles)


const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
}).on("error", (error) => {
  throw new Error(error.message);
});
