import express from 'express';
import { GoogleAuthService } from '../services/GoogleAuthService';

const router = express.Router();
const googleAuthService = new GoogleAuthService();

// Ruta para iniciar el proceso de autenticación con Google
router.get('/auth/google/login', googleAuthService.authenticateGoogle());

// Ruta de callback después de la autenticación exitosa
router.get('/auth/google/callback', googleAuthService.handleGoogleCallback());

// Ruta para verificar el estado de autenticación
router.get('/auth/check', googleAuthService.checkAuth);

// Ruta para obtener el perfil del usuario autenticado
router.get('/auth/profile', googleAuthService.isAuthenticated, (req, res) => {
    res.json(req.user);
});

// Ruta para cerrar sesión
router.get('/logout', googleAuthService.logout);

// Ruta protegida de ejemplo
router.get('/dashboard', googleAuthService.isAuthenticated, (req, res) => {
    res.json({
        message: 'Bienvenido al dashboard',
        user: req.user
    });
});

// Ruta para verificar si el usuario está autenticado (para el frontend)
router.get('/auth/status', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({
            isAuthenticated: true,
            user: req.user
        });
    } else {
        res.json({
            isAuthenticated: false
        });
    }
});

export default router; 