import React from 'react';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  description?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
      <div className="h-80">
        {children}
      </div>
    </div>
  );
};

export default ChartCard;