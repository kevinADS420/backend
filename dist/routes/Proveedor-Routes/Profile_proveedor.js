"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const VerifyToken_1 = __importDefault(require("../../middleware/VerifyToken"));
const VerifyProveedorRole_1 = __importDefault(require("../../middleware/VerifyProveedorRole"));
const profile_proveedor_controller_1 = __importDefault(require("../../controllers/Proveedor-controller/profile-proveedor-controller"));
const get_proveedor_by_email_1 = require("../../controllers/Proveedor-controller/get-proveedor-by-email");
const router = express_1.default.Router();
router.get('/', VerifyToken_1.default, VerifyProveedorRole_1.default, profile_proveedor_controller_1.default);
router.get('/email/:email', get_proveedor_by_email_1.getProveedorByEmail);
exports.default = router;
