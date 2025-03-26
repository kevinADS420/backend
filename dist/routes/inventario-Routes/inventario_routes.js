"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_inventario_1 = __importDefault(require("../../controllers/Inventario-controller/controller-inventario"));
const router = express_1.default.Router();
router.post('/create', controller_inventario_1.default);
exports.default = router;
