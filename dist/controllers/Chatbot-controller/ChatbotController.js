"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotController = void 0;
const ChatbotService_1 = require("../../services/ChatbotService");
const ProductServices_1 = __importDefault(require("../../services/ProductServices"));
const InventoryServices_1 = __importDefault(require("../../services/InventoryServices"));
class ChatbotController {
    constructor() {
        // Inicializa los servicios necesarios
        const productService = new ProductServices_1.default();
        const inventoryService = new InventoryServices_1.default();
        // Crea la instancia del chatbot con los servicios necesarios
        this.chatbotService = new ChatbotService_1.ChatbotService(productService, inventoryService);
    }
    /**
     * Maneja los mensajes entrantes al chatbot
     * @param req Request de Express
     * @param res Response de Express
     */
    handleMessage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { message } = req.body;
                if (!message || typeof message !== 'string') {
                    res.status(400).json({
                        success: false,
                        error: 'Se requiere un mensaje válido'
                    });
                    return;
                }
                const response = yield this.chatbotService.processMessage(message);
                res.status(200).json({
                    success: true,
                    message: response
                });
            }
            catch (error) {
                console.error('Error al procesar mensaje del chatbot:', error);
                res.status(500).json({
                    success: false,
                    error: 'Error en el servidor al procesar el mensaje'
                });
            }
        });
    }
}
exports.ChatbotController = ChatbotController;
