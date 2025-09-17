import React from 'react';
import { yeswelderAnalysisReportData } from '../data/professionalYesWelderData';

const SimpleAnalyticsDashboard = () => {
  const { channel, analytics } = yeswelderAnalysisReportData;

  // 格式化数字
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  return (
    <div className="space-y-8">
      {/* 核心概览 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">核心指标概览</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600">{formatNumber(channel.subscriberCount)}</div>
            <div className="text-sm text-gray-600">订阅者</div>
            <div className="text-xs text-green-600 mt-1">↑ 12.5%</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-3xl font-bold text-purple-600">{formatNumber(analytics.overview.totalViews)}</div>
            <div className="text-sm text-gray-600">总观看次数</div>
            <div className="text-xs text-green-600 mt-1">↑ 8.5%</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-3xl font-bold text-green-600">{Math.floor(analytics.overview.averageViewDuration / 60)}:{(analytics.overview.averageViewDuration % 60).toString().padStart(2, '0')}</div>
            <div className="text-sm text-gray-600">平均观看时长</div>
            <div className="text-xs text-blue-600 mt-1">行业平均: 4:15</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-3xl font-bold text-orange-600">{analytics.overview.engagementRate}%</div>
            <div className="text-sm text-gray-600">参与度</div>
            <div className="text-xs text-blue-600 mt-1">行业平均: 9.2%</div>
          </div>
        </div>
      </div>

      {/* 每日数据趋势 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">每日数据趋势</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">观看次数</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">观看时长</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">新增订阅者</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analytics.dailyStats.map((stat, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stat.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatNumber(stat.views)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{formatNumber(stat.watchTime)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{stat.subscribers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 受众分析 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">年龄分布</h3>
          <div className="space-y-3">
            {analytics.audienceDemographics.ageGroups.map((group, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{group.age}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${group.percentage * 2}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{group.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">地理位置分布</h3>
          <div className="space-y-3">
            {analytics.audienceDemographics.topCountries.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-sm text-gray-600">{country.country}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: `${country.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{country.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 流量来源分析 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">流量来源分析</h3>
        <div className="space-y-3">
          {analytics.trafficSources.map((source, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm text-gray-600">{source.source}</span>
              <div className="flex items-center space-x-2">
                <div className="w-48 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-600 h-2 rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-900">{source.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 最佳表现视频 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">最佳表现视频</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">视频标题</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">观看次数</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">点赞数</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">评论数</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {analytics.topVideos.map((video, index) => (
                <tr key={video.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{video.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatNumber(video.viewCount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatNumber(video.likeCount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatNumber(video.commentCount)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 数据更新说明 */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">⚠️</span>
            </div>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">数据说明</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>当前使用的是示例数据，用于展示分析报告的结构和功能。</p>
              <p className="mt-1">为了获取最准确的YesWelder YouTube频道数据，建议：</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>直接访问YouTube官方频道查看实时统计数据</li>
                <li>使用专业YouTube分析工具如Social Blade</li>
                <li>联系YesWelder官方获取最新数据</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleAnalyticsDashboard;