"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const VerifyToken_1 = __importDefault(require("../../middleware/VerifyToken"));
const VerifyAdminRole_1 = __importDefault(require("../../middleware/VerifyAdminRole"));
const profile_admin_controller_1 = __importDefault(require("../../controllers/Admin-controller/profile-admin-controller"));
const get_admin_by_email_1 = require("../../controllers/Admin-controller/get-admin-by-email");
const router = express_1.default.Router();
router.get('/', VerifyToken_1.default, VerifyAdminRole_1.default, profile_admin_controller_1.default);
router.get('/email/:email', get_admin_by_email_1.getAdminByEmail);
exports.default = router;
