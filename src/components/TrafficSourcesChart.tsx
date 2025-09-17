import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';

interface TrafficSourcesChartProps {
  data: {
    source: string;
    views: number;
    percentage: number;
  }[];
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899'];

const TrafficSourcesChart: React.FC<TrafficSourcesChartProps> = ({ data }) => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ source, percentage }) => `${source}: ${percentage}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="percentage"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value: number, name: string) => [
              `${value}%`,
              'Percentage'
            ]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrafficSourcesChart;