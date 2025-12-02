import { Tone, GeneratedEmail } from "../types";

// Accedemos a la clave de OpenAI desde el archivo .env
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const generateColdEmail = async (
  niche: string,
  tone: Tone,
  offer: string,
  integrationsContext: string[]
): Promise<GeneratedEmail> => {
  
  if (!API_KEY) {
    console.error("Falta la API Key. Asegúrate de tener VITE_OPENAI_API_KEY en tu archivo .env o en las variables de Vercel.");
    throw new Error("Configuración de API incompleta.");
  }

  const contextInstruction = integrationsContext.length > 0 
    ? `Contexto adicional de datos: ${integrationsContext.join(', ')}.` 
    : "";

  const prompt = `
    Escribe un email frío de ventas altamente efectivo.
    
    - Nicho/Audiencia: ${niche}
    - Tono: ${tone}
    - Oferta: ${offer}
    ${contextInstruction}

    IMPORTANTE: Responde ÚNICAMENTE con un objeto JSON válido con esta estructura exacta, sin texto antes ni después:
    {
      "subject": "El asunto del email aquí",
      "body": "El cuerpo del email aquí (usa \\n para saltos de línea)"
    }
  `;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Eres un experto copywriter de ventas B2B. Respondes siempre en JSON puro." },
          { role: "user", content: prompt }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // Parseamos el resultado de OpenAI para obtener el JSON
    const content = data.choices[0].message.content;
    
    try {
        const parsedContent = JSON.parse(content);
        return parsedContent as GeneratedEmail;
    } catch (e) {
        console.error("Error al parsear JSON de OpenAI:", content);
        throw new Error("La IA no devolvió un formato válido.");
    }

  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw error;
  }
};