"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delete_proveedor_controller_1 = __importDefault(require("../../controllers/Proveedor-controller/delete-proveedor-controller"));
const DeleteValidatorProveedor_1 = __importDefault(require("../../middleware/Proveedor-Validator/DeleteValidatorProveedor"));
const VerifyToken_1 = __importDefault(require("../../middleware/VerifyToken"));
const VerifyProveedorRole_1 = __importDefault(require("../../middleware/VerifyProveedorRole"));
const router = express_1.default.Router();
router.delete('/', VerifyToken_1.default, VerifyProveedorRole_1.default, DeleteValidatorProveedor_1.default.validatorParams, DeleteValidatorProveedor_1.default.validator, delete_proveedor_controller_1.default);
exports.default = router;
