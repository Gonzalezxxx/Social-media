import { ReportData } from '../types';

// 基于marketing.globaloneclick.net分析优化的数据结构
export interface EnhancedYouTubeAnalytics {
  overview: {
    totalViews: number;
    totalWatchTime: number;
    totalSubscribers: number;
    totalVideos: number;
    averageViewDuration: number;
    engagementRate: number;
    revenueEstimate: number;
    ctr: number; // Click-through rate
    audienceRetention: number;
  };
  contentPerformance: {
    topPerformingCategories: {
      category: string;
      views: number;
      engagement: number;
      revenue: number;
    }[];
    contentGapAnalysis: {
      topic: string;
      demand: number;
      competition: number;
      opportunity: number;
    }[];
    optimalPublishingTimes: {
      day: string;
      time: string;
      performance: number;
    }[];
  };
  advancedDemographics: {
    audienceInterests: { interest: string; affinity: number }[];
    viewerBehavior: {
      averageSessionDuration: number;
      videosPerSession: number;
      returnViewerRate: number;
    };
    deviceDistribution: {
      mobile: number;
      desktop: number;
      tablet: number;
      tv: number;
    };
  };
  monetization: {
    revenueStreams: {
      source: string;
      amount: number;
      growth: number;
    }[];
    rpm: number; // Revenue per mille
    sponsorshipOpportunities: {
      brand: string;
      fit: number;
      estimatedValue: number;
    }[];
  };
  competitiveIntelligence: {
    marketShare: number;
    competitivePosition: string;
    strategicAdvantages: string[];
    vulnerabilityAreas: string[];
  };
}

export const optimizedMarketingData: ReportData = {
  channel: {
    id: 'UC_marketing_pro_analytics',
    title: 'Marketing Analytics Pro',
    description: 'Advanced marketing analytics, digital strategy insights, and data-driven growth tactics for modern businesses.',
    customUrl: 'marketinganalyticspro',
    publishedAt: '2020-03-15T00:00:00Z',
    thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu8JxK7L4qG6kL5X-3QjQ9J5Z8X3W3Y3X3W3Y3X3W3Y3X3W3Y3X3W3Y3X3W3Y=s800-c-k-c0x00ffffff-no-rj',
    subscriberCount: 125000,
    videoCount: 268,
    viewCount: 8750000,
    country: 'US'
  },
  analytics: {
    overview: {
      totalViews: 8750000,
      totalWatchTime: 12500000,
      totalSubscribers: 125000,
      totalVideos: 268,
      averageViewDuration: 285,
      engagementRate: 12.8,
      revenueEstimate: 45000,
      ctr: 8.5,
      audienceRetention: 65
    },
    dailyStats: [
      { date: '2024-09-01', views: 45000, watchTime: 67500, subscribers: 380 },
      { date: '2024-09-02', views: 52000, watchTime: 78000, subscribers: 420 },
      { date: '2024-09-03', views: 48000, watchTime: 72000, subscribers: 395 },
      { date: '2024-09-04', views: 61000, watchTime: 91500, subscribers: 485 },
      { date: '2024-09-05', views: 72000, watchTime: 108000, subscribers: 580 },
      { date: '2024-09-06', views: 58000, watchTime: 87000, subscribers: 465 },
      { date: '2024-09-07', views: 85000, watchTime: 127500, subscribers: 680 },
      { date: '2024-09-08', views: 69000, watchTime: 103500, subscribers: 555 },
      { date: '2024-09-09', views: 78000, watchTime: 117000, subscribers: 625 },
      { date: '2024-09-10', views: 92000, watchTime: 138000, subscribers: 735 },
      { date: '2024-09-11', views: 65000, watchTime: 97500, subscribers: 520 },
      { date: '2024-09-12', views: 74000, watchTime: 111000, subscribers: 595 },
      { date: '2024-09-13', views: 88000, watchTime: 132000, subscribers: 710 },
      { date: '2024-09-14', views: 81000, watchTime: 121500, subscribers: 650 },
      { date: '2024-09-15', views: 95000, watchTime: 142500, subscribers: 765 },
      { date: '2024-09-16', views: 87000, watchTime: 130500, subscribers: 700 },
      { date: '2024-09-17', views: 98000, watchTime: 147000, subscribers: 790 }
    ],
    topVideos: [
      {
        id: 'marketing-analytics-2024',
        title: 'Marketing Analytics 2024: Complete Strategy Guide',
        description: 'Comprehensive guide to marketing analytics in 2024. Learn about the latest tools, techniques, and strategies for data-driven marketing.',
        thumbnail: 'https://i.ytimg.com/vi/marketing-analytics-2024/maxresdefault.jpg',
        publishedAt: '2024-08-20T00:00:00Z',
        duration: '32:45',
        viewCount: 485000,
        likeCount: 32500,
        commentCount: 2850,
        tags: ['marketing analytics', 'data-driven', 'strategy', '2024 trends'],
        categoryId: '26'
      },
      {
        id: 'google-ads-masterclass',
        title: 'Google Ads Masterclass: From Beginner to Pro',
        description: 'Complete Google Ads tutorial covering campaign setup, optimization, bidding strategies, and advanced techniques.',
        thumbnail: 'https://i.ytimg.com/vi/google-ads-masterclass/maxresdefault.jpg',
        publishedAt: '2024-08-15T00:00:00Z',
        duration: '45:20',
        viewCount: 385000,
        likeCount: 28500,
        commentCount: 2200,
        tags: ['Google Ads', 'PPC', 'digital advertising', 'tutorial'],
        categoryId: '26'
      },
      {
        id: 'social-media-algorithm',
        title: 'Social Media Algorithms Decoded: What Works in 2024',
        description: 'Deep dive into social media algorithms and how to optimize your content for maximum reach and engagement.',
        thumbnail: 'https://i.ytimg.com/vi/social-media-algorithm/maxresdefault.jpg',
        publishedAt: '2024-08-10T00:00:00Z',
        duration: '28:15',
        viewCount: 325000,
        likeCount: 23500,
        commentCount: 1850,
        tags: ['social media', 'algorithms', 'content strategy', 'engagement'],
        categoryId: '26'
      }
    ],
    audienceDemographics: {
      ageGroups: [
        { age: '18-24', percentage: 12 },
        { age: '25-34', percentage: 38 },
        { age: '35-44', percentage: 32 },
        { age: '45-54', percentage: 15 },
        { age: '55-64', percentage: 3 }
      ],
      gender: { male: 58, female: 41, other: 1 },
      topCountries: [
        { country: 'United States', views: 3500000, percentage: 40.0 },
        { country: 'United Kingdom', views: 875000, percentage: 10.0 },
        { country: 'Canada', views: 700000, percentage: 8.0 },
        { country: 'Australia', views: 525000, percentage: 6.0 },
        { country: 'Germany', views: 437500, percentage: 5.0 },
        { country: 'India', views: 350000, percentage: 4.0 },
        { country: 'Brazil', views: 262500, percentage: 3.0 }
      ]
    },
    trafficSources: [
      { source: 'YouTube Search', views: 3150000, percentage: 36.0 },
      { source: 'Browse Features', views: 1750000, percentage: 20.0 },
      { source: 'External', views: 1225000, percentage: 14.0 },
      { source: 'Suggested Videos', views: 875000, percentage: 10.0 },
      { source: 'Direct', views: 700000, percentage: 8.0 },
      { source: 'Playlist', views: 525000, percentage: 6.0 },
      { source: 'Other', views: 525000, percentage: 6.0 }
    ]
  },
  reportGenerated: new Date().toISOString(),
  reportPeriod: {
    start: '2024-09-01',
    end: '2024-09-17'
  }
};

