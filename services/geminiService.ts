import { GoogleGenAI, Type, SchemaType } from "@google/genai";
import { AnalysisResult, VerdictType } from "../types";

// Initialize the Gemini API client
// process.env.API_KEY is injected by the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const analyzeNewsText = async (text: string): Promise<AnalysisResult> => {
  try {
    const model = "gemini-2.5-flash";
    
    const prompt = `
      Act as an expert journalist, fact-checker, and linguist. 
      Analyze the following news text or headline for authenticity. 
      
      Determine if it is likely Real News, Fake News/Misinformation, Satire, or highly biased Opinion.
      
      Provide a confidence score (0-100) based on:
      1. Verifiability of facts (or lack thereof).
      2. Sensationalist or emotional language patterns.
      3. Logical consistency.
      4. Known source credibility (if mentioned).

      Text to analyze:
      """
      ${text}
      """
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            verdict: {
              type: Type.STRING,
              enum: [
                VerdictType.REAL,
                VerdictType.FAKE,
                VerdictType.SATIRE,
                VerdictType.OPINION,
                VerdictType.UNCERTAIN
              ],
              description: "The final classification of the text."
            },
            confidenceScore: {
              type: Type.NUMBER,
              description: "Confidence score between 0 and 100."
            },
            summary: {
              type: Type.STRING,
              description: "A one-sentence summary of why this verdict was chosen."
            },
            reasoningPoints: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3-4 key reasons supporting the verdict."
            },
            sentiment: {
              type: Type.STRING,
              enum: ["Positive", "Negative", "Neutral"],
              description: "The overall emotional tone of the text."
            }
          },
          required: ["verdict", "confidenceScore", "summary", "reasoningPoints", "sentiment"],
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as AnalysisResult;
    } else {
      throw new Error("No response text received from Gemini.");
    }

  } catch (error) {
    console.error("Error analyzing news:", error);
    throw error;
  }
};