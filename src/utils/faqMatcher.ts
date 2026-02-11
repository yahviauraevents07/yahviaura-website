import type { FAQ } from '../data/faqs';

export interface MatchResult {
  found: boolean;
  answer: string;
  question?: string;
  confidence?: number;
}

export const findAnswer = (userQuestion: string, faqs: FAQ[]): MatchResult => {
  const lowerQuery = userQuestion.toLowerCase().trim();
  
  // Return greeting for common greetings
  const greetings = ['hi', 'hello', 'hey', 'hii', 'hola', 'namaste'];
  if (greetings.some(greeting => lowerQuery === greeting || lowerQuery === `${greeting}!`)) {
    return {
      found: true,
      answer: "Hello! I'm Arya, your Yahvi Aura assistant. I'm here to help you create heavenly experiences. What would you like to know about our services?"
    };
  }

  // Score each FAQ based on keyword matches
  const scoredFaqs = faqs.map(faq => {
    const matchCount = faq.keywords.filter(keyword => 
      lowerQuery.includes(keyword.toLowerCase())
    ).length;
    
    return {
      faq,
      score: matchCount
    };
  });

  // Sort by score and get the best match
  scoredFaqs.sort((a, b) => b.score - a.score);
  const bestMatch = scoredFaqs[0];

  // If we have at least one keyword match, return the answer
  if (bestMatch && bestMatch.score > 0) {
    return {
      found: true,
      answer: bestMatch.faq.answer,
      question: bestMatch.faq.question,
      confidence: bestMatch.score
    };
  }

  // Fallback response
  return {
    found: false,
    answer: "I'm still learning the magic of Yahvi Aura! I don't have the answer to that yet, but our human experts do."
  };
};
