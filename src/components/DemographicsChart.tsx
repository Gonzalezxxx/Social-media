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
  PieChart,
  Pie,
  Cell
} from 'recharts';

interface DemographicsChartProps {
  ageGroups: { age: string; percentage: number }[];
  gender: { male: number; female: number; other: number };
  topCountries: { country: string; views: number; percentage: number }[];
}

const COLORS = ['#3B82F6', '#EC4899', '#10B981', '#F59E0B', '#EF4444'];

const DemographicsChart: React.FC<DemographicsChartProps> = ({
  ageGroups,
  gender,
  topCountries
}) => {
  const genderData = [
    { name: 'Male', value: gender.male, color: '#3B82F6' },
    { name: 'Female', value: gender.female, color: '#EC4899' },
    { name: 'Other', value: gender.other, color: '#10B981' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Age Groups */}
      <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Age Distribution</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ageGroups}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="age" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number) => [`${value}%`, 'Percentage']}
              />
              <Bar dataKey="percentage" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gender Distribution - 更小更紧凑 */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="text-md font-semibold text-gray-900 mb-3">Gender Distribution</h3>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={60}
                fill="#8884d8"
                dataKey="value"
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}%`, 'Percentage']}
                contentStyle={{
                  fontSize: '12px',
                  padding: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* 简化的性别统计显示 */}
        <div className="mt-3 space-y-1">
          {genderData.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-xs">
              <div className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-2"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>{item.name}</span>
              </div>
              <span className="font-medium">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Countries */}
      <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-3">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Countries by Views</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topCountries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="country" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value: number, name: string) => [
                  name === 'views' ? value.toLocaleString() : `${value}%`,
                  name === 'views' ? 'Views' : 'Percentage'
                ]}
              />
              <Bar dataKey="views" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DemographicsChart;