import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

interface ViewsChartProps {
  data: {
    date: string;
    views: number;
    watchTime: number;
    subscribers: number;
  }[];
}

const ViewsChart: React.FC<ViewsChartProps> = ({ data }) => {
  const chartData = data.map(item => ({
    ...item,
    watchTimeHours: Math.round(item.watchTime / 3600)
  }));

  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
            }}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            labelFormatter={(value) => {
              const date = new Date(value as string);
              return date.toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              });
            }}
            formatter={(value: number, name: string) => [
              name === 'watchTimeHours' ? `${value} hrs` : value.toLocaleString(),
              name === 'views' ? 'Views' : name === 'watchTimeHours' ? 'Watch Time' : 'Subscribers'
            ]}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="views"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="watchTimeHours"
            stroke="#10B981"
            strokeWidth={2}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
          />
          <Line
            type="monotone"
            dataKey="subscribers"
            stroke="#F59E0B"
            strokeWidth={2}
            dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#F59E0B', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ViewsChart;