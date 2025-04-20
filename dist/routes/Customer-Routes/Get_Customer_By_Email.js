"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_customer_by_email_controller_1 = __importDefault(require("../../controllers/Customer-controller/get-customer-by-email-controller"));
const router = express_1.default.Router();
// Ruta para obtener un cliente por su email
router.get('/:email', get_customer_by_email_controller_1.default);
router.post('/', get_customer_by_email_controller_1.default);
exports.default = router;
