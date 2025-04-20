import express from "express";
import bodyParser from 'body-parser';
import cors = require('cors'); // Importa cors
import dotenv from "dotenv";
import session from 'express-session';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import auth from './routes/auth';
import unifiedAuth from './routes/unified-auth'; // Ruta de autenticación unificada
import authProveedor from './routes/Proveedor-Routes/Auth_Proveedor'; // Ruta para autenticación de proveedores
import paymentRoutes from './routes/paymentRoutes'; // Importar rutas de pago

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
import get_all_products from "./routes/Product-Product/Get_Products";
import register_product from "./routes/Product-Product/Register_Product"
import update_Product from "./routes/Product-Product/Update_Product";
import delete_product from "./routes/Product-Product/Delete_Product";

// Ruta de inventario (NUEVA)
import create_inventory from "./routes/inventario-Routes/inventario_routes";

// Rutas de Chatbot
import chatbotRoutes from './routes/Chatbot-Routes/chatbotRoutes';

import googleAuthRoutes from './routes/google-auth-routes';

// Configurar dotenv al inicio
dotenv.config();

const app = express().use(bodyParser.json());

// Configuración de sesión
app.use(session({
    secret: process.env.SESSION_SECRET || 'tu_secreto_aqui',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 horas
    }
}));

// Inicializar Passport
app.use(passport.initialize());
app.use(passport.session());

// Configuración CORS mejorada para soportar múltiples orígenes
const allowedOrigins = [
  'https://huertomkt.netlify.app', // URL de producción
  'http://localhost:5173',         // Desarrollo local
  'https://localhost:10101',       // Desarrollo local con HTTPS
  'http://localhost:10101'         // Desarrollo local sin HTTPS
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
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));

// Middleware de logging para debugging
app.use((req, res, next) => {
  console.log('=== Nueva Petición ===');
  console.log('Fecha:', new Date().toISOString());
  console.log('Método:', req.method);
  console.log('URL:', req.url);
  console.log('Ruta original:', req.originalUrl);
  console.log('Headers:', JSON.stringify(req.headers, null, 2));
  console.log('Body:', JSON.stringify(req.body, null, 2));
  console.log('=== Fin de Logging ===');
  next();
});

// Rutas de autenticación
app.use('/login', unifiedAuth);                // Autenticación unificada
app.use('/login/admin', auth);                 // Autenticación específica de admin
app.use('/login/customer', auth_customer);     // Autenticación específica de cliente
app.use('/login/proveedor', authProveedor);    // Autenticación específica de proveedor

// Ruta de verificación de autenticación
app.get('/auth/check', (req, res) => {
  console.log('Headers recibidos:', JSON.stringify(req.headers, null, 2));
  const authHeader = req.headers.authorization;
  
  if (!authHeader) {
    console.log('No se encontró el header de autorización');
    return res.status(401).json({ 
      message: 'No autenticado', 
      reason: 'No se encontró el header de autorización',
      headers: req.headers
    });
  }
  
  if (!authHeader.startsWith('Bearer ')) {
    console.log('El header de autorización no comienza con Bearer');
    return res.status(401).json({ 
      message: 'No autenticado', 
      reason: 'Formato de token incorrecto',
      authHeader: authHeader
    });
  }

  const token = authHeader.split(' ')[1];
  console.log('Token recibido:', token);
  
  try {
    // Verificar el token usando la misma clave que se usa para generarlo
    const decoded = jwt.verify(token, process.env.KEY_TOKEN || 'default_secret_key');
    console.log('Token verificado correctamente:', decoded);
    return res.status(200).json({ 
      message: 'Autenticado',
      user: decoded
    });
  } catch (error) {
    console.error('Error al verificar el token:', error);
    return res.status(401).json({ 
      message: 'No autenticado', 
      reason: error instanceof Error ? error.message : 'Error desconocido al verificar el token',
      token: token
    });
  }
});

// Rutas de cliente
app.use('/customer/email', get_customer_by_email);  // Obtener cliente por email
app.use('/customer/register', register_customer);   // Registrar cliente
app.use('/customer/:id', update_customer);          // Actualizar cliente
app.use('/customer/delete', delete_customer);       // Eliminar cliente
app.use('/customer', profile_customer);             // Perfil de cliente

// Rutas de proveedor
app.use('/proveedor/email', get_Proveedor_by_email);  // Obtener proveedor por email
app.use('/proveedor/register', register_Proveedor);   // Registrar proveedor
app.use('/proveedor/profile', profile_proveedor);     // Perfil de proveedor

// Rutas de administrador
app.use('/admin/register', register_Admin);      // Registrar admin
app.use('/admin/delete', delete_Admin);          // Eliminar admin
app.use('/admin/profile', profiles);             // Perfil de admin

// Rutas de productos
app.use('/products', get_all_products);          // Consultar productos
app.use('/product/register', register_product);  // Registrar producto
app.use('/product/:id', update_Product);         // Actualizar producto
app.use('/product/delete', delete_product);      // Eliminar producto

// Rutas de inventario
app.use('/inventario/create', create_inventory); // Crear inventario

// Rutas de chatbot
app.use('/api/chatbot', chatbotRoutes);

// Rutas de pago
app.use('/api/payments', paymentRoutes);

// Ruta de prueba para verificar que CORS funcione
app.get('/api/test-cors', (req, res) => {
  res.json({ message: 'CORS está funcionando correctamente' });
});

// Rutas de autenticación con Google (movida al final)
app.use('/auth/google', googleAuthRoutes);

// Puerto 
const PORT = process.env.PORT || 10101;

app.listen(PORT, () => {
  console.log("Servidor ejecutándose en el puerto: ", PORT);
  console.log(`Orígenes permitidos: ${allowedOrigins.join(', ')}`);
}).on("error", (error) => {
  throw new Error(error.message);
});