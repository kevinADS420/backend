"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_product_controller_1 = __importDefault(require("../../controllers/Product-controller/get-product-controller"));
const router = express_1.default.Router();
router.get('/', get_product_controller_1.default);
exports.default = router;
