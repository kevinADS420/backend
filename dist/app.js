"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors = require("cors"); // Importa cors
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routes/auth"));
const unified_auth_1 = __importDefault(require("./routes/unified-auth")); // Ruta de autenticación unificada
const Auth_Proveedor_1 = __importDefault(require("./routes/Proveedor-Routes/Auth_Proveedor")); // Ruta para autenticación de proveedores
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
// Configurar dotenv al inicio
dotenv_1.default.config();
const app = (0, express_1.default)().use(body_parser_1.default.json());
// Configuración CORS mejorada para soportar múltiples orígenes
const allowedOrigins = [
    'https://huertomkt.netlify.app', // Sin la barra al final
    'http://localhost:5173', // Desarrollo local
    'https://localhost:10101' // Desarrollo local con HTTPS
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
            // Para producción, puedes cambiar a:
            // callback(new Error('No permitido por CORS'));
        }
    },
    credentials: true, // Habilitar credenciales (cookies, auth headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Incluir OPTIONS para preflight
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}));
// Middleware de logging para debugging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url} - Origin: ${req.headers.origin}`);
    next();
});
// Rutas de autenticación
app.use('/login', unified_auth_1.default); // Autenticación unificada
app.use('/login/admin', auth_1.default); // Autenticación específica de admin
app.use('/login/customer', Auth_Customer_1.default); // Autenticación específica de cliente
app.use('/login/proveedor', Auth_Proveedor_1.default); // Autenticación específica de proveedor
// Rutas de cliente
app.use('/customer/email', Get_Customer_By_Email_1.default); // Obtener cliente por email
app.use('/customer', Update_Customer_1.default); // Actualizar cliente (PUT /customer/:id)
app.use('/customer/register', Register_Customer_1.default); // Registrar cliente
app.use('/customer/delete', Delete_Customer_1.default); // Eliminar cliente
app.use('/customer/profile', Profile_Customer_1.default); // Perfil de cliente
// Rutas Proveedor
app.use('/proveedor/email', Get_Proveedor_By_Email_1.default); // Obtener proveedor por email
app.use('/proveedor/register', Register_Proveedor_1.default); // Registrar proveedor
app.use('/proveedor/profile', Profile_proveedor_1.default); // Perfil de proveedor
// Rutas admin
app.use('/admin/register', Register_Admin_1.default); // Registrar admin
app.use('/admin/delete', Delete_Admin_1.default); // Eliminar admin
app.use('/admin/profile', profile_1.default); // Perfil de admin
// Rutas productos
app.use('/products', Get_Products_1.default); // consultar productos 
app.use('/product/register', Register_Product_1.default); // Registrar producto
app.use('/product/:id', Update_Product_1.default); // Actualizar producto
app.use('/product/delete', Delete_Product_1.default); // Eliminar producto
// Ruta de inventario (NUEVA)
app.use('/inventario/create', inventario_routes_1.default);
// Rutas de Chatbot
app.use('/api/chatbot', chatbotRoutes_1.default);
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
