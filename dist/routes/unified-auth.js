"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const unified_auth_controller_1 = __importDefault(require("../controllers/unified-auth-controller"));
const router = express_1.default.Router();
router.post('/', unified_auth_controller_1.default);
exports.default = router;
