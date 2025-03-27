"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_product_controller_1 = __importDefault(require("../../controllers/Product-controller/register-product-controller"));
const RegisterValidatorProduct_1 = __importDefault(require("../../middleware/Product-Validator/RegisterValidatorProduct"));
const upload_1 = __importDefault(require("../../middleware/upload"));
const router = express_1.default.Router();
router.post('/', upload_1.default.single("imagen"), RegisterValidatorProduct_1.default.validatorParams, RegisterValidatorProduct_1.default.validator, register_product_controller_1.default);
exports.default = router;
