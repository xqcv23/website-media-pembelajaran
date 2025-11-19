import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage, QuizQuestion } from "../types";

// Note: In a real production app, API keys should be proxied through a backend.
// For this client-side demo, we assume process.env.API_KEY is available or injected.
const API_KEY = process.env.API_KEY || ''; 

const ai = new GoogleGenAI({ apiKey: API_KEY });

const MODEL_NAME = "gemini-2.5-flash";

export const sendMessageToGemini = async (
  history: ChatMessage[],
  userMessage: string
): Promise<string> => {
  if (!API_KEY) {
    return "Maaf, API Key belum dikonfigurasi. Silakan hubungi administrator.";
  }

  try {
    // Construct prompt with context
    const systemPrompt = `
      Kamu adalah "SysBot", asisten AI yang cerdas, ramah, dan menyenangkan untuk siswa SMA.
      Tugasmu adalah membantu siswa belajar tentang Sistem Komputer (Hardware, Software, Brainware).
      Jawablah dengan bahasa Indonesia yang santai namun edukatif.
      Gunakan emoji sesekali agar tidak membosankan.
      Jika ditanya di luar topik komputer, arahkan kembali ke topik dengan sopan.
      Jawablah secara ringkas (maksimal 3 paragraf) kecuali diminta menjelaskan detail.
    `;

    // Combine history into a simple string context (for single-turn simulation or simple multi-turn)
    // Using the chat API is better for history, but for this modular helper, we will instantiate a fresh chat
    // or just pass context in prompt for simplicity in this scope.
    // Let's use the chat interface for better context handling.
    
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    // Note: In a real app, we would persist the 'chat' object instance. 
    // Re-sending full history manually for statelessness in this simple demo service.
    // We will just send the user message for now combined with previous context if needed,
    // but to keep it simple and robust, we'll treat each interaction as relatively standalone 
    // or rely on the caller to manage the 'chat' object if we wanted full session persistence.
    // For this implementation, we will just generate content with the prompt.

    const result: GenerateContentResponse = await chat.sendMessage({
      message: userMessage
    });

    return result.text || "Maaf, saya tidak dapat menghasilkan jawaban saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi kesalahan saat menghubungi server AI.";
  }
};

export const generateQuizFromGemini = async (topic: string): Promise<QuizQuestion[]> => {
    if (!API_KEY) return [];

    const prompt = `
      Buatkan 3 soal pilihan ganda tentang topik "${topic}" untuk siswa SMA.
      Format output HARUS JSON murni tanpa markdown code block.
      Struktur array objek:
      [
        {
          "question": "Pertanyaan?",
          "options": ["A", "B", "C", "D"],
          "correctAnswer": 0, // index 0-3
          "explanation": "Penjelasan singkat kenapa benar."
        }
      ]
    `;

    try {
      const response = await ai.models.generateContent({
        model: MODEL_NAME,
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });

      const text = response.text;
      if (!text) return [];
      
      const quizData = JSON.parse(text) as QuizQuestion[];
      return quizData;
    } catch (error) {
      console.error("Quiz Generation Error:", error);
      // Fallback static quiz to prevent crash
      return [
        {
            question: "Apa komponen utama pemroses data?",
            options: ["Monitor", "CPU", "Keyboard", "Printer"],
            correctAnswer: 1,
            explanation: "CPU (Central Processing Unit) adalah otak komputer."
        }
      ];
    }
};
