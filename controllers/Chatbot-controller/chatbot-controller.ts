import { Request, Response } from 'express';
import pool from '../../config/database';
import * as chatbotJson from '../../chatbot.json';
const chatbotData = chatbotJson as unknown as ChatbotData;

// Interfaz para el tipo de datos del JSON
interface Producto {
    nombre: string;
    precio_kg: number;
    stock: boolean;
    caracteristicas: string;
    usos: string;
}

interface Valor {
    nombre: string;
    descripcion: string;
}

interface Promo {
    nombre: string;
    descripcion: string;
    productos: string[];
    dias: string;
    validez: string;
    restricciones: string;
}

interface ChatbotData {
    nombre: string;
    descripcion: string;
    principales_objetivos: string[];
    vision: string;
    mision: {
        descripcion: string;
        puntos: string[];
    };
    valores: Valor[];
    beneficios: string[];
    origen_productos: string;
    productos: Producto[];
    promociones: Promo[];
}

// Base de conocimiento del chatbot
const knowledgeBase = {
    greetings: [
        'hola', 'buenos días', 'buenas tardes', 'buenas noches', 
        'hey', 'saludos', 'qué tal', 'cómo estás'
    ],
    farewells: [
        'adiós', 'hasta luego', 'chao', 'nos vemos', 
        'que tengas un buen día', 'hasta pronto'
    ],
    products: chatbotData.productos.map(producto => ({
        nombre: producto.nombre,
        precio: producto.precio_kg,
        stock: producto.stock,
        caracteristicas: producto.caracteristicas,
        usos: producto.usos
    })),
    healthyTips: [
        'Consume al menos 5 porciones de frutas y verduras al día',
        'Prefiere productos orgánicos para reducir la exposición a pesticidas',
        'Incluye granos integrales en tu dieta diaria',
        'Bebe al menos 8 vasos de agua al día',
        'Evita alimentos procesados y altos en azúcar',
        'Come más fibra para mejorar tu digestión',
        'Incluye proteínas vegetales en tu dieta',
        'Consume alimentos ricos en antioxidantes',
        'Planifica tus comidas con anticipación',
        'Lee las etiquetas nutricionales de los productos'
    ],
    delivery: [
        'Realizamos entregas a domicilio en toda la ciudad',
        'El tiempo de entrega es de 30 a 60 minutos',
        'Envío gratis en compras mayores a $50',
        'Puedes programar tus entregas con anticipación',
        'Ofrecemos servicio de entrega express',
        'Todas nuestras entregas son en vehículos refrigerados',
        'Puedes rastrear tu pedido en tiempo real',
        'Aceptamos pagos en efectivo y con tarjeta'
    ],
    payment: [
        'Aceptamos pagos en efectivo',
        'Pagos con tarjeta de crédito y débito',
        'Transferencias bancarias',
        'Pagos móviles',
        'Mercado Pago',
        'Pagos en línea seguros',
        'Facturación disponible',
        'Pagos a plazos en compras mayores'
    ]
};

// Función para procesar el mensaje y generar una respuesta
const processMessage = async (message: string): Promise<string> => {
    const lowerMessage = message.toLowerCase();

    // Verificar saludos
    if (knowledgeBase.greetings.some(greeting => lowerMessage.includes(greeting))) {
        return `¡Hola! Soy el asistente virtual de ${chatbotData.nombre}. ${chatbotData.descripcion}`;
    }

    // Verificar despedidas
    if (knowledgeBase.farewells.some(farewell => lowerMessage.includes(farewell))) {
        return '¡Hasta luego! Que tengas un excelente día.';
    }

    // Verificar productos
    if (lowerMessage.includes('producto') || lowerMessage.includes('productos')) {
        let response = `Tenemos una gran variedad de productos cultivados en ${chatbotData.origen_productos}:\n\n`;
        knowledgeBase.products.forEach(producto => {
            response += `🍎 ${producto.nombre} - $${producto.precio}/kg\n`;
            response += `   Características: ${producto.caracteristicas}\n`;
            response += `   Usos: ${producto.usos}\n\n`;
        });
        return response;
    }

    // Verificar promociones
    if (lowerMessage.includes('promoción') || lowerMessage.includes('promociones') || 
        lowerMessage.includes('oferta') || lowerMessage.includes('ofertas') ||
        lowerMessage.includes('descuento') || lowerMessage.includes('descuentos')) {
        if (chatbotData.promociones && chatbotData.promociones.length > 0) {
            let response = '¡Tenemos estas promociones especiales!\n\n';
            chatbotData.promociones.forEach(promo => {
                response += `✨ ${promo.nombre}\n`;
                response += `   ${promo.descripcion}\n`;
                response += `   Productos: ${promo.productos.join(', ')}\n`;
                response += `   Válido: ${promo.dias}\n\n`;
            });
            return response;
        } else {
            return 'Lo siento, no hay productos en descuento en este momento. Te invitamos a visitar nuestro catálogo completo para conocer todos nuestros productos frescos.';
        }
    }

    // Verificar consejos saludables
    if (lowerMessage.includes('saludable') || lowerMessage.includes('salud') || 
        lowerMessage.includes('consejo') || lowerMessage.includes('consejos') ||
        lowerMessage.includes('nutrición') || lowerMessage.includes('dieta')) {
        let response = 'Aquí tienes algunos consejos saludables:\n\n';
        knowledgeBase.healthyTips.forEach(tip => {
            response += `💪 ${tip}\n`;
        });
        return response;
    }

    // Verificar entrega
    if (lowerMessage.includes('entrega') || lowerMessage.includes('domicilio') || 
        lowerMessage.includes('enviar') || lowerMessage.includes('envío')) {
        let response = 'Información sobre nuestras entregas:\n\n';
        knowledgeBase.delivery.forEach(info => {
            response += `🚚 ${info}\n`;
        });
        return response;
    }

    // Verificar pagos
    if (lowerMessage.includes('pago') || lowerMessage.includes('pagos') || 
        lowerMessage.includes('tarjeta') || lowerMessage.includes('efectivo') ||
        lowerMessage.includes('transferencia') || lowerMessage.includes('factura')) {
        let response = 'Nuestros métodos de pago:\n\n';
        knowledgeBase.payment.forEach(method => {
            response += `💳 ${method}\n`;
        });
        return response;
    }

    // Verificar horarios
    if (lowerMessage.includes('horario') || lowerMessage.includes('horarios') || 
        lowerMessage.includes('abierto') || lowerMessage.includes('cerrado')) {
        return 'Nuestro horario de atención es de lunes a sábado de 8:00 AM a 8:00 PM y domingos de 9:00 AM a 2:00 PM.';
    }

    // Verificar ubicación
    if (lowerMessage.includes('ubicación') || lowerMessage.includes('dirección') || 
        lowerMessage.includes('dónde') || lowerMessage.includes('local')) {
        return `Nos encontramos en ${chatbotData.origen_productos}. ¡Te esperamos!`;
    }

    // Verificar contacto
    if (lowerMessage.includes('contacto') || lowerMessage.includes('teléfono') || 
        lowerMessage.includes('llamar') || lowerMessage.includes('email')) {
        return 'Puedes contactarnos al teléfono (123) 456-7890 o escribirnos a info@huertomkt.com';
    }

    // Verificar misión y visión
    if (lowerMessage.includes('misión') || lowerMessage.includes('visión') || 
        lowerMessage.includes('objetivo') || lowerMessage.includes('objetivos')) {
        let response = `${chatbotData.nombre}:\n\n`;
        response += `Misión: ${chatbotData.mision.descripcion}\n`;
        chatbotData.mision.puntos.forEach(punto => {
            response += `- ${punto}\n`;
        });
        response += `\nVisión: ${chatbotData.vision}\n\n`;
        response += 'Objetivos principales:\n';
        chatbotData.principales_objetivos.forEach(objetivo => {
            response += `- ${objetivo}\n`;
        });
        return response;
    }

    // Verificar valores
    if (lowerMessage.includes('valor') || lowerMessage.includes('valores')) {
        let response = 'Nuestros valores son:\n\n';
        chatbotData.valores.forEach(valor => {
            response += `🌟 ${valor.nombre}: ${valor.descripcion}\n`;
        });
        return response;
    }

    // Verificar beneficios
    if (lowerMessage.includes('beneficio') || lowerMessage.includes('beneficios')) {
        let response = 'Nuestros beneficios:\n\n';
        chatbotData.beneficios.forEach(beneficio => {
            response += `✅ ${beneficio}\n`;
        });
        return response;
    }

    // Respuesta por defecto
    return 'Lo siento, no entiendo tu pregunta. ¿Podrías reformularla? Puedo ayudarte con información sobre productos, promociones, consejos saludables, entregas y métodos de pago.';
};

// Controlador para manejar los mensajes del chatbot
export const handleChatMessage = async (req: Request, res: Response) => {
    try {
        const { message } = req.body;
        const response = await processMessage(message);
        res.json({ response });
    } catch (error) {
        console.error('Error en el chatbot:', error);
        res.status(500).json({ error: 'Error al procesar el mensaje' });
    }
};

// Controlador para obtener el historial de chat
export const getChatHistory = async (req: Request, res: Response) => {
    try {
        const [rows] = await pool.query('SELECT * FROM chat_history ORDER BY timestamp DESC LIMIT 50');
        res.json(rows);
    } catch (error) {
        console.error('Error al obtener el historial:', error);
        res.status(500).json({ error: 'Error al obtener el historial' });
    }
};

// Controlador para limpiar el historial de chat
export const clearChatHistory = async (req: Request, res: Response) => {
    try {
        await pool.query('DELETE FROM chat_history');
        res.json({ message: 'Historial limpiado correctamente' });
    } catch (error) {
        console.error('Error al limpiar el historial:', error);
        res.status(500).json({ error: 'Error al limpiar el historial' });
    }
}; 