import express from "express";
import bodyParser from 'body-parser';
import cors = require('cors'); // Importa cors

import auth from './routes/auth';
import dotenv from "dotenv";
import unifiedAuth from './routes/unified-auth'; // Ruta de autenticación unificada
import authProveedor from './routes/Proveedor-Routes/Auth_Proveedor'; // Ruta para autenticación de proveedores

// Rutas de Administrador 
import register_Admin from "./routes/Admin-Routes/Register_Admin"
import delete_Admin from "./routes/Admin-Routes/Delete_Admin"
import profiles from "./routes/profile"

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

// Configuración CORS mejorada para soportar múltiples orígenes
const allowedOrigins = [
  'https://huertomkt.netlify.app', // Sin la barra al final
  'http://localhost:5173',         // Desarrollo local
  'https://localhost:10101'         // Desarrollo local con HTTPS
];

app.use(cors({
  origin: function(origin, callback) {
    // Permitir solicitudes sin origen (como apps móviles, postman o curl)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.log(`Origen bloqueado por CORS: ${origin}`);
      callback(null, true); // Temporalmente permitimos todos los orígenes para depuración
      // Para producción, puedes cambiar a:
      // callback(new Error('No permitido por CORS'));
    }
  },
  credentials: true,         // Habilitar credenciales (cookies, auth headers)
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Incluir OPTIONS para preflight
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Middleware de logging para debugging
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - Origin: ${req.headers.origin}`);
  next();
});

// Rutas de autenticación
app.use('/login', unifiedAuth);                // Autenticación unificada
app.use('/login/admin', auth);                 // Autenticación específica de admin
app.use('/login/customer', auth_customer);     // Autenticación específica de cliente
app.use('/login/proveedor', authProveedor);    // Autenticación específica de proveedor

// Rutas de cliente
app.use('/customer/email', get_customer_by_email);  // Obtener cliente por email
app.use('/customer', update_customer);              // Actualizar cliente (PUT /customer/:id)
app.use('/customer/register', register_customer);   // Registrar cliente
app.use('/customer/delete', delete_customer);       // Eliminar cliente
app.use('/customer/profile', profile_customer);     // Perfil de cliente

// Rutas Proveedor
app.use('/proveedor/email', get_Proveedor_by_email);  // Obtener proveedor por email
app.use('/proveedor/register', register_Proveedor);   // Registrar proveedor
app.use('/proveedor/profile', profile_proveedor);     // Perfil de proveedor

// Rutas admin
app.use('/admin/register', register_Admin);      // Registrar admin
app.use('/admin/delete', delete_Admin);          // Eliminar admin
app.use('/admin/profile', profiles);             // Perfil de admin

// Rutas productos
app.use('/product/register', register_product);  // Registrar producto
app.use('/product/:id', update_Product);         // Actualizar producto
app.use('/product/delete', delete_product);      // Eliminar producto

// Ruta de prueba para verificar que CORS funcione
app.get('/api/test-cors', (req, res) => {
  res.json({ message: 'CORS está funcionando correctamente' });
});

// Puerto 
const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
  console.log(`Orígenes permitidos: ${allowedOrigins.join(', ')}`);
}).on("error", (error) => {
  throw new Error(error.message);
});