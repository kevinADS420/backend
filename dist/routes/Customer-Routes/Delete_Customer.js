"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delete_customer_controller_1 = __importDefault(require("../../controllers/Customer-controller/delete-customer-controller"));
const DeleteValidatorCustomer_1 = __importDefault(require("../../middleware/Customer-Validator/DeleteValidatorCustomer"));
const VerifyToken_1 = __importDefault(require("../../middleware/VerifyToken"));
const VerifyCustomerRole_1 = __importDefault(require("../../middleware/VerifyCustomerRole"));
const router = express_1.default.Router();
router.delete('/', VerifyToken_1.default, VerifyCustomerRole_1.default, DeleteValidatorCustomer_1.default.validatorParams, DeleteValidatorCustomer_1.default.validator, delete_customer_controller_1.default);
exports.default = router;
