import ProductService from './ProductServices';
import InventoryService from './InventoryServices';
import Inventory from '../Dto/Product-Dto/InventoryDto';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
}

interface Recipe {
  name: string;
  ingredients: string[];
  preparation: string;
  type: 'jugo' | 'ensalada' | 'plato principal' | 'postre' | 'otro';
  beneficios: string[];
}

interface HuggingFaceResponse {
  generated_text: string;
}

export class ChatbotService {
  private productService: ProductService;
  private inventoryService: InventoryService;
  private recipes: Recipe[] = [];
  private readonly HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/facebook/opt-350m';
  private readonly HUGGING_FACE_TOKEN = process.env.HUGGING_FACE_TOKEN;

  constructor(productService: ProductService, inventoryService: InventoryService) {
    this.productService = productService;
    this.inventoryService = inventoryService;
    this.initializeRecipes();
  }

  /**
   * Inicializa la base de datos de recetas
   */
  private initializeRecipes(): void {
    this.recipes = [
      {
        name: "Jugo Energético de Naranja y Zanahoria",
        ingredients: ["2 naranjas", "1 zanahoria grande", "1 trozo de jengibre (opcional)", "Hielo al gusto"],
        preparation: "Pela y parte las naranjas y la zanahoria. Licúa todos los ingredientes y sirve frío.",
        type: "jugo",
        beneficios: ["Alto en vitamina C", "Refuerza el sistema inmunológico", "Mejora la vista"]
      },
      {
        name: "Ensalada Campesina",
        ingredients: ["Lechuga fresca", "Tomate", "Pepino", "Cebolla roja", "Aguacate", "Aceite de oliva", "Limón", "Sal y pimienta"],
        preparation: "Lava y corta todas las verduras. Mezcla en un recipiente y aliña con aceite, limón, sal y pimienta al gusto.",
        type: "ensalada",
        beneficios: ["Rica en fibra", "Antioxidantes naturales", "Baja en calorías"]
      },
      {
        name: "Sopa de Verduras Campesina",
        ingredients: ["Papa", "Zanahoria", "Calabacín", "Cebolla", "Ajo", "Cilantro", "Agua o caldo de verduras"],
        preparation: "Sofríe la cebolla y el ajo. Agrega el resto de verduras cortadas y cubre con agua. Cocina a fuego medio hasta que estén tiernas. Añade cilantro al final.",
        type: "plato principal",
        beneficios: ["Ideal para días fríos", "Aprovecha múltiples verduras de temporada", "Nutritiva y reconfortante"]
      },
      {
        name: "Postre de Frutas Tropicales",
        ingredients: ["Papaya", "Piña", "Mango", "Yogurt natural", "Miel", "Granola"],
        preparation: "Corta las frutas en cubos pequeños. Sirve en copas alternando capas de fruta, yogurt y granola. Decora con miel.",
        type: "postre",
        beneficios: ["Digestivo natural", "Rico en fibra", "Alternativa saludable a postres azucarados"]
      }
      // Puedes agregar más recetas según sea necesario
    ];
  }

  /**
   * Obtiene productos en descuento
   * @returns Lista de productos en descuento con sus detalles
   */
  async getDiscountedProducts() {
    try {
      const allProducts = await this.productService.getAllProducts();
      
      const discountedProducts = allProducts.filter((product: Product) => 
        product.discount && product.discount > 0 && 
        this.isProductInSeason(product.id.toString())
      );
      
      return discountedProducts.map((product: Product) => ({
        name: product.name,
        discount: `${product.discount}%`,
        originalPrice: product.price,
        discountedPrice: product.price * (1 - (product.discount || 0)/100),
        availability: this.getAvailabilityText(product.id.toString())
      }));
    } catch (error) {
      console.error('Error al obtener productos en descuento:', error);
      return [];
    }
  }

  /**
   * Verifica si un producto está en temporada
   * @param productId ID del producto
   * @returns true si está en temporada
   */
  private async isProductInSeason(productId: string): Promise<boolean> {
    try {
      const inventory = await this.inventoryService.getProductInventory(productId);
      return inventory?.inSeason === true;
    } catch {
      return false;
    }
  }

  /**
   * Obtiene texto descriptivo sobre la disponibilidad del producto
   * @param productId ID del producto
   * @returns Texto descriptivo
   */
  private async getAvailabilityText(productId: string): Promise<string> {
    try {
      const inventory = await this.inventoryService.getProductInventory(productId);
      if (!inventory) return "No disponible actualmente";
      
      if (inventory.cantidad > 20) return "Alta disponibilidad";
      if (inventory.cantidad > 5) return "Disponibilidad media";
      return "Pocas unidades disponibles";
    } catch {
      return "No disponible actualmente";
    }
  }

