import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const generateExteriorDesigns = async (prompt: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: `A high-quality 2D architectural elevation/exterior design of a house. Style: ${prompt}. Professional, realistic, clear view.` }],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9",
      },
    },
  });

  const images: string[] = [];
  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      images.push(`data:image/png;base64,${part.inlineData.data}`);
    }
  }
  return images;
};

export const generateFloorPlan = async (details: {
  plotArea: number;
  floors: number;
  roomsPerFloor: number;
  style: string;
}) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: `Generate a detailed floor plan layout for a house with the following details:
    Plot Area: ${details.plotArea} sq ft
    Floors: ${details.floors}
    Rooms per floor: ${details.roomsPerFloor}
    Style: ${details.style}
    
    Return the response as a JSON object with:
    - layoutDescription: A textual description of the layout.
    - rooms: An array of objects with { name, dimensions, floor }.
    - optimizationSuggestions: Suggestions to reduce cost or optimize space.
    - estimatedCostRange: { min, max } in Rupees (INR).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          layoutDescription: { type: Type.STRING },
          rooms: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                dimensions: { type: Type.STRING },
                floor: { type: Type.INTEGER }
              }
            }
          },
          optimizationSuggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
          estimatedCostRange: {
            type: Type.OBJECT,
            properties: {
              min: { type: Type.NUMBER },
              max: { type: Type.NUMBER }
            }
          }
        }
      }
    }
  });

  return JSON.parse(response.text);
};

export const getBudgetOptimization = async (projectDetails: any) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-pro-preview",
    contents: `Analyze this home construction project and provide budget optimization suggestions:
    ${JSON.stringify(projectDetails)}
    
    Suggest:
    1. Alternative materials.
    2. Room size adjustments.
    3. Layout optimizations.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          materialSuggestions: { type: Type.ARRAY, items: { type: Type.STRING } },
          sizeAdjustments: { type: Type.ARRAY, items: { type: Type.STRING } },
          layoutOptimizations: { type: Type.ARRAY, items: { type: Type.STRING } }
        }
      }
    }
  });
  return JSON.parse(response.text);
};
