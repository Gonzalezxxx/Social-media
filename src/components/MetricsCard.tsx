import React from 'react';

interface MetricsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'stable';
}

const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  change,
  icon,
  trend = 'stable'
}) => {
  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
      if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
      return val.toLocaleString();
    }
    return val;
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-600';
  };

  const getTrendIcon = () => {
    if (trend === 'up') return '↗';
    if (trend === 'down') return '↘';
    return '→';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-700 text-sm font-medium">{title}</h3>
        {icon && (
          <div className="text-blue-600">
            {icon}
          </div>
        )}
      </div>
      <div className="flex items-baseline">
        <div className="text-2xl font-bold text-gray-900">
          {formatValue(value)}
        </div>
        {change !== undefined && (
          <div className={`ml-2 flex items-center text-sm ${getTrendColor()}`}>
            <span className="mr-1">{getTrendIcon()}</span>
            {change > 0 ? '+' : ''}{change}%
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricsCard;