export enum VerdictType {
  REAL = 'Real',
  FAKE = 'Fake',
  SATIRE = 'Satire',
  OPINION = 'Opinion',
  UNCERTAIN = 'Uncertain'
}

export interface AnalysisResult {
  verdict: VerdictType;
  confidenceScore: number; // 0 to 100
  summary: string;
  reasoningPoints: string[];
  sentiment: 'Positive' | 'Negative' | 'Neutral';
}

export interface HistoryItem extends AnalysisResult {
  id: string;
  timestamp: number;
  originalText: string;
}