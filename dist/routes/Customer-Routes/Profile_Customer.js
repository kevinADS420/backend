"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const VerifyToken_1 = __importDefault(require("../../middleware/VerifyToken"));
const VerifyCustomerRole_1 = __importDefault(require("../../middleware/VerifyCustomerRole"));
const profile_customer_controller_1 = __importDefault(require("../../controllers/Customer-controller/profile-customer-controller"));
const get_customer_by_email_1 = require("../../controllers/Customer-controller/get-customer-by-email");
const router = express_1.default.Router();
router.get('/', VerifyToken_1.default, VerifyCustomerRole_1.default, profile_customer_controller_1.default);
router.get('/email/:email', get_customer_by_email_1.getCustomerByEmail);
exports.default = router;
