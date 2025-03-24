"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_customer_controller_1 = __importDefault(require("../../controllers/Customer-controller/register-customer-controller"));
const RegisterValidatorCustomer_1 = __importDefault(require("../../middleware/Customert-Validator/RegisterValidatorCustomer"));
const router = express_1.default.Router();
router.post('/', RegisterValidatorCustomer_1.default.validatorParams, RegisterValidatorCustomer_1.default.validator, register_customer_controller_1.default);
exports.default = router;
