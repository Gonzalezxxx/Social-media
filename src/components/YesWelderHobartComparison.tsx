import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { yeswelderHobartComparison, comparisonChartData } from '../data/competitorComparison';

const YesWelderHobartComparison = () => {
  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num.toString();
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">YesWelder vs Hobart™ Comprehensive Analysis</h2>

      {/* Key Metrics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800">Subscription Gap</h3>
          <p className="text-3xl font-bold text-blue-600">
            {formatNumber(yeswelderHobartComparison.subscriptionGap.difference)}
          </p>
          <p className="text-sm text-blue-700">
            YesWelder leads by {yeswelderHobartComparison.subscriptionGap.ratio}x
          </p>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800">YesWelder Subscribers</h3>
          <p className="text-3xl font-bold text-green-600">
            {formatNumber(yeswelderHobartComparison.subscriptionGap.yeswelder)}
          </p>
          <p className="text-sm text-green-700">Market leader</p>
        </div>

        <div className="bg-orange-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-orange-800">Hobart Subscribers</h3>
          <p className="text-3xl font-bold text-orange-600">
            {formatNumber(yeswelderHobartComparison.subscriptionGap.hobart)}
          </p>
          <p className="text-sm text-orange-700">Significant growth needed</p>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-800">Content Volume</h3>
          <p className="text-3xl font-bold text-purple-600">
            {yeswelderHobartComparison.contentProduction.yeswelder.videoCount}
          </p>
          <p className="text-sm text-purple-700">YesWelder videos</p>
        </div>
      </div>

      {/* Subscriber Comparison Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Subscriber & Video Count Comparison</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonChartData.subscriberComparison}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value: number) => formatNumber(value)} />
              <Legend />
              <Bar dataKey="subscribers" fill="#3B82F6" name="Subscribers" />
              <Bar dataKey="videos" fill="#10B981" name="Videos" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Market Position Radar Chart */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Market Position Analysis</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={comparisonChartData.marketPosition}>
              <PolarGrid />
              <PolarAngleAxis dataKey="category" />
              <PolarRadiusAxis domain={[0, 10]} />
              <Radar
                name="YesWelder"
                dataKey="yeswelder"
                stroke="#3B82F6"
                fill="#3B82F6"
                fillOpacity={0.3}
              />
              <Radar
                name="Hobart"
                dataKey="hobart"
                stroke="#F97316"
                fill="#F97316"
                fillOpacity={0.3}
              />
              <Radar
                name="Industry Average"
                dataKey="industryAverage"
                stroke="#6B7280"
                fill="#6B7280"
                fillOpacity={0.1}
                strokeDasharray="5 5"
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Content Strategy Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">YesWelder Strengths</h3>
          <ul className="space-y-2">
            {yeswelderHobartComparison.contentStrategy.yeswelder.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-orange-800 mb-4">Hobart Strengths</h3>
          <ul className="space-y-2">
            {yeswelderHobartComparison.contentStrategy.hobart.strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Strategic Recommendations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-lg mb-2 text-green-700">YesWelder</h4>
            <ul className="space-y-2">
              {yeswelderHobartComparison.strategicRecommendations.shortTerm.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-2">→</span>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-2 text-orange-700">Hobart</h4>
            <ul className="space-y-2">
              {yeswelderHobartComparison.contentStrategy.hobart.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-orange-500 mr-2">→</span>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Growth Projection */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Growth Projection</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={comparisonChartData.growthProjection}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value: number) => formatNumber(value)} />
              <Legend />
              <Line
                type="monotone"
                dataKey="yeswelderProjection"
                stroke="#3B82F6"
                strokeWidth={3}
                name="YesWelder (with strategy)"
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="hobartProjection"
                stroke="#F97316"
                strokeWidth={3}
                name="Hobart (with strategy)"
                strokeDasharray="5 5"
              />
              <Line
                type="monotone"
                dataKey="yeswelder"
                stroke="#3B82F6"
                name="YesWelder (current)"
              />
              <Line
                type="monotone"
                dataKey="hobart"
                stroke="#F97316"
                name="Hobart (current)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default YesWelderHobartComparison;