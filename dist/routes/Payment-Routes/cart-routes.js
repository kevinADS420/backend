"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const add_to_cart_controller_1 = require("../../controllers/Payment-controller/add-to-cart-controller");
const remove_from_cart_controller_1 = require("../../controllers/Payment-controller/remove-from-cart-controller");
const get_cart_controller_1 = require("../../controllers/Payment-controller/get-cart-controller");
const VerifyToken_1 = __importDefault(require("../../middleware/VerifyToken"));
const VerifyCustomerRole_1 = __importDefault(require("../../middleware/VerifyCustomerRole"));
const router = (0, express_1.Router)();
// Middleware para verificar token y rol de cliente
const verifyCustomer = [VerifyToken_1.default, (0, VerifyCustomerRole_1.default)(['customer'])];
// Rutas del carrito
router.post('/:id_cliente/add', verifyCustomer, add_to_cart_controller_1.addToCart);
router.delete('/:id_cliente/remove', verifyCustomer, remove_from_cart_controller_1.removeFromCart);
router.get('/:id_cliente', verifyCustomer, get_cart_controller_1.getCart);
exports.default = router;
