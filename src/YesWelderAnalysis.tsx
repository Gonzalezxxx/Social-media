import React from 'react';
import { yeswelderReportData, competitorComparison } from './data/yeswelderAnalysisData';
import OverviewMetrics from './components/OverviewMetrics';
import ViewsChart from './components/ViewsChart';
import DemographicsChart from './components/DemographicsChart';
import TrafficSourcesChart from './components/TrafficSourcesChart';
import TopVideosTable from './components/TopVideosTable';
import CompetitorAnalysis from './components/CompetitorAnalysis';
import InsightsAndRecommendations from './components/InsightsAndRecommendations';

function YesWelderAnalysis() {
  const { channel, analytics, reportPeriod } = yeswelderReportData;

  const formatNumber = (num: number) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">YesWelder YouTube 分析报告</h1>
              <p className="text-sm text-gray-600">
                焊接设备行业YouTube频道竞品分析 • {reportPeriod.start} 至 {reportPeriod.end}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-600">订阅者</div>
                <div className="text-xl font-bold text-gray-900">
                  {formatNumber(channel.subscriberCount)}
                </div>
              </div>
              <img
                className="h-12 w-12 rounded-full"
                src={channel.thumbnail}
                alt={channel.title}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 执行摘要 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">执行摘要</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{formatNumber(channel.subscriberCount)}</div>
              <div className="text-sm text-gray-600">订阅者</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{formatNumber(channel.viewCount)}</div>
              <div className="text-sm text-gray-600">总观看次数</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">{channel.videoCount}</div>
              <div className="text-sm text-gray-600">视频数量</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{analytics.overview.engagementRate}%</div>
              <div className="text-sm text-gray-600">参与度</div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>关键发现：</strong>
              YesWelder在焊接设备YouTube频道中排名第3，拥有28.5万订阅者。虽然规模小于Lincoln Electric（65万）和Hobart（42万），
              但展现出健康的增长势头（12.5%）和良好的内容效果（平均每个视频92,593次观看）。
            </p>
          </div>
        </div>

        {/* YesWelder 概览指标 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">YesWelder 频道概览</h2>
          <OverviewMetrics data={analytics.overview} />
        </div>

        {/* 性能图表 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">每日表现趋势</h3>
            <ViewsChart data={analytics.dailyStats} />
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">流量来源分析</h3>
            <TrafficSourcesChart data={analytics.trafficSources} />
          </div>
        </div>

        {/* 受众分析 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">受众分析</h2>
          <DemographicsChart
            ageGroups={analytics.audienceDemographics.ageGroups}
            gender={analytics.audienceDemographics.gender}
            topCountries={analytics.audienceDemographics.topCountries}
          />
        </div>

        {/* 热门视频 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">热门视频表现</h2>
          <TopVideosTable videos={analytics.topVideos} />
        </div>

        {/* 竞品分析 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">竞品分析</h2>
          <CompetitorAnalysis data={competitorComparison} />
        </div>

        {/* 洞察和建议 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">洞察与建议</h2>
          <InsightsAndRecommendations data={competitorComparison} />
        </div>

        {/* 频道详细信息 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">频道详细信息</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-gray-600">频道名称</div>
              <div className="text-lg font-medium text-gray-900">{channel.title}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">创建时间</div>
              <div className="text-lg font-medium text-gray-900">2018年6月</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">平均观看时长</div>
              <div className="text-lg font-medium text-gray-900">
                {Math.floor(analytics.overview.averageViewDuration / 60)}:{(analytics.overview.averageViewDuration % 60).toString().padStart(2, '0')}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600">主要市场</div>
              <div className="text-lg font-medium text-gray-900">{channel.country}</div>
            </div>
          </div>
          <div className="mt-6">
            <div className="text-sm text-gray-600 mb-2">频道描述</div>
            <p className="text-gray-900">{channel.description}</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            YesWelder YouTube 分析报告 • 生成于 {new Date().toLocaleDateString('zh-CN')}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default YesWelderAnalysis;