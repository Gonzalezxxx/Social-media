import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface CompetitorAnalysisProps {
  data: {
    channel: string;
    subscribers: number;
    views: number;
    videos: number;
    avgViewsPerVideo: number;
    engagementRate: number;
    growthRate: number;
  }[];
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

const CompetitorAnalysis: React.FC<CompetitorAnalysisProps> = ({ data }) => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toLocaleString();
  };

  return (
    <div className="space-y-6">
      {/* 订阅者对比 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">订阅者数量对比</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="channel" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number) => [formatNumber(value), 'Subscribers']}
              />
              <Bar dataKey="subscribers" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 观看次数和视频数量对比 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">总观看次数对比</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => [formatNumber(value), 'Views']}
                />
                <Bar dataKey="views" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">视频数量对比</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => [value.toLocaleString(), 'Videos']}
                />
                <Bar dataKey="videos" fill="#F59E0B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 参与度和增长率对比 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">参与度对比 (%)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Engagement Rate']}
                />
                <Line
                  type="monotone"
                  dataKey="engagementRate"
                  stroke="#EF4444"
                  strokeWidth={2}
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">增长率对比 (%)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="channel" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value: number) => [`${value}%`, 'Growth Rate']}
                />
                <Line
                  type="monotone"
                  dataKey="growthRate"
                  stroke="#8B5CF6"
                  strokeWidth={2}
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 市场份额饼图 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">市场份额（按订阅者数量）</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data.map(item => ({
                  name: item.channel,
                  value: item.subscribers,
                  percentage: ((item.subscribers / data.reduce((sum, item) => sum + item.subscribers, 0)) * 100).toFixed(1)
                }))}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number, name: string) => [
                  formatNumber(value),
                  'Subscribers'
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default CompetitorAnalysis;