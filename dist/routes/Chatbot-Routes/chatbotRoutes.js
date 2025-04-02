"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ChatbotController_1 = require("../../controllers/Chatbot-controller/ChatbotController");
const router = (0, express_1.Router)();
const chatbotController = new ChatbotController_1.ChatbotController();
// Ruta para manejar mensajes del chatbot
router.post('/message', (req, res) => chatbotController.handleMessage(req, res));
exports.default = router;
