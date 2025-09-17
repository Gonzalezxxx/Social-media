import React from 'react';
import { yeswelderAnalysisReportData, competitorAnalysis, extendedAnalytics } from '../data/professionalYesWelderData';

const GlobalOneClickStyleAnalysis = () => {
  const { channel, analytics } = yeswelderAnalysisReportData;
  const { mainCompetitors, marketPosition } = competitorAnalysis;

  // 格式化数字
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };

  // 格式化货币
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  return (
    <div className="space-y-8">
      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">YesWelder YouTube Channel Analysis</h1>
            <p className="text-blue-100">Professional Marketing Intelligence Report</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-100 mb-1">Industry Rank</div>
            <div className="text-4xl font-bold">#4</div>
            <div className="text-sm text-blue-100 mt-1">out of 87 welding channels</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{formatNumber(channel.subscriberCount)}</div>
            <div className="text-sm text-blue-100">Subscribers</div>
            <div className="text-xs text-green-300 mt-1">↑ 8.5% monthly growth</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{formatNumber(analytics.overview.totalViews)}</div>
            <div className="text-sm text-blue-100">Total Views</div>
            <div className="text-xs text-green-300 mt-1">↑ 12.5% YoY</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{analytics.overview.engagementRate}%</div>
            <div className="text-sm text-blue-100">Engagement Rate</div>
            <div className="text-xs text-yellow-300 mt-1">Industry avg: 9.2%</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{marketPosition.yeswelderPosition.marketShare}%</div>
            <div className="text-sm text-blue-100">Market Share</div>
            <div className="text-xs text-green-300 mt-1">Growing category</div>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Avg Views/Video</span>
              <span className="text-xs text-green-600">↑ 5.2%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{formatNumber(marketPosition.yeswelderPosition.avgViewsPerVideo)}</div>
            <div className="text-xs text-gray-500">Industry: {formatNumber(marketPosition.industryAverage.avgViewsPerVideo)}</div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Avg Watch Time</span>
              <span className="text-xs text-blue-600">→ 0.0%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{Math.floor(analytics.overview.averageViewDuration / 60)}:{(analytics.overview.averageViewDuration % 60).toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-500">Above industry avg</div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Monthly Uploads</span>
              <span className="text-xs text-green-600">↑ 8.3%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{marketPosition.yeswelderPosition.uploadFrequency}</div>
            <div className="text-xs text-gray-500">Consistent schedule</div>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">CTR</span>
              <span className="text-xs text-red-600">↓ 2.1%</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">4.8%</div>
            <div className="text-xs text-gray-500">Optimization needed</div>
          </div>
        </div>
      </div>

      {/* Competitive Intelligence */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Competitive Intelligence</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Market Position</h3>
            <div className="space-y-4">
              {mainCompetitors.map((competitor, index) => (
                <div key={competitor.channel.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{competitor.channel.title}</h4>
                    <span className="text-sm text-gray-500">#{index + 1}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Subscribers:</span>
                      <span className="ml-2 font-medium">{formatNumber(competitor.channel.subscriberCount)}</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Engagement:</span>
                      <span className="ml-2 font-medium">{competitor.performance.engagementRate}%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Growth:</span>
                      <span className="ml-2 font-medium">{competitor.performance.growthRate}%</span>
                    </div>
                    <div>
                      <span className="text-gray-600">Avg Views:</span>
                      <span className="ml-2 font-medium">{formatNumber(competitor.performance.avgViewsPerVideo)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">YesWelder Performance</h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-blue-900">Market Share</span>
                <span className="text-lg font-bold text-blue-600">{marketPosition.yeswelderPosition.marketShare}%</span>
              </div>
              <div className="w-full bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${marketPosition.yeswelderPosition.marketShare}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Engagement Rate</span>
                  <span className="text-sm font-medium">{marketPosition.yeswelderPosition.engagementRate}%</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Industry avg: {marketPosition.industryAverage.engagementRate}%</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Growth Rate</span>
                  <span className="text-sm font-medium">{marketPosition.yeswelderPosition.growthRate}%</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Industry avg: {marketPosition.industryAverage.growthRate}%</div>
              </div>

              <div className="border border-gray-200 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Content Consistency</span>
                  <span className="text-sm font-medium">{marketPosition.yeswelderPosition.uploadFrequency}/week</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">Industry avg: {marketPosition.industryAverage.uploadFrequency}/week</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Strategy Analysis */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Content Strategy Analysis</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Content Categories</h3>
            <div className="space-y-3">
              {extendedAnalytics.contentCategories.map((category, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{category.category}</span>
                    <span className="text-sm text-gray-600">{category.videoCount} videos</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">{formatNumber(category.totalViews)} views</span>
                    <span className="font-medium">{category.avgEngagement}% engagement</span>
                  </div>
                  <div className="mt-2">
                    <div className="flex justify-between text-xs text-gray-500 mb-1">
                      <span>Revenue Contribution</span>
                      <span>{category.revenueContribution}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-green-600 h-1 rounded-full"
                        style={{ width: `${category.revenueContribution}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Audience Insights</h3>
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Age Demographics</h4>
                <div className="space-y-2">
                  {analytics.audienceDemographics.ageGroups.map((group, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{group.age}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-purple-600 h-2 rounded-full"
                            style={{ width: `${group.percentage * 2}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-10 text-right">{group.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3">Geographic Distribution</h4>
                <div className="space-y-2">
                  {analytics.audienceDemographics.topCountries.slice(0, 5).map((country, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{country.country}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${country.percentage}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium w-10 text-right">{country.percentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Strategic Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-green-200 rounded-lg p-4 bg-green-50">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">📈</span>
              </div>
              <h3 className="font-semibold text-green-900">Content Strategy</h3>
            </div>
            <ul className="text-sm text-green-800 space-y-1">
              <li>• Increase technical tutorial frequency</li>
              <li>• Develop advanced welding series</li>
              <li>• Optimize for weekend publishing</li>
              <li>• Focus on TIG welding content</li>
            </ul>
          </div>

          <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">🔍</span>
              </div>
              <h3 className="font-semibold text-blue-900">SEO Optimization</h3>
            </div>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Improve thumbnail CTR</li>
              <li>• Optimize video titles</li>
              <li>• Target long-tail keywords</li>
              <li>• Enhance descriptions</li>
            </ul>
          </div>

          <div className="border border-purple-200 rounded-lg p-4 bg-purple-50">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm">💰</span>
              </div>
              <h3 className="font-semibold text-purple-900">Monetization</h3>
            </div>
            <ul className="text-sm text-purple-800 space-y-1">
              <li>• Secure brand sponsorships</li>
              <li>• Launch merchandise line</li>
              <li>• Create premium courses</li>
              <li>• Expand affiliate marketing</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Performance Forecast */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">12-Month Performance Forecast</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">178K</div>
            <div className="text-sm text-gray-600">Projected Subscribers</div>
            <div className="text-xs text-green-600 mt-1">+12.7% growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600">32.1M</div>
            <div className="text-sm text-gray-600">Projected Views</div>
            <div className="text-xs text-green-600 mt-1">+12.6% growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">$192K</div>
            <div className="text-sm text-gray-600">Projected Revenue</div>
            <div className="text-xs text-green-600 mt-1">+12.3% growth</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalOneClickStyleAnalysis;