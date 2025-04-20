"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const VerifyToken_1 = __importDefault(require("../middleware/VerifyToken"));
const VerifyCustomerRole_1 = __importDefault(require("../middleware/VerifyCustomerRole"));
const payment_controller_1 = __importDefault(require("../controllers/Payment-controller/payment-controller"));
const router = express_1.default.Router();
// Crear una instancia del middleware con el rol 'customer'
const verifyCustomerRole = (0, VerifyCustomerRole_1.default)(['customer']);
// Ruta para crear una preferencia de pago
router.post('/create-preference', VerifyToken_1.default, verifyCustomerRole, payment_controller_1.default);
// Ruta para recibir notificaciones de webhook
router.post('/webhook', (req, res) => {
    // Aquí manejaremos las notificaciones de Mercado Pago
    console.log('Webhook recibido:', req.body);
    res.status(200).send('OK');
});
exports.default = router;
