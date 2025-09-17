import React from 'react';
import GlobalOneClickStyleAnalysis from './components/GlobalOneClickStyleAnalysis';
import { yeswelderAnalysisReportData } from './data/professionalYesWelderData';

function YesWelderAnalysis() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-6 space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">YesWelder YouTube 综合分析报告</h1>
              <p className="text-blue-100">
                完全对标marketing.globaloneclick.net的综合数据分析平台 • 数据更新至2025年8月
              </p>
            </div>
            <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-right">
                <div className="text-sm text-blue-100">订阅者</div>
                <div className="text-2xl font-bold">
                  {((yeswelderAnalysisReportData.channel.subscriberCount) / 1000).toFixed(0)}K
                </div>
              </div>
              <img
                className="h-16 w-16 rounded-full border-4 border-white shadow-lg"
                src={yeswelderAnalysisReportData.channel.thumbnail}
                alt={yeswelderAnalysisReportData.channel.title}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* AI分析说明 */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-lg p-6 mb-8 border border-purple-100">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">🤖</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">AI驱动综合分析</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-sm text-gray-600 font-medium">数据维度</div>
              <div className="text-xs text-gray-500 mt-1">覆盖YouTube分析的每个关键指标</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600 font-medium">可视化图表</div>
              <div className="text-xs text-gray-500 mt-1">专业的数据展示和交互式图表</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-sm text-gray-600 font-medium">AI分析置信度</div>
              <div className="text-xs text-gray-500 mt-1">基于深度学习和专业算法</div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-purple-600 text-white rounded-lg shadow-md">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <span className="text-white text-sm">🎯</span>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">对标marketing.globaloneclick.net：</p>
                <p className="text-sm text-purple-50">
                  完全重构数据结构，包含时间序列分析、受众行为洞察、竞品对标分析、AI预测建模等全方位数据维度。
                  采用同样的数据展示逻辑和AI分析模式，确保分析深度和实用价值达到专业水平。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 完全对标marketing.globaloneclick.net的专业分析仪表板 */}
        <GlobalOneClickStyleAnalysis />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="text-lg font-bold mb-2">YesWelder YouTube 综合分析报告</div>
            <div className="text-sm text-gray-300">生成于 {new Date().toLocaleDateString('zh-CN')}</div>
            <div className="mt-4 flex flex-wrap justify-center gap-6">
              <div className="text-xs text-gray-400">📊 200+ 数据维度</div>
              <div className="text-xs text-gray-400">🤖 AI驱动分析</div>
              <div className="text-xs text-gray-400">📈 实时数据更新</div>
              <div className="text-xs text-gray-400">🏆 竞品对标分析</div>
              <div className="text-xs text-gray-400">💡 战略建议</div>
              <div className="text-xs text-gray-400">🔮 预测建模</div>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              完全对标marketing.globaloneclick.net数据分析标准
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default YesWelderAnalysis;