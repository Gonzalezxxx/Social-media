import React from 'react';

interface InsightsAndRecommendationsProps {
  data: {
    channel: string;
    subscribers: number;
    views: number;
    videos: number;
    avgViewsPerVideo: number;
    engagementRate: number;
    growthRate: number;
  }[];
}

const InsightsAndRecommendations: React.FC<InsightsAndRecommendationsProps> = ({ data }) => {
  const yeswelderData = data.find(item => item.channel === 'YesWelder');
  const topCompetitors = data.filter(item => item.channel !== 'YesWelder').sort((a, b) => b.subscribers - a.subscribers);

  const insights = [
    {
      category: '市场地位',
      title: '中等规模竞争者',
      description: 'YesWelder在焊接设备YouTube频道中处于中等规模，拥有28.5万订阅者，位于Lincoln Electric（65万）和WeldPro（19.5万）之间。',
      impact: 'medium',
      trend: 'stable'
    },
    {
      category: '内容效果',
      title: '视频表现良好',
      description: '平均每个视频获得92,593次观看，高于行业平均水平，表明内容质量和受众匹配度良好。',
      impact: 'high',
      trend: 'positive'
    },
    {
      category: '参与度',
      title: '参与度有待提升',
      description: '8.7%的参与率低于顶级竞争对手（Lincoln Electric 11.2%），有改进空间。',
      impact: 'medium',
      trend: 'negative'
    },
    {
      category: '增长势头',
      title: '健康增长',
      description: '12.5%的增长率显示频道处于健康发展轨道，但低于行业领导者Lincoln Electric的18.7%。',
      impact: 'medium',
      trend: 'positive'
    }
  ];

  const recommendations = [
    {
      priority: 'high',
      category: '内容策略',
      title: '增加互动内容',
      description: '创建更多问答环节、直播焊接演示和观众挑战，以提高参与度。',
      expectedImpact: '参与度提升15-20%',
      implementation: '短期（1-2个月）'
    },
    {
      priority: 'high',
      category: 'SEO优化',
      title: '优化搜索关键词',
      description: '针对焊接相关的长尾关键词进行SEO优化，提高YouTube搜索流量。',
      expectedImpact: '搜索流量提升25-30%',
      implementation: '短期（1个月）'
    },
    {
      priority: 'medium',
      category: '内容频率',
      title: '增加发布频率',
      description: '从目前的每周2-3个视频增加到每周4-5个视频，保持观众参与度。',
      expectedImpact: '订阅者增长提升10-15%',
      implementation: '中期（2-3个月）'
    },
    {
      priority: 'medium',
      category: '合作营销',
      title: '与行业影响者合作',
      description: '与其他焊接频道和行业影响者合作，扩大受众范围。',
      expectedImpact: '新订阅者增长20-25%',
      implementation: '中期（3-4个月）'
    },
    {
      priority: 'low',
      category: '技术升级',
      title: '提升制作质量',
      description: '投资更好的摄影设备和剪辑软件，提升视频制作质量。',
      expectedImpact: '观看时长增加10-15%',
      implementation: '长期（4-6个月）'
    }
  ];

  const swotAnalysis = {
    strengths: [
      '强大的产品专业知识和技术内容',
      '良好的视频观看表现',
      '健康的增长势头',
      '专注的受众群体'
    ],
    weaknesses: [
      '参与度低于顶级竞争对手',
      '品牌知名度相对较低',
      '内容发布频率不够稳定',
      '缺乏创新的内容形式'
    ],
    opportunities: [
      '焊接行业持续增长',
      'DIY焊接趋势上升',
      '新兴市场需求增长',
      '技术进步带来新内容机会'
    ],
    threats: [
      '大品牌竞争激烈',
      '市场可能饱和',
      '技术变革快速',
      '消费者偏好变化'
    ]
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500 bg-red-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'low': return 'border-green-500 bg-green-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* 关键洞察 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">关键洞察</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {insights.map((insight, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{insight.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImpactColor(insight.impact)}`}>
                  {insight.impact === 'high' ? '高' : insight.impact === 'medium' ? '中' : '低'}影响
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{insight.description}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span>{insight.category}</span>
                <span className="mx-2">•</span>
                <span className={
                  insight.trend === 'positive' ? 'text-green-600' :
                  insight.trend === 'negative' ? 'text-red-600' : 'text-gray-600'
                }>
                  {insight.trend === 'positive' ? '↗ 上升' : insight.trend === 'negative' ? '↘ 下降' : '→ 稳定'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 建议和策略 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">战略建议</h3>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className={`border-l-4 rounded-lg p-4 ${getPriorityColor(rec.priority)}`}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{rec.title}</h4>
                <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded">
                  {rec.priority === 'high' ? '高优先级' : rec.priority === 'medium' ? '中优先级' : '低优先级'}
                </span>
              </div>
              <p className="text-sm text-gray-700 mb-2">{rec.description}</p>
              <div className="flex justify-between items-center text-xs text-gray-600">
                <span>类别: {rec.category}</span>
                <span>预期影响: {rec.expectedImpact}</span>
                <span>实施时间: {rec.implementation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SWOT分析 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">优势 (Strengths)</h3>
          <ul className="space-y-2">
            {swotAnalysis.strengths.map((strength, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700">
                <span className="text-green-600 mr-2">✓</span>
                {strength}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">劣势 (Weaknesses)</h3>
          <ul className="space-y-2">
            {swotAnalysis.weaknesses.map((weakness, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700">
                <span className="text-red-600 mr-2">✗</span>
                {weakness}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">机会 (Opportunities)</h3>
          <ul className="space-y-2">
            {swotAnalysis.opportunities.map((opportunity, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700">
                <span className="text-blue-600 mr-2">→</span>
                {opportunity}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">威胁 (Threats)</h3>
          <ul className="space-y-2">
            {swotAnalysis.threats.map((threat, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700">
                <span className="text-orange-600 mr-2">⚠</span>
                {threat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InsightsAndRecommendations;