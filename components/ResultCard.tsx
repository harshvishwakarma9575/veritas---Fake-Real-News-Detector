import React from 'react';
import { AnalysisResult, VerdictType } from '../types';
import { AlertTriangle, CheckCircle, HelpCircle, Info, Newspaper } from 'lucide-react';
import { ScoreChart } from './ScoreChart';

interface ResultCardProps {
  result: AnalysisResult;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  
  const getVerdictStyles = (verdict: VerdictType) => {
    switch (verdict) {
      case VerdictType.REAL:
        return {
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          text: 'text-emerald-700',
          icon: <CheckCircle className="h-12 w-12 text-emerald-500" />,
          chartColor: '#10b981'
        };
      case VerdictType.FAKE:
        return {
          bg: 'bg-rose-50',
          border: 'border-rose-200',
          text: 'text-rose-700',
          icon: <AlertTriangle className="h-12 w-12 text-rose-500" />,
          chartColor: '#f43f5e'
        };
      case VerdictType.SATIRE:
        return {
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          text: 'text-amber-700',
          icon: <Newspaper className="h-12 w-12 text-amber-500" />,
          chartColor: '#f59e0b'
        };
      default:
        return {
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          text: 'text-slate-700',
          icon: <HelpCircle className="h-12 w-12 text-slate-500" />,
          chartColor: '#64748b'
        };
    }
  };

  const styles = getVerdictStyles(result.verdict);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 animate-fade-in">
      <div className={`rounded-2xl overflow-hidden shadow-lg border-2 ${styles.border} bg-white`}>
        
        {/* Header Section */}
        <div className={`p-6 ${styles.bg} flex flex-col md:flex-row items-center justify-between gap-4 border-b ${styles.border}`}>
          <div className="flex items-center gap-4">
            {styles.icon}
            <div>
              <h2 className="text-sm uppercase tracking-wider font-bold text-slate-500">Verdict</h2>
              <h1 className={`text-3xl md:text-4xl font-extrabold ${styles.text}`}>
                {result.verdict}
              </h1>
            </div>
          </div>
          <div className="hidden md:block h-12 w-px bg-slate-300/50"></div>
          <div className="text-center md:text-right">
             <p className="text-sm text-slate-500 font-medium">Emotional Tone</p>
             <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white border border-slate-200 shadow-sm text-slate-700 mt-1">
               {result.sentiment}
             </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x divide-slate-100">
          
          {/* Left Col: Chart */}
          <div className="p-6 flex flex-col items-center justify-center bg-white">
            <ScoreChart score={result.confidenceScore} color={styles.chartColor} />
          </div>

          {/* Right Col: Details */}
          <div className="p-6 md:col-span-2 space-y-6 bg-white">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 flex items-center gap-2">
                <Info className="h-5 w-5 text-slate-400" />
                Analysis Summary
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {result.summary}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Key Indicators</h3>
              <ul className="space-y-2">
                {result.reasoningPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${styles.bg.replace('bg-', 'bg-slate-400 ')}`} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};