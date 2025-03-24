"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const update_product_controller_1 = __importDefault(require("../../controllers/Product-controller/update-product-controller"));
const updateValidatorProduct_1 = __importDefault(require("../../middleware/Product-Validator/updateValidatorProduct"));
const router = express_1.default.Router();
router.patch('/', updateValidatorProduct_1.default.validatorParams, updateValidatorProduct_1.default.validator, update_product_controller_1.default);
exports.default = router;
