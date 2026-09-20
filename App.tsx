import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { analyzeNewsText } from './services/geminiService';
import { AnalysisResult } from './types';
import { ResultCard } from './components/ResultCard';
import { Loader2, ArrowRight, Quote, Eraser } from 'lucide-react';

const PREFILLED_EXAMPLES = [
  {
    label: "Fake Example",
    text: "BREAKING: Scientists confirm that eating 5kg of chocolate daily cures all known diseases immediately. The secret government study was leaked today!"
  },
  {
    label: "Real Example",
    text: "NASA's James Webb Space Telescope has captured new high-resolution images of the Pillars of Creation, revealing details never seen before in the star-forming region."
  }
];

function App() {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = useCallback(async () => {
    if (!inputText.trim()) return;
    
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const analysis = await analyzeNewsText(inputText);
      setResult(analysis);
    } catch (err) {
      setError("Failed to analyze the text. Please try again later or check your connection.");
    } finally {
      setLoading(false);
    }
  }, [inputText]);

  const handleClear = () => {
    setInputText('');
    setResult(null);
    setError(null);
  };

  const loadExample = (text: string) => {
    setInputText(text);
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      <Navbar />

      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Hero Section */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Uncover the Truth Behind the Headlines
          </h1>
          <p className="text-lg text-slate-600">
            Paste a news article, headline, or social media post below. Our AI will analyze the language, logic, and facts to detect potential misinformation.
          </p>
        </div>

        {/* Input Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl border border-slate-100">
            
            <div className="mb-4 flex justify-between items-center">
              <label htmlFor="news-input" className="block text-sm font-semibold text-slate-700 uppercase tracking-wider">
                News Content
              </label>
              {inputText && (
                <button 
                  onClick={handleClear}
                  className="text-xs text-slate-400 hover:text-rose-500 flex items-center gap-1 transition-colors"
                >
                  <Eraser className="h-3 w-3" /> Clear
                </button>
              )}
            </div>

            <div className="relative">
              <Quote className="absolute top-4 left-4 text-slate-200 h-6 w-6 pointer-events-none" />
              <textarea
                id="news-input"
                className="w-full h-48 pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-slate-800 placeholder-slate-400 text-lg leading-relaxed transition-all"
                placeholder="Paste the article text or headline here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                {PREFILLED_EXAMPLES.map((ex, idx) => (
                  <button
                    key={idx}
                    onClick={() => loadExample(ex.text)}
                    className="whitespace-nowrap px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm rounded-lg transition-colors"
                  >
                    {ex.label}
                  </button>
                ))}
              </div>

              <button
                onClick={handleAnalyze}
                disabled={loading || !inputText.trim()}
                className={`
                  w-full sm:w-auto px-8 py-3 rounded-xl font-semibold text-white shadow-lg flex items-center justify-center gap-2
                  transition-all duration-200 transform active:scale-95
                  ${loading || !inputText.trim() 
                    ? 'bg-slate-400 cursor-not-allowed shadow-none' 
                    : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-500/30'}
                `}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    Analyze Text
                    <ArrowRight className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>

            {error && (
              <div className="mt-6 p-4 bg-rose-50 border border-rose-200 rounded-lg text-rose-700 text-sm text-center">
                {error}
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        {result && (
          <div id="results">
            <ResultCard result={result} />
          </div>
        )}

      </main>

      <footer className="bg-white border-t border-slate-200 py-8">
        <div className="container mx-auto px-4 text-center text-slate-500 text-sm">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Veritas. Built with React & Gemini API.
          </p>
          <p className="text-slate-400 text-xs max-w-2xl mx-auto">
            Disclaimer: This tool uses Artificial Intelligence to analyze text patterns. 
            Results are probabilistic estimates and should not be taken as absolute fact. 
            Always verify important information through multiple reliable sources.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;