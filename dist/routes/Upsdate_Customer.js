"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const update_customer_controller_1 = __importDefault(require("../controllers/update-customer-controller"));
const updateValidatorCustomer_1 = __importDefault(require("../middleware/updateValidatorCustomer"));
const router = express_1.default.Router();
router.put('/', updateValidatorCustomer_1.default.validatorParams, updateValidatorCustomer_1.default.validator, update_customer_controller_1.default);
exports.default = router;
