"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_Proveedor_controller_1 = __importDefault(require("../../controllers/Proveedor-controller/register-Proveedor-controller"));
const RegisterValidatorProveedor_1 = __importDefault(require("../../middleware/Proveedor-Validator/RegisterValidatorProveedor"));
const router = express_1.default.Router();
router.post('/', RegisterValidatorProveedor_1.default.validatorParams, RegisterValidatorProveedor_1.default.validator, register_Proveedor_controller_1.default);
exports.default = router;
