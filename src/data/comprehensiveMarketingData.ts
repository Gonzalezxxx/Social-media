import { ReportData } from '../types';

// 完全对标marketing.globaloneclick.net的综合数据结构
export interface ComprehensiveYouTubeData {
  // 核心频道指标
  channel: {
    id: string;
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnail: string;
    subscriberCount: number;
    videoCount: number;
    viewCount: number;
    country: string;
    category: string;
    keywords: string[];
    isVerified: boolean;
    brandAccount: boolean;
  };

  // 详细分析数据
  analytics: {
    // 概览指标
    overview: {
      totalViews: number;
      totalWatchTime: number; // 分钟
      totalSubscribers: number;
      totalVideos: number;
      averageViewDuration: number; // 秒
      engagementRate: number; // 百分比
      ctr: number; // 点击率百分比
      audienceRetention: number; // 百分比
      revenueEstimate: number; // 预估收入
      rpm: number; // 每千次展示收入
      growthRate: number; // 增长率百分比
    };

    // 时间序列数据
    timeSeries: {
      daily: Array<{
        date: string;
        views: number;
        watchTime: number;
        subscribers: number;
        revenue: number;
        impressions: number;
        ctr: number;
        engagementRate: number;
      }>;
      weekly: Array<{
        week: string;
        views: number;
        watchTime: number;
        subscribers: number;
        revenue: number;
        avgEngagement: number;
      }>;
      monthly: Array<{
        month: string;
        views: number;
        watchTime: number;
        subscribers: number;
        revenue: number;
        growthRate: number;
      }>;
    };

    // 视频表现分析
    videoPerformance: {
      topVideos: Array<{
        id: string;
        title: string;
        description: string;
        thumbnail: string;
        publishedAt: string;
        duration: string;
        viewCount: number;
        likeCount: number;
        commentCount: number;
        shareCount: number;
        watchTime: number;
        ctr: number;
        engagementRate: number;
        revenueEstimate: number;
        tags: string[];
        categoryId: string;
        category: string;
      }>;
      worstPerforming: Array<{
        id: string;
        title: string;
        viewCount: number;
        engagementRate: number;
        issues: string[];
      }>;
      contentCategories: Array<{
        category: string;
        videoCount: number;
        totalViews: number;
        avgEngagement: number;
        avgWatchTime: number;
        revenueContribution: number;
      }>;
      publishTimeAnalysis: Array<{
        dayOfWeek: string;
        bestTime: string;
        avgViews: number;
        avgEngagement: number;
      }>;
    };

    // 受众深度分析
    audienceInsights: {
      demographics: {
        ageGroups: Array<{
          age: string;
          percentage: number;
          growth: number;
          engagement: number;
        }>;
        gender: {
          male: number;
          female: number;
          other: number;
          trends: {
            male: number;
            female: number;
            other: number;
          };
        };
        languages: Array<{
          language: string;
          percentage: number;
          engagement: number;
        }>;
      };

      geography: {
        countries: Array<{
          country: string;
          views: number;
          percentage: number;
          growth: number;
          engagement: number;
          revenue: number;
        }>;
        cities: Array<{
          city: string;
          country: string;
          views: number;
          percentage: number;
        }>;
        regions: Array<{
          region: string;
          views: number;
          percentage: number;
          growth: number;
        }>;
      };

      behavior: {
        devices: Array<{
          device: string;
          views: number;
          percentage: number;
          watchTime: number;
          engagement: number;
        }>;
        operatingSystems: Array<{
          os: string;
          percentage: number;
          engagement: number;
        }>;
        trafficSources: Array<{
          source: string;
          views: number;
          percentage: number;
          growth: number;
          engagement: number;
        }>;
        discoveryMethods: Array<{
          method: string;
          views: number;
          percentage: number;
          ctr: number;
        }>;
        viewingPatterns: {
          peakHours: Array<{
            hour: number;
            views: number;
            engagement: number;
          }>;
          peakDays: Array<{
            day: string;
            views: number;
            engagement: number;
          }>;
        };
      };

      interests: Array<{
        interest: string;
        affinity: number;
        engagement: number;
        growth: number;
      }>;
    };

    // 参与度分析
    engagement: {
      interactions: {
        likes: {
          total: number;
          rate: number;
          growth: number;
          topVideos: Array<{
            videoId: string;
            count: number;
            rate: number;
          }>;
        };
        comments: {
          total: number;
          rate: number;
          growth: number;
          sentiment: {
            positive: number;
            neutral: number;
            negative: number;
          };
        };
        shares: {
          total: number;
          rate: number;
          growth: number;
          platforms: Array<{
            platform: string;
            count: number;
            percentage: number;
          }>;
        };
        favorites: {
          total: number;
          rate: number;
          growth: number;
        };
      };

      retention: {
        audienceRetention: number;
        relativeRetention: number;
        dropOffPoints: Array<{
          timestamp: number;
          percentage: number;
          reason: string;
        }>;
      };

      community: {
        subscriberRetention: number;
        churnRate: number;
        returningViewers: number;
        newViewers: number;
      };
    };

    // 收入分析
    monetization: {
      revenueStreams: Array<{
        source: string;
        amount: number;
        percentage: number;
        growth: number;
      }>;
      metrics: {
        rpm: number;
        cpm: number;
        cpc: number;
        fillRate: number;
      };
      optimization: {
        topPerformingVideos: Array<{
          videoId: string;
          revenue: number;
          rpm: number;
          optimizationTips: string[];
        }>;
        underperformingVideos: Array<{
          videoId: string;
          revenue: number;
          rpm: number;
          issues: string[];
        }>;
      };
    };

    // SEO和发现分析
    seo: {
      keywords: Array<{
        keyword: string;
        position: number;
        views: number;
        growth: number;
        competition: number;
      }>;
      tags: Array<{
        tag: string;
        usage: number;
        performance: number;
      }>;
      thumbnails: Array<{
        videoId: string;
        ctr: number;
        performance: 'good' | 'average' | 'poor';
        recommendations: string[];
      }>;
    };
  };

  // 竞品分析
  competitive: {
    mainCompetitors: Array<{
      channel: {
        id: string;
        title: string;
        subscriberCount: number;
        videoCount: number;
        viewCount: number;
        category: string;
        country: string;
        publishedAt: string;
      };
      performance: {
        avgViewsPerVideo: number;
        engagementRate: number;
        growthRate: number;
        uploadFrequency: number;
        avgVideoLength: number;
        contentMix: Record<string, number>;
      };
      strengths: string[];
      weaknesses: string[];
      marketShare: number;
     竞争优势: string;
    }>;
    marketPosition: {
      rank: number;
      marketShare: number;
      competitiveGap: number;
      opportunities: string[];
      threats: string[];
    };
    benchmark: {
      industryAverage: {
        viewsPerVideo: number;
        engagementRate: number;
        growthRate: number;
        uploadFrequency: number;
      };
      topPerformers: Array<{
        metric: string;
        value: number;
        channel: string;
      }>;
    };
  };

  // AI分析洞察
  insights: {
    swotAnalysis: {
      strengths: Array<{
        area: string;
        description: string;
        impact: 'high' | 'medium' | 'low';
        data: any;
      }>;
      weaknesses: Array<{
        area: string;
        description: string;
        impact: 'high' | 'medium' | 'low';
        data: any;
      }>;
      opportunities: Array<{
        area: string;
        description: string;
        impact: 'high' | 'medium' | 'low';
        data: any;
      }>;
      threats: Array<{
        area: string;
        description: string;
        impact: 'high' | 'medium' | 'low';
        data: any;
      }>;
    };

    strategicRecommendations: Array<{
      category: 'content' | 'seo' | 'monetization' | 'audience' | 'competitive';
      priority: 'high' | 'medium' | 'low';
      title: string;
      description: string;
      expectedImpact: string;
      implementation: {
        timeline: string;
        cost: 'low' | 'medium' | 'high';
        resources: string[];
      };
      kpis: string[];
    }>;

    predictiveAnalytics: {
      growthForecast: Array<{
        period: string;
        projectedViews: number;
        projectedSubscribers: number;
        confidence: number;
      }>;
      trendAnalysis: Array<{
        metric: string;
        trend: 'increasing' | 'decreasing' | 'stable';
        magnitude: number;
        timeframe: string;
      }>;
      anomalyDetection: Array<{
        date: string;
        metric: string;
        deviation: number;
        likelyCause: string;
        severity: 'low' | 'medium' | 'high';
      }>;
    };

    contentStrategy: {
      optimalContent: {
        topics: Array<{
          topic: string;
          demand: number;
          competition: number;
          opportunity: number;
        }>;
        formats: Array<{
          format: string;
          performance: number;
          recommendation: string;
        }>;
        schedule: Array<{
          day: string;
          time: string;
          expectedPerformance: number;
        }>;
      };
      audienceInsights: {
        preferences: Array<{
          preference: string;
          strength: number;
          trend: 'increasing' | 'decreasing' | 'stable';
        }>;
        painPoints: Array<{
          point: string;
          frequency: number;
          opportunity: string;
        }>;
      };
    };
  };

  // 报告元数据
  metadata: {
    reportGenerated: string;
    reportPeriod: {
      start: string;
      end: string;
    };
    dataSource: string;
    confidence: number;
    limitations: string[];
  };
}

// AI提示词模板 - 完全对标marketing.globaloneclick.net
export const COMPREHENSIVE_ANALYSIS_PROMPTS = {
  channelAnalysis: `
作为YouTube营销分析专家，请深度分析以下YouTube频道的综合数据：

频道基础信息：
- 频道名称：{channelName}
- 类别：{category}
- 订阅者：{subscribers}
- 总观看次数：{totalViews}
- 视频数量：{videoCount}
- 建立时间：{sinceDate}
- 主要市场：{primaryMarket}

核心表现指标：
- 平均观看时长：{avgDuration}
- 参与度：{engagementRate}%
- 点击率：{ctr}%
- 观众留存率：{retentionRate}%
- 预估收入：${revenueEstimate}
- RPM：${rpm}
- 增长率：{growthRate}%

受众特征：
- 主要年龄群体：{primaryAgeGroup}
- 性别分布：{genderDistribution}
- 地理分布：{geoDistribution}
- 设备偏好：{devicePreferences}
- 兴趣标签：{interests}

内容表现：
- 最佳表现类别：{topCategories}
- 内容长度效果：{contentLengthPerformance}
- 发布时间效果：{publishTimePerformance}
- 关键词表现：{keywordPerformance}

竞争态势：
- 市场排名：{marketRank}
- 主要竞争对手：{mainCompetitors}
- 市场份额：{marketShare}
- 竞争优势：{competitiveAdvantages}

请提供全面的分析报告：
1. 整体表现评估（量化打分）
2. 受众行为深度分析
3. 内容策略效果评估
4. 竞争态势和定位分析
5. 收入表现和优化建议
6. 增长机会识别
7. 风险和挑战评估
8. 具体可执行的建议

请基于数据提供具体、可操作的建议，避免泛泛而谈。
`,

  contentStrategy: `
基于以下YouTube频道内容表现数据，制定内容策略：

内容类别表现：
{categoryPerformance}

视频长度分析：
{videoLengthAnalysis}

发布时间效果：
{publishTimeAnalysis}

关键词和SEO表现：
{seoPerformance}

受众偏好：
{audiencePreferences}

竞争对手内容策略：
{competitorContentStrategies}

请提供：
1. 内容主题规划和优先级
2. 视频格式和长度建议
3. 优化发布时间表
4. SEO和关键词策略
5. 缩略图和标题优化建议
6. 互动和社区建设策略
7. 内容预算分配建议

请确保建议基于具体数据，并提供预期效果和衡量指标。
`,

  competitiveAnalysis: `
基于以下竞争数据，进行YouTube频道竞争分析：

主要频道数据：
{primaryChannelData}

竞争对手数据：
{competitorData}

市场分析：
- 市场总规模：{marketSize}
- 市场份额分布：{marketShareDistribution}
- 增长趋势：{growthTrends}
- 竞争强度：{competitiveIntensity}

对标分析：
- 差距分析：{gapAnalysis}
- 优势对标：{strengthBenchmarking}
- 最佳实践：{bestPractices}

请分析：
1. 竞争格局和定位分析
2. 竞争优劣势评估
3. 差异化机会识别
4. 市场渗透策略
5. 增长预测和目标设定
6. 竞争应对策略
7. 长期竞争优势建设

请提供数据驱动的竞争策略和具体的行动计划。
`,

  monetizationStrategy: `
基于以下变现数据，制定YouTube变现策略：

当前变现状况：
- 总收入：${totalRevenue}
- RPM：${rpm}
- 收入来源分布：{revenueSources}
- 广告表现：{adPerformance}

内容变现效果：
{contentMonetizationPerformance}

受众商业价值：
{audienceCommercialValue}

市场竞争对标：
{competitorMonetizationBenchmark}

请提供：
1. 收入多元化策略
2. RPM优化方案
3. 广告设置优化建议
4. 会员和赞助开发计划
5. 衍生产品和服务机会
6. 商业合作策略
7. 长期变现路径规划

请重点关注ROI和可持续性，提供具体实施步骤和预期收益。
`,

  audienceGrowth: `
基于以下受众数据，制定受众增长策略：

当前受众状况：
- 总订阅者：{currentSubscribers}
- 增长率：{growthRate}
- 留存率：{retentionRate}
- 流失率：{churnRate}

受众获取分析：
{acquisitionAnalysis}

受众行为洞察：
{behavioralInsights}

竞争对手受众策略：
{competitorAudienceStrategies}

请提供：
1. 受众获取策略
2. 受众留存和活跃度提升方案
3. 受众细分和精准定位
4. 社区建设策略
5. 内容个性化建议
6. 互动和参与度提升
7. 受众价值最大化策略

请确保建议基于具体数据，并提供可衡量的目标。
`,

  predictiveAnalytics: `
基于以下历史数据和趋势，进行预测性分析：

历史表现数据：
{historicalData}

当前趋势：
{currentTrends}

市场环境：
{marketEnvironment}

季节性因素：
{seasonalFactors}

请提供：
1. 未来6-12个月的增长预测
2. 关键指标趋势分析
3. 潜在机会和风险识别
4. 异常检测和预警
5. 资源配置建议
6. 目标设定和里程碑
7. 应对策略和预案

请使用统计模型和机器学习方法，提供置信度评估。
`
};

// 示例数据生成函数
export function generateComprehensiveYesWelderData(): ComprehensiveYouTubeData {
  // 这里会生成完整的YesWelder综合数据
  // 为了简洁，这里只展示结构，实际实现会填充具体数据
  return {
    channel: {
      id: 'UC_yeswelder_official',
      title: 'YesWelder',
      description: 'Professional welding equipment and tutorials. YesWelder provides high-quality welding machines, accessories, and expert guidance for welders of all skill levels.',
      customUrl: 'yeswelder',
      publishedAt: '2018-06-12T00:00:00Z',
      thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu8JxK7L4qG6kL5X-3QjQ9J5Z8X3W3Y3X3W3Y3X3W3Y3X3W3Y3X3W3Y3X3W3Y=s800-c-k-c0x00ffffff-no-rj',
      subscriberCount: 285000,
      videoCount: 486,
      viewCount: 45000000,
      country: 'US',
      category: 'Howto & Style',
      keywords: ['welding', 'welding equipment', 'welding tutorial', 'metalworking', 'fabrication'],
      isVerified: false,
      brandAccount: true
    },
    analytics: {
      overview: {
        totalViews: 45000000,
        totalWatchTime: 125000000,
        totalSubscribers: 285000,
        totalVideos: 486,
        averageViewDuration: 285,
        engagementRate: 8.7,
        ctr: 6.5,
        audienceRetention: 65,
        revenueEstimate: 225000,
        rpm: 5.00,
        growthRate: 12.5
      },
      timeSeries: {
        daily: [],
        weekly: [],
        monthly: []
      },
      videoPerformance: {
        topVideos: [],
        worstPerforming: [],
        contentCategories: [],
        publishTimeAnalysis: []
      },
      audienceInsights: {
        demographics: {
          ageGroups: [],
          gender: { male: 92, female: 7, other: 1, trends: { male: 0, female: 0, other: 0 } },
          languages: []
        },
        geography: {
          countries: [],
          cities: [],
          regions: []
        },
        behavior: {
          devices: [],
          operatingSystems: [],
          trafficSources: [],
          discoveryMethods: [],
          viewingPatterns: { peakHours: [], peakDays: [] }
        },
        interests: []
      },
      engagement: {
        interactions: {
          likes: { total: 0, rate: 0, growth: 0, topVideos: [] },
          comments: { total: 0, rate: 0, growth: 0, sentiment: { positive: 0, neutral: 0, negative: 0 } },
          shares: { total: 0, rate: 0, growth: 0, platforms: [] },
          favorites: { total: 0, rate: 0, growth: 0 }
        },
        retention: {
          audienceRetention: 0,
          relativeRetention: 0,
          dropOffPoints: []
        },
        community: {
          subscriberRetention: 0,
          churnRate: 0,
          returningViewers: 0,
          newViewers: 0
        }
      },
      monetization: {
        revenueStreams: [],
        metrics: { rpm: 0, cpm: 0, cpc: 0, fillRate: 0 },
        optimization: {
          topPerformingVideos: [],
          underperformingVideos: []
        }
      },
      seo: {
        keywords: [],
        tags: [],
        thumbnails: []
      }
    },
    competitive: {
      mainCompetitors: [],
      marketPosition: {
        rank: 0,
        marketShare: 0,
        competitiveGap: 0,
        opportunities: [],
        threats: []
      },
      benchmark: {
        industryAverage: {
          viewsPerVideo: 0,
          engagementRate: 0,
          growthRate: 0,
          uploadFrequency: 0
        },
        topPerformers: []
      }
    },
    insights: {
      swotAnalysis: {
        strengths: [],
        weaknesses: [],
        opportunities: [],
        threats: []
      },
      strategicRecommendations: [],
      predictiveAnalytics: {
        growthForecast: [],
        trendAnalysis: [],
        anomalyDetection: []
      },
      contentStrategy: {
        optimalContent: {
          topics: [],
          formats: [],
          schedule: []
        },
        audienceInsights: {
          preferences: [],
          painPoints: []
        }
      }
    },
    metadata: {
      reportGenerated: new Date().toISOString(),
      reportPeriod: {
        start: '2025-08-01',
        end: '2025-08-17'
      },
      dataSource: 'YouTube Data API v3 + Third-Party Analytics',
      confidence: 0.92,
      limitations: []
    }
  };
}