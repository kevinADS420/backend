"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const GoogleAuthService_1 = require("../services/GoogleAuthService");
const router = express_1.default.Router();
const googleAuthService = new GoogleAuthService_1.GoogleAuthService();
// Ruta para iniciar el proceso de autenticación con Google
router.get('/auth/google/login', googleAuthService.authenticateGoogle());
// Ruta de callback después de la autenticación exitosa
router.get('/auth/google/callback', googleAuthService.handleGoogleCallback());
// Ruta para verificar el estado de autenticación
router.get('/auth/check', googleAuthService.checkAuth);
// Ruta para cerrar sesión
router.get('/logout', googleAuthService.logout);
// Ruta protegida de ejemplo
router.get('/dashboard', googleAuthService.isAuthenticated, (req, res) => {
    res.json({
        message: 'Bienvenido al dashboard',
        user: req.user
    });
});
exports.default = router;
