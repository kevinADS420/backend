"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_Proveedor_controller_1 = __importDefault(require("../../controllers/Proveedor-controller/get-Proveedor-controller"));
const router = express_1.default.Router();
router.get('/:email', get_Proveedor_controller_1.default);
exports.default = router;
