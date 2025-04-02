import { Router } from 'express';
import { ChatbotController } from '../../controllers/Chatbot-controller/ChatbotController';

const router = Router();
const chatbotController = new ChatbotController();

// Ruta para manejar mensajes del chatbot
router.post('/message', (req, res) => chatbotController.handleMessage(req, res));

export default router;