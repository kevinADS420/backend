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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatbotService = void 0;
const generative_ai_1 = require("@google/generative-ai");
class ChatbotService {
    constructor(productService, inventoryService) {
        this.recipes = [];
        this.GEMINI_API_KEY = process.env.GEMINI_API_KEY;
        this.productService = productService;
        this.inventoryService = inventoryService;
        this.initializeRecipes();
        console.log('GEMINI_API_KEY:', this.GEMINI_API_KEY);
        if (this.GEMINI_API_KEY) {
            this.genAI = new generative_ai_1.GoogleGenerativeAI(this.GEMINI_API_KEY);
            console.log('Gemini AI initialized successfully');
        }
        else {
            console.log('Failed to initialize Gemini AI - No API key found');
        }
    }
    /**
     * Inicializa la base de datos de recetas
     */
    initializeRecipes() {
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
    getDiscountedProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allProducts = yield this.productService.getAllProducts();
                const discountedProducts = allProducts.filter((product) => product.discount && product.discount > 0 &&
                    this.isProductInSeason(product.id.toString()));
                return discountedProducts.map((product) => ({
                    name: product.name,
                    discount: `${product.discount}%`,
                    originalPrice: product.price,
                    discountedPrice: product.price * (1 - (product.discount || 0) / 100),
                    availability: this.getAvailabilityText(product.id.toString())
                }));
            }
            catch (error) {
                console.error('Error al obtener productos en descuento:', error);
                return [];
            }
        });
    }
    /**
     * Verifica si un producto está en temporada
     * @param productId ID del producto
     * @returns true si está en temporada
     */
    isProductInSeason(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inventory = yield this.inventoryService.getProductInventory(productId);
                return (inventory === null || inventory === void 0 ? void 0 : inventory.inSeason) === true;
            }
            catch (_a) {
                return false;
            }
        });
    }
    /**
     * Obtiene texto descriptivo sobre la disponibilidad del producto
     * @param productId ID del producto
     * @returns Texto descriptivo
     */
    getAvailabilityText(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const inventory = yield this.inventoryService.getProductInventory(productId);
                if (!inventory)
                    return "No disponible actualmente";
                if (inventory.cantidad > 20)
                    return "Alta disponibilidad";
                if (inventory.cantidad > 5)
                    return "Disponibilidad media";
                return "Pocas unidades disponibles";
            }
            catch (_a) {
                return "No disponible actualmente";
            }
        });
    }
    /**
     * Busca recetas que contengan los ingredientes especificados
     * @param ingredients Lista de ingredientes disponibles
     * @param type Tipo de receta (opcional)
     * @returns Lista de recetas que coinciden
     */
    getRecipesByIngredients(ingredients, type) {
        // Normaliza los ingredientes (minúsculas, sin tildes)
        const normalizedIngredients = ingredients.map(ing => this.normalizeText(ing));
        // Filtra recetas que contengan al menos uno de los ingredientes
        let matchingRecipes = this.recipes.filter(recipe => {
            const recipeIngredients = recipe.ingredients.map(ing => this.normalizeText(ing));
            return normalizedIngredients.some(ing => recipeIngredients.some(recipeIng => recipeIng.includes(ing)));
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
    normalizeText(text) {
        return text.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }
    /**
     * Procesa un mensaje del usuario y genera una respuesta
     * @param message Mensaje del usuario
     * @returns Respuesta del chatbot
     */
    processMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const normalizedMessage = message.toLowerCase();
            // Verifica si el mensaje es sobre descuentos
            if (normalizedMessage.includes('descuento') ||
                normalizedMessage.includes('oferta') ||
                normalizedMessage.includes('promocion') ||
                normalizedMessage.includes('promoción') ||
                normalizedMessage.includes('rebaja')) {
                return this.formatDiscountResponse(yield this.getDiscountedProducts());
            }
            // Verifica si el mensaje es sobre recetas
            if (normalizedMessage.includes('receta') ||
                normalizedMessage.includes('comida') ||
                normalizedMessage.includes('preparar') ||
                normalizedMessage.includes('cocinar')) {
                // Extrae posibles ingredientes del mensaje
                const ingredients = this.extractIngredientsFromMessage(normalizedMessage);
                // Determina el tipo de receta solicitada
                let recipeType;
                if (normalizedMessage.includes('jugo') || normalizedMessage.includes('bebida') || normalizedMessage.includes('batido')) {
                    recipeType = 'jugo';
                }
                else if (normalizedMessage.includes('ensalada')) {
                    recipeType = 'ensalada';
                }
                else if (normalizedMessage.includes('plato') || normalizedMessage.includes('almuerzo') || normalizedMessage.includes('cena')) {
                    recipeType = 'plato principal';
                }
                else if (normalizedMessage.includes('postre') || normalizedMessage.includes('dulce')) {
                    recipeType = 'postre';
                }
                const recipes = this.getRecipesByIngredients(ingredients, recipeType);
                return this.formatRecipeResponse(recipes, ingredients);
            }
            // Si el mensaje no está relacionado con Huerto Market, usar Gemini
            if (!this.isHuertoMarketRelated(normalizedMessage)) {
                return yield this.getGeneralResponse(message);
            }
            // Si no es ninguna de las anteriores, respuesta general
            return `¡Hola! Soy el asistente de Huerto Market. Puedo ayudarte con información sobre productos en descuento y recetas para preparar con nuestros productos frescos. ¿En qué puedo ayudarte hoy?`;
        });
    }
    /**
     * Verifica si el mensaje está relacionado con Huerto Market
     * @param message Mensaje normalizado
     * @returns true si está relacionado
     */
    isHuertoMarketRelated(message) {
        const huertoMarketKeywords = [
            'huerto', 'market', 'producto', 'fruta', 'verdura', 'comida',
            'receta', 'cocinar', 'preparar', 'descuento', 'oferta', 'precio'
        ];
        return huertoMarketKeywords.some(keyword => message.includes(keyword));
    }
    /**
     * Obtiene una respuesta general usando Gemini
     * @param message Mensaje del usuario
     * @returns Respuesta generada
     */
    getGeneralResponse(message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.GEMINI_API_KEY) {
                    console.error('No Gemini API key found');
                    return "Lo siento, no puedo responder preguntas generales en este momento. Por favor, hazme preguntas sobre nuestros productos y recetas.";
                }
                if (!this.genAI) {
                    console.error('Gemini AI not initialized');
                    return "Lo siento, no puedo responder preguntas generales en este momento. Por favor, hazme preguntas sobre nuestros productos y recetas.";
                }
                const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
                const result = yield model.generateContent(message);
                const response = yield result.response;
                return response.text();
            }
            catch (error) {
                console.error('Error al obtener respuesta general:', error);
                return "Lo siento, no puedo responder preguntas generales en este momento. Por favor, hazme preguntas sobre nuestros productos y recetas.";
            }
        });
    }
    /**
     * Extrae posibles ingredientes de un mensaje
     * @param message Mensaje del usuario
     * @returns Lista de ingredientes
     */
    extractIngredientsFromMessage(message) {
        // Lista de ingredientes comunes para detectar en mensajes
        const commonIngredients = [
            'manzana', 'naranja', 'plátano', 'banano', 'fresa', 'mora', 'piña', 'mango', 'papaya',
            'sandía', 'melón', 'limón', 'tomate', 'cebolla', 'ajo', 'zanahoria', 'papa', 'lechuga',
            'espinaca', 'pepino', 'calabacín', 'berenjena', 'pimentón', 'aguacate', 'yuca', 'maíz'
        ];
        const foundIngredients = commonIngredients.filter(ingredient => message.includes(ingredient));
        // Si no se encontraron ingredientes específicos, devuelve algunos genéricos
        if (foundIngredients.length === 0) {
            if (message.includes('fruta')) {
                return ['manzana', 'naranja', 'plátano', 'fresa'];
            }
            else if (message.includes('verdura')) {
                return ['tomate', 'cebolla', 'lechuga', 'zanahoria'];
            }
            else {
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
    formatDiscountResponse(products) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (products.length === 0) {
                return `Lo siento, no hay productos en descuento en este momento. Te invitamos a visitar nuestro catálogo completo para conocer todos nuestros productos frescos.`;
            }
            try {
                const model = (_a = this.genAI) === null || _a === void 0 ? void 0 : _a.getGenerativeModel({ model: "gemini-2.0-flash" });
                if (!model) {
                    return this.formatBasicDiscountResponse(products);
                }
                const prompt = `Genera un mensaje atractivo y persuasivo para promocionar los siguientes productos en descuento: ${JSON.stringify(products)}. 
      El mensaje debe ser amigable, destacar los beneficios de cada producto y animar al cliente a comprar. 
      Incluye los precios originales y con descuento.`;
                const result = yield model.generateContent(prompt);
                const response = yield result.response;
                return response.text();
            }
            catch (error) {
                console.error('Error al generar respuesta con IA:', error);
                return this.formatBasicDiscountResponse(products);
            }
        });
    }
    formatBasicDiscountResponse(products) {
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
    formatRecipeResponse(recipes, ingredients) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            if (recipes.length === 0) {
                return `No encontré recetas específicas con ${ingredients.join(', ')}. ¿Te gustaría probar con otros ingredientes o explorar nuestro catálogo de productos frescos?`;
            }
            try {
                const model = (_a = this.genAI) === null || _a === void 0 ? void 0 : _a.getGenerativeModel({ model: "gemini-2.0-flash" });
                if (!model) {
                    return this.formatBasicRecipeResponse(recipes, ingredients);
                }
                const prompt = `Genera una respuesta atractiva para las siguientes recetas que usan estos ingredientes: ${ingredients.join(', ')}. 
      Las recetas son: ${JSON.stringify(recipes)}. 
      La respuesta debe ser entusiasta, incluir los beneficios de cada receta y animar al cliente a prepararlas.`;
                const result = yield model.generateContent(prompt);
                const response = yield result.response;
                return response.text();
            }
            catch (error) {
                console.error('Error al generar respuesta con IA:', error);
                return this.formatBasicRecipeResponse(recipes, ingredients);
            }
        });
    }
    formatBasicRecipeResponse(recipes, ingredients) {
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
exports.ChatbotService = ChatbotService;
