import React, { useState } from 'react';
import { mockReportData } from './data/mockData';
import OverviewMetrics from './components/OverviewMetrics';
import ViewsChart from './components/ViewsChart';
import DemographicsChart from './components/DemographicsChart';
import TrafficSourcesChart from './components/TrafficSourcesChart';
import ChartCard from './components/ChartCard';
import TopVideosTable from './components/TopVideosTable';
import YesWelderAnalysis from './YesWelderAnalysis';
import YesWelderHobartComparison from './components/YesWelderHobartComparison';

function App() {
  const [activeReport, setActiveReport] = useState<'demo' | 'yeswelder' | 'comparison'>('demo');

  const { channel, analytics, reportPeriod } = mockReportData;

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
              <h1 className="text-2xl font-bold text-gray-900">YouTube Analytics Dashboard</h1>
              <p className="text-sm text-gray-600">
                专业YouTube频道分析平台
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveReport('demo')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeReport === 'demo'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  演示数据
                </button>
                <button
                  onClick={() => setActiveReport('yeswelder')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeReport === 'yeswelder'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  YesWelder分析
                </button>
                <button
                  onClick={() => setActiveReport('comparison')}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeReport === 'comparison'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  YesWelder vs Hobart
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeReport === 'demo' ? (
          <>
            {/* Overview Metrics */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Overview</h2>
              <OverviewMetrics data={analytics.overview} />
            </div>

            {/* Performance Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <ChartCard title="Daily Performance" description="Views, watch time, and subscriber growth">
                <ViewsChart data={analytics.dailyStats} />
              </ChartCard>

              <ChartCard title="Traffic Sources" description="Where your audience comes from">
                <TrafficSourcesChart data={analytics.trafficSources} />
              </ChartCard>
            </div>

            {/* Demographics */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Audience Demographics</h2>
              <DemographicsChart
                ageGroups={analytics.audienceDemographics.ageGroups}
                gender={analytics.audienceDemographics.gender}
                topCountries={analytics.audienceDemographics.topCountries}
              />
            </div>

            {/* Top Videos */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Top Performing Videos</h2>
              <TopVideosTable videos={analytics.topVideos} />
            </div>

            {/* Channel Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Channel Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-gray-600">Channel Name</div>
                  <div className="text-lg font-medium text-gray-900">{channel.title}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Videos</div>
                  <div className="text-lg font-medium text-gray-900">
                    {formatNumber(channel.videoCount)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Total Views</div>
                  <div className="text-lg font-medium text-gray-900">
                    {formatNumber(channel.viewCount)}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Country</div>
                  <div className="text-lg font-medium text-gray-900">{channel.country}</div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-sm text-gray-600 mb-2">Description</div>
                <p className="text-gray-900">{channel.description}</p>
              </div>
            </div>
          </>
        ) : activeReport === 'yeswelder' ? (
          <YesWelderAnalysis />
        ) : (
          <YesWelderHobartComparison />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-600">
            YouTube Analytics Dashboard • Report generated on {new Date().toLocaleDateString()}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;