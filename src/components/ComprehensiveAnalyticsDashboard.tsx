import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ComposedChart,
  CandlestickChart,
  Candlestick
} from 'recharts';
import { ComprehensiveYouTubeData } from '../data/comprehensiveMarketingData';

interface ComprehensiveAnalyticsDashboardProps {
  data: ComprehensiveYouTubeData;
}

const COLORS = ['#3B82F6', '#EC4899', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#F97316', '#06B6D4'];

const ComprehensiveAnalyticsDashboard: React.FC<ComprehensiveAnalyticsDashboardProps> = ({ data }) => {
  // 核心指标卡片
  const MetricCard: React.FC<{ title: string; value: string | number; change?: number; icon: string; color: string }> = ({ title, value, change, icon, color }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-600 font-medium mb-1">{title}</div>
          <div className="text-2xl font-bold text-gray-900">{value}</div>
          {change !== undefined && (
            <div className={`text-sm mt-1 ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change >= 0 ? '↗' : '↘'} {Math.abs(change)}%
            </div>
          )}
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
          <span className="text-white text-lg">{icon}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* 1. 核心概览指标 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm">📊</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">核心概览指标</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="总观看次数"
            value={(data.analytics.overview.totalViews / 1000000).toFixed(1) + 'M'}
            change={data.analytics.overview.growthRate}
            icon="👁️"
            color="bg-blue-600"
          />
          <MetricCard
            title="订阅者"
            value={(data.analytics.overview.totalSubscribers / 1000).toFixed(0) + 'K'}
            change={12.5}
            icon="👥"
            color="bg-green-600"
          />
          <MetricCard
            title="参与度"
            value={data.analytics.overview.engagementRate + '%'}
            change={2.3}
            icon="💝"
            color="bg-purple-600"
          />
          <MetricCard
            title="预估收入"
            value={'$' + (data.analytics.overview.revenueEstimate / 1000).toFixed(0) + 'K'}
            change={15.8}
            icon="💰"
            color="bg-orange-600"
          />
        </div>
      </div>

      {/* 2. 时间序列分析 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">📈</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">观看次数趋势</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data.analytics.timeSeries.daily}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="views" stroke="#10B981" fill="#D1FAE5" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">💰</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">收入分析</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={data.analytics.timeSeries.daily}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar yAxisId="left" dataKey="revenue" fill="#8B5CF6" />
                <Line yAxisId="right" type="monotone" dataKey="rpm" stroke="#EC4899" strokeWidth={2} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 3. 受众深度分析 */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm">👥</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">受众深度分析</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 年龄分布 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">年龄分布</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.analytics.audienceInsights.demographics.ageGroups}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, '占比']} />
                  <Bar dataKey="percentage" fill="#EC4899" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 设备分布 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">设备分布</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={data.analytics.audienceInsights.behavior.devices}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ device, percentage }) => `${device}: ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="percentage"
                  >
                    {data.analytics.audienceInsights.behavior.devices.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 地理分布 */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">地理分布</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.analytics.audienceInsights.geography.countries.slice(0, 6)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}%`, '占比']} />
                  <Bar dataKey="percentage" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* 4. 内容表现分析 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">📹</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">内容类别表现</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={data.analytics.videoPerformance.contentCategories}>
                <PolarGrid />
                <PolarAngleAxis dataKey="category" />
                <PolarRadiusAxis />
                <Radar name="表现指数" dataKey="avgEngagement" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center mb-6">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm">🔥</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">发布时间效果</h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart data={data.analytics.videoPerformance.publishTimeAnalysis}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dayOfWeek" />
                <YAxis dataKey="avgViews" />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter name="发布效果" dataKey="avgViews" fill="#EF4444" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* 5. 竞品分析 */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm">🏆</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">竞品分析对比</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">市场份额对比</h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data.competitive.mainCompetitors}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="channel.title" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="marketShare" fill="#6366F1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-4">综合表现雷达图</h4>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={data.competitive.mainCompetitors}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="channel.title" />
                  <PolarRadiusAxis />
                  <Radar name="参与度" dataKey="performance.engagementRate" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
                  <Radar name="增长率" dataKey="performance.growthRate" stroke="#10B981" fill="#10B981" fillOpacity={0.6} />
                  <Tooltip />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* 6. AI洞察和建议 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm">🤖</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">AI洞察和建议</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* SWOT分析 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-bold text-gray-900 mb-4">SWOT分析</h4>
            <div className="space-y-3">
              <div>
                <div className="text-green-600 font-semibold text-sm">优势</div>
                <div className="text-sm text-gray-600">
                  {data.insights.swotAnalysis.strengths.slice(0, 2).map((s, i) => (
                    <div key={i}>• {s.description}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-red-600 font-semibold text-sm">劣势</div>
                <div className="text-sm text-gray-600">
                  {data.insights.swotAnalysis.weaknesses.slice(0, 2).map((w, i) => (
                    <div key={i}>• {w.description}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 战略建议 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-bold text-gray-900 mb-4">战略建议</h4>
            <div className="space-y-3">
              {data.insights.strategicRecommendations.slice(0, 3).map((rec, i) => (
                <div key={i} className="border-l-4 border-blue-500 pl-3">
                  <div className="font-semibold text-sm text-gray-900">{rec.title}</div>
                  <div className="text-xs text-gray-600">{rec.description}</div>
                  <div className="text-xs text-blue-600 mt-1">优先级: {rec.priority}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 预测分析 */}
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h4 className="font-bold text-gray-900 mb-4">增长预测</h4>
            <div className="space-y-3">
              {data.insights.predictiveAnalytics.growthForecast.slice(0, 3).map((forecast, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="text-sm text-gray-900">{forecast.period}</div>
                  <div className="text-sm font-semibold text-green-600">
                    {Math.round(forecast.projectedSubscribers / 1000)}K 订阅者
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 7. 详细数据表格 */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center mb-6">
          <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center mr-3">
            <span className="text-white text-sm">📊</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">热门视频详细表现</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left p-4 font-semibold text-gray-900">视频标题</th>
                <th className="text-left p-4 font-semibold text-gray-900">观看次数</th>
                <th className="text-left p-4 font-semibold text-gray-900">参与度</th>
                <th className="text-left p-4 font-semibold text-gray-900">收入</th>
                <th className="text-left p-4 font-semibold text-gray-900">表现评级</th>
              </tr>
            </thead>
            <tbody>
              {data.analytics.videoPerformance.topVideos.slice(0, 10).map((video, index) => (
                <tr key={video.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 text-gray-900">{video.title}</td>
                  <td className="p-4 text-gray-600">{(video.viewCount / 1000).toFixed(0)}K</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      video.engagementRate > 8 ? 'bg-green-100 text-green-800' :
                      video.engagementRate > 5 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {video.engagementRate}%
                    </span>
                  </td>
                  <td className="p-4 text-gray-600">${(video.revenueEstimate || 0).toFixed(0)}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      index < 3 ? 'bg-green-100 text-green-800' :
                      index < 7 ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {index < 3 ? '优秀' : index < 7 ? '良好' : '一般'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveAnalyticsDashboard;