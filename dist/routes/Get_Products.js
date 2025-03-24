"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_product_controller_1 = __importDefault(require("../controllers/get-product-controller"));
const GetValidatorProduct_1 = __importDefault(require("../middleware/GetValidatorProduct"));
const router = express_1.default.Router();
router.get('/', GetValidatorProduct_1.default.validatorParams, GetValidatorProduct_1.default.validator, get_product_controller_1.default);
exports.default = router;