// AI提示词模板 - 基于marketing.globaloneclick.net的分析
export const MARKETING_ANALYSIS_PROMPTS = {
  channelAnalysis: `
你是YouTube营销分析专家，请深度分析以下营销频道数据：

频道基本信息：
- 频道名称：{channelName}
- 订阅者：{subscribers}
- 总观看次数：{totalViews}
- 视频数量：{videoCount}
- 平均观看时长：{avgDuration}
- 参与度：{engagementRate}%

关键表现指标：
- CTR（点击率）：{ctr}%
- 观众留存率：{audienceRetention}%
- 预估收入：${revenueEstimate}

内容表现：
- 最佳表现类别：{topCategories}
- 内容空缺分析：{contentGaps}
- 最佳发布时间：{optimalTimes}

受众特征：
- 主要年龄群体：{primaryAgeGroup}
- 地理分布：{geoDistribution}
- 设备偏好：{devicePreferences}
- 观众兴趣：{audienceInterests}

请提供：
1. 营销效果深度分析
2. 受众行为洞察
3. 内容策略优化建议
4. 变现机会识别
5. 竞争态势评估

重点关注数据驱动的洞察和可执行的建议。
`,

  competitiveAnalysis: `
基于以下数据，进行YouTube营销频道竞争分析：

主要频道数据：
{primaryChannelData}

竞争对手数据：
{competitorData}

市场分析：
- 市场份额：{marketShare}
- 竞争位置：{competitivePosition}
- 战略优势：{advantages}
- 薄弱环节：{vulnerabilities}

请分析：
1. 竞争格局和定位
2. 差异化机会
3. 市场渗透策略
4. 增长预测
5. 风险评估

提供具体的竞争策略和行动计划。
`,

  contentStrategy: `
基于以下内容表现数据，制定YouTube内容策略：

内容表现分析：
{contentPerformance}

受众洞察：
{audienceInsights}

平台趋势：
{platformTrends}

请提供：
1. 内容主题规划
2. 发布策略优化
3. 格式和风格建议
4. SEO优化策略
5. 互动和社区建设策略

确保建议基于数据分析和最佳实践。
`,

  monetizationStrategy: `
基于以下变现数据，制定YouTube变现策略：

当前变现状况：
- 总收入：${totalRevenue}
- RPM：${rpm}
- 收入来源：{revenueSources}

赞助机会：
{sponsorshipData}

市场条件：
{marketConditions}

请提供：
1. 收入多元化策略
2. 赞助商开发计划
3. 会员和产品策略
4. RPM优化建议
5. 长期变现路径

重点关注可持续增长和风险控制。
`
};