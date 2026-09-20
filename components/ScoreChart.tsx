import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Label } from 'recharts';

interface ScoreChartProps {
  score: number;
  color: string;
}

export const ScoreChart: React.FC<ScoreChartProps> = ({ score, color }) => {
  const data = [
    { name: 'Confidence', value: score },
    { name: 'Remaining', value: 100 - score },
  ];

  return (
    <div className="h-48 w-full relative flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            stroke="none"
          >
            <Cell key="score" fill={color} cornerRadius={10} />
            <Cell key="bg" fill="#e2e8f0" />
            <Label
              value={`${score}%`}
              position="center"
              className="text-3xl font-bold fill-slate-700"
              style={{ fontSize: '24px', fontWeight: 'bold' }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute bottom-2 text-slate-500 text-xs font-medium">
        AI Confidence
      </div>
    </div>
  );
};