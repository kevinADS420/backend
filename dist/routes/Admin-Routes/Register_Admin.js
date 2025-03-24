"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_Admin_controller_1 = __importDefault(require("../../controllers/Admin-controller/register-Admin-controller"));
const RegisterValidatorAdmin_1 = __importDefault(require("../../middleware/Admin-Validator/RegisterValidatorAdmin"));
const router = express_1.default.Router();
router.post('/', RegisterValidatorAdmin_1.default.validatorParams, RegisterValidatorAdmin_1.default.validator, register_Admin_controller_1.default);
exports.default = router;