  /**
   * Busca recetas que contengan los ingredientes especificados
   * @param ingredients Lista de ingredientes disponibles
   * @param type Tipo de receta (opcional)
   * @returns Lista de recetas que coinciden
   */
  getRecipesByIngredients(ingredients: string[], type?: 'jugo' | 'ensalada' | 'plato principal' | 'postre' | 'otro'): Recipe[] {
    // Normaliza los ingredientes (minúsculas, sin tildes)
    const normalizedIngredients = ingredients.map(ing => 
      this.normalizeText(ing)
    );
    
    // Filtra recetas que contengan al menos uno de los ingredientes
    let matchingRecipes = this.recipes.filter(recipe => {
      const recipeIngredients = recipe.ingredients.map(ing => this.normalizeText(ing));
      
      return normalizedIngredients.some(ing => 
        recipeIngredients.some(recipeIng => recipeIng.includes(ing))
      );
    });
    
    // Si se especifica un tipo, filtra por tipo
    if (type) {
      matchingRecipes = matchingRecipes.filter(recipe => recipe.type === type);
    }
    
    return matchingRecipes;
  }

  /**
   * Normaliza un texto para búsquedas
   * @param text Texto a normalizar
   * @returns Texto normalizado
   */
  private normalizeText(text: string): string {
    return text.toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  /**
   * Procesa un mensaje del usuario y genera una respuesta
   * @param message Mensaje del usuario
   * @returns Respuesta del chatbot
   */
  async processMessage(message: string): Promise<string> {
    const normalizedMessage = message.toLowerCase();
    
    // Verifica si el mensaje es sobre descuentos
    if (normalizedMessage.includes('descuento') || 
        normalizedMessage.includes('oferta') || 
        normalizedMessage.includes('promocion') ||
        normalizedMessage.includes('promoción') ||
        normalizedMessage.includes('rebaja')) {
      
      return this.formatDiscountResponse(await this.getDiscountedProducts());
    }
    
    // Verifica si el mensaje es sobre recetas
    if (normalizedMessage.includes('receta') || 
        normalizedMessage.includes('comida') || 
        normalizedMessage.includes('preparar') ||
        normalizedMessage.includes('cocinar')) {
      
      // Extrae posibles ingredientes del mensaje
      const ingredients = this.extractIngredientsFromMessage(normalizedMessage);
      
      // Determina el tipo de receta solicitada
      let recipeType: 'jugo' | 'ensalada' | 'plato principal' | 'postre' | 'otro' | undefined;
      
      if (normalizedMessage.includes('jugo') || normalizedMessage.includes('bebida') || normalizedMessage.includes('batido')) {
        recipeType = 'jugo';
      } else if (normalizedMessage.includes('ensalada')) {
        recipeType = 'ensalada';
      } else if (normalizedMessage.includes('plato') || normalizedMessage.includes('almuerzo') || normalizedMessage.includes('cena')) {
        recipeType = 'plato principal';
      } else if (normalizedMessage.includes('postre') || normalizedMessage.includes('dulce')) {
        recipeType = 'postre';
      }
      
      const recipes = this.getRecipesByIngredients(ingredients, recipeType);
      return this.formatRecipeResponse(recipes, ingredients);
    }

    // Si el mensaje no está relacionado con Huerto Market, usar Hugging Face
    if (!this.isHuertoMarketRelated(normalizedMessage)) {
      return await this.getGeneralResponse(message);
    }
    
    // Si no es ninguna de las anteriores, respuesta general
    return `¡Hola! Soy el asistente de Huerto Market. Puedo ayudarte con información sobre productos en descuento y recetas para preparar con nuestros productos frescos. ¿En qué puedo ayudarte hoy?`;
  }

  /**
   * Verifica si el mensaje está relacionado con Huerto Market
   * @param message Mensaje normalizado
   * @returns true si está relacionado
   */
  private isHuertoMarketRelated(message: string): boolean {
    const huertoMarketKeywords = [
      'huerto', 'market', 'producto', 'fruta', 'verdura', 'comida', 
      'receta', 'cocinar', 'preparar', 'descuento', 'oferta', 'precio'
    ];
    
    return huertoMarketKeywords.some(keyword => message.includes(keyword));
  }

  /**
   * Obtiene una respuesta general usando Hugging Face
   * @param message Mensaje del usuario
   * @returns Respuesta generada
   */
  private async getGeneralResponse(message: string): Promise<string> {
    try {
      if (!this.HUGGING_FACE_TOKEN) {
        return "Lo siento, no puedo responder preguntas generales en este momento. Por favor, hazme preguntas sobre nuestros productos y recetas.";
      }

      const response = await axios.post<HuggingFaceResponse[]>(
        this.HUGGING_FACE_API_URL,
        {
          inputs: message,
          parameters: {
            max_length: 100,
            temperature: 0.7,
            top_p: 0.9
          }
        },
        {
          headers: {
            'Authorization': `Bearer ${this.HUGGING_FACE_TOKEN}`,
            'Content-Type': 'application/json'
          }
        }
      );

      return response.data[0].generated_text;
    } catch (error) {
      console.error('Error al obtener respuesta general:', error);
      return "Lo siento, no puedo responder preguntas generales en este momento. Por favor, hazme preguntas sobre nuestros productos y recetas.";
    }
  }

  /**
   * Extrae posibles ingredientes de un mensaje
   * @param message Mensaje del usuario
   * @returns Lista de ingredientes
   */
  private extractIngredientsFromMessage(message: string): string[] {
    // Lista de ingredientes comunes para detectar en mensajes
    const commonIngredients = [
      'manzana', 'naranja', 'plátano', 'banano', 'fresa', 'mora', 'piña', 'mango', 'papaya', 
      'sandía', 'melón', 'limón', 'tomate', 'cebolla', 'ajo', 'zanahoria', 'papa', 'lechuga', 
      'espinaca', 'pepino', 'calabacín', 'berenjena', 'pimentón', 'aguacate', 'yuca', 'maíz'
    ];
    
    const foundIngredients = commonIngredients.filter(ingredient => 
      message.includes(ingredient)
    );
    
    // Si no se encontraron ingredientes específicos, devuelve algunos genéricos
    if (foundIngredients.length === 0) {
      if (message.includes('fruta')) {
        return ['manzana', 'naranja', 'plátano', 'fresa'];
      } else if (message.includes('verdura')) {
        return ['tomate', 'cebolla', 'lechuga', 'zanahoria'];
      } else {
        return ['tomate', 'cebolla', 'naranja', 'manzana']; // ingredientes por defecto
      }
    }
    
    return foundIngredients;
  }

  /**
   * Formatea la respuesta de productos en descuento
   * @param products Lista de productos en descuento
   * @returns Mensaje formateado
   */
  private formatDiscountResponse(products: any[]): string {
    if (products.length === 0) {
      return `Lo siento, no hay productos en descuento en este momento. Te invitamos a visitar nuestro catálogo completo para conocer todos nuestros productos frescos.`;
    }
    
    let response = `¡Tenemos estas frutas y verduras en descuento hoy!:\n\n`;
    
    products.forEach(product => {
      response += `- ${product.name}: ${product.discount} de descuento (de $${product.originalPrice} a $${product.discountedPrice.toFixed(2)}). ${product.availability}.\n`;
    });
    
    response += `\n¿Te gustaría conocer alguna receta con estos productos? Puedo recomendarte opciones saludables y deliciosas.`;
    
    return response;
  }

  /**
   * Formatea la respuesta de recetas
   * @param recipes Lista de recetas
   * @param ingredients Ingredientes mencionados
   * @returns Mensaje formateado
   */
  private formatRecipeResponse(recipes: Recipe[], ingredients: string[]): string {
    if (recipes.length === 0) {
      return `No encontré recetas específicas con ${ingredients.join(', ')}. ¿Te gustaría probar con otros ingredientes o explorar nuestro catálogo de productos frescos?`;
    }
    
    // Selecciona hasta 2 recetas para no sobrecargar la respuesta
    const selectedRecipes = recipes.slice(0, 2);
    
    let response = `¡Aquí tienes ${selectedRecipes.length > 1 ? 'algunas' : 'una'} receta${selectedRecipes.length > 1 ? 's' : ''} que puedes preparar con ${ingredients.join(', ')}!\n\n`;
    
    selectedRecipes.forEach(recipe => {
      response += `## ${recipe.name}\n\n`;
      response += `**Ingredientes:**\n`;
      recipe.ingredients.forEach(ing => {
        response += `- ${ing}\n`;
      });
      
      response += `\n**Preparación:**\n${recipe.preparation}\n\n`;
      
      response += `**Beneficios:**\n`;
      recipe.beneficios.forEach(beneficio => {
        response += `- ${beneficio}\n`;
      });
      
      response += `\n-----------\n\n`;
    });
    
    response += `Todos los ingredientes los puedes encontrar frescos en Huerto Market. ¿Te gustaría otra receta o información sobre algún producto específico?`;
    
    return response;
  }
}