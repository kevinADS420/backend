import { Request, Response } from 'express';
import { ChatbotService } from '../../services/ChatbotService';
import ProductService from '../../services/ProductServices';
import InventoryService from '../../services/InventoryServices';

export class ChatbotController {
  private chatbotService: ChatbotService;

  constructor() {
    // Inicializa los servicios necesarios
    const productService = new ProductService();
    const inventoryService = new InventoryService();
    
    // Crea la instancia del chatbot con los servicios necesarios
    this.chatbotService = new ChatbotService(productService, inventoryService);
  }

  /**
   * Maneja los mensajes entrantes al chatbot
   * @param req Request de Express 
   * @param res Response de Express
   */
  async handleMessage(req: Request, res: Response): Promise<void> {
    try {
      const { message } = req.body;
      
      if (!message || typeof message !== 'string') {
        res.status(400).json({ 
          success: false, 
          error: 'Se requiere un mensaje válido' 
        });
        return;
      }
      
      const response = await this.chatbotService.processMessage(message);
      
      res.status(200).json({
        success: true,
        message: response
      });
    } catch (error) {
      console.error('Error al procesar mensaje del chatbot:', error);
      res.status(500).json({
        success: false,
        error: 'Error en el servidor al procesar el mensaje'
      });
    }
  }
}