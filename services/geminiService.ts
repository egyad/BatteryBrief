import { GoogleGenAI, Type } from "@google/genai";
import { ConceptSuggestion } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateVisualConcepts = async (abstract: string): Promise<ConceptSuggestion[]> => {
  try {
    const modelId = "gemini-2.5-flash"; // Fast model for text generation
    
    const response = await ai.models.generateContent({
      model: modelId,
      contents: `Analyze the following scientific abstract or research summary. 
      Act as an Art Director for a high-impact Materials Science & Energy journal (like Nature Energy, Joule, or Advanced Materials).
      Suggest 3 distinct visual composition ideas for a cover illustration or major figure that represents this research.
      
      The 3 styles should be:
      1. Realistic/Detailed (focus on crystal structure, atoms, interfaces)
      2. Metaphorical/Conceptual (focus on the "flow", "barrier", or "cycle" concepts)
      3. Minimalist/Abstract (focus on geometric patterns of the material lattice)

      Research Abstract:
      "${abstract}"`,
      config: {
        systemInstruction: "You are an expert Scientific Illustrator specializing in Electrochemistry, Battery technologies, and Materials Science.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              style: { type: Type.STRING, description: "The name of the visual style (e.g., '3D Lattice Cross-Section')" },
              description: { type: Type.STRING, description: "Detailed visual description of the image composition, lighting (neon/glow), and key elements (ions, layers)." },
              rationale: { type: Type.STRING, description: "Why this approach highlights the novelty of the energy material." }
            },
            required: ["style", "description", "rationale"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as ConceptSuggestion[];
    }
    
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};