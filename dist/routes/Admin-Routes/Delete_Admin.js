"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const delete_admin_controller_1 = __importDefault(require("../../controllers/Admin-controller/delete-admin-controller"));
const DeleteValidatorAdmin_1 = __importDefault(require("../../middleware/Admin-Validator/DeleteValidatorAdmin"));
const router = express_1.default.Router();
router.delete('/', DeleteValidatorAdmin_1.default.validatorParams, DeleteValidatorAdmin_1.default.validator, delete_admin_controller_1.default);
exports.default = router;
