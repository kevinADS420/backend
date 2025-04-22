"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const VerifyToken_1 = __importDefault(require("../middleware/VerifyToken"));
const VerifyCustomerRole_1 = __importDefault(require("../middleware/VerifyCustomerRole"));
const payment_controller_1 = require("../controllers/Payment-controller/payment-controller");
const get_cart_controller_1 = require("../controllers/Payment-controller/get-cart-controller");
const add_to_cart_controller_1 = require("../controllers/Payment-controller/add-to-cart-controller");
const router = express_1.default.Router();
// Crear una instancia del middleware con el rol 'customer'
const verifyCustomerRole = (0, VerifyCustomerRole_1.default)(['customer']);
// Ruta para crear una preferencia de pago
router.post('/create-preference', VerifyToken_1.default, verifyCustomerRole, payment_controller_1.createPreference);
// Ruta para obtener el carrito de compras
router.get('/cart/:customerId', VerifyToken_1.default, verifyCustomerRole, get_cart_controller_1.getCart);
// Ruta para agregar productos al carrito
router.post('/cart/add', VerifyToken_1.default, verifyCustomerRole, add_to_cart_controller_1.addToCart);
// Ruta para recibir notificaciones de webhook
router.post('/webhook', payment_controller_1.handleWebhook);
exports.default = router;
