"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors = require("cors"); // Importa cors
const dotenv_1 = __importDefault(require("dotenv"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = __importDefault(require("./routes/auth"));
const unified_auth_1 = __importDefault(require("./routes/unified-auth")); // Ruta de autenticación unificada
const Auth_Proveedor_1 = __importDefault(require("./routes/Proveedor-Routes/Auth_Proveedor")); // Ruta para autenticación de proveedores
const paymentRoutes_1 = __importDefault(require("./routes/paymentRoutes")); // Importar rutas de pago
// Rutas de Administrador 
const Register_Admin_1 = __importDefault(require("./routes/Admin-Routes/Register_Admin"));
const Delete_Admin_1 = __importDefault(require("./routes/Admin-Routes/Delete_Admin"));
const profile_1 = __importDefault(require("./routes/profile"));
// Rutas de clientes 
const Get_Customer_By_Email_1 = __importDefault(require("./routes/Customer-Routes/Get_Customer_By_Email"));
const Register_Customer_1 = __importDefault(require("./routes/Customer-Routes/Register_Customer"));
const Update_Customer_1 = __importDefault(require("./routes/Customer-Routes/Update_Customer"));
const Delete_Customer_1 = __importDefault(require("./routes/Customer-Routes/Delete_Customer"));
const Auth_Customer_1 = __importDefault(require("./routes/Customer-Routes/Auth_Customer"));
const Profile_Customer_1 = __importDefault(require("./routes/Customer-Routes/Profile_Customer"));
// Rutas de Proveedor
const Register_Proveedor_1 = __importDefault(require("./routes/Proveedor-Routes/Register_Proveedor"));
const Get_Proveedor_By_Email_1 = __importDefault(require("./routes/Proveedor-Routes/Get_Proveedor_By_Email"));
const Profile_proveedor_1 = __importDefault(require("./routes/Proveedor-Routes/Profile_proveedor"));
// rutas de productos 
const Get_Products_1 = __importDefault(require("./routes/Product-Product/Get_Products"));
const Register_Product_1 = __importDefault(require("./routes/Product-Product/Register_Product"));
const Update_Product_1 = __importDefault(require("./routes/Product-Product/Update_Product"));
const Delete_Product_1 = __importDefault(require("./routes/Product-Product/Delete_Product"));
// Ruta de inventario (NUEVA)
const inventario_routes_1 = __importDefault(require("./routes/inventario-Routes/inventario_routes"));
// Rutas de Chatbot
const chatbotRoutes_1 = __importDefault(require("./routes/Chatbot-Routes/chatbotRoutes"));
const google_auth_routes_1 = __importDefault(require("./routes/google-auth-routes"));
// Configurar dotenv al inicio
dotenv_1.default.config();
const app = (0, express_1.default)().use(body_parser_1.default.json());
// Configuración de sesión
app.use((0, express_session_1.default)({
    secret: process.env.SESSION_SECRET || 'tu_secreto_aqui',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 // 24 horas
    }
}));
// Inicializar Passport
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Configuración CORS mejorada para soportar múltiples orígenes
const allowedOrigins = [
    'https://huertomkt.netlify.app', // URL de producción
    'http://localhost:5173', // Desarrollo local
    'https://localhost:10101', // Desarrollo local con HTTPS
    'http://localhost:10101' // Desarrollo local sin HTTPS
];
app.use(cors({
    origin: function (origin, callback) {
        // Permitir solicitudes sin origen (como apps móviles, postman o curl)
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
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
app.use('/login', unified_auth_1.default); // Autenticación unificada
app.use('/login/admin', auth_1.default); // Autenticación específica de admin
app.use('/login/customer', Auth_Customer_1.default); // Autenticación específica de cliente
app.use('/login/proveedor', Auth_Proveedor_1.default); // Autenticación específica de proveedor
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
        const decoded = jsonwebtoken_1.default.verify(token, process.env.KEY_TOKEN || 'default_secret_key');
        console.log('Token verificado correctamente:', decoded);
        return res.status(200).json({
            message: 'Autenticado',
            user: decoded
        });
    }
    catch (error) {
        console.error('Error al verificar el token:', error);
        return res.status(401).json({
            message: 'No autenticado',
            reason: error instanceof Error ? error.message : 'Error desconocido al verificar el token',
            token: token
        });
    }
});
// Rutas de cliente
app.use('/customer/email', Get_Customer_By_Email_1.default); // Obtener cliente por email
app.use('/customer/register', Register_Customer_1.default); // Registrar cliente
app.use('/customer/:id', Update_Customer_1.default); // Actualizar cliente
app.use('/customer/delete', Delete_Customer_1.default); // Eliminar cliente
app.use('/customer', Profile_Customer_1.default); // Perfil de cliente
// Rutas de proveedor
app.use('/proveedor/email', Get_Proveedor_By_Email_1.default); // Obtener proveedor por email
app.use('/proveedor/register', Register_Proveedor_1.default); // Registrar proveedor
app.use('/proveedor/profile', Profile_proveedor_1.default); // Perfil de proveedor
// Rutas de administrador
app.use('/admin/register', Register_Admin_1.default); // Registrar admin
app.use('/admin/delete', Delete_Admin_1.default); // Eliminar admin
app.use('/admin/profile', profile_1.default); // Perfil de admin
// Rutas de productos
app.use('/products', Get_Products_1.default); // Consultar productos
app.use('/product/register', Register_Product_1.default); // Registrar producto
app.use('/product/:id', Update_Product_1.default); // Actualizar producto
app.use('/product/delete', Delete_Product_1.default); // Eliminar producto
// Rutas de inventario
app.use('/inventario/create', inventario_routes_1.default); // Crear inventario
// Rutas de chatbot
app.use('/api/chatbot', chatbotRoutes_1.default);
// Rutas de pago
app.use('/api/payments', paymentRoutes_1.default);
// Ruta de prueba para verificar que CORS funcione
app.get('/api/test-cors', (req, res) => {
    res.json({ message: 'CORS está funcionando correctamente' });
});
// Rutas de autenticación con Google (movida al final)
app.use('/auth/google', google_auth_routes_1.default);
// Puerto 
const PORT = process.env.PORT || 10101;
app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
    console.log(`Orígenes permitidos: ${allowedOrigins.join(', ')}`);
}).on("error", (error) => {
    throw new Error(error.message);
});
