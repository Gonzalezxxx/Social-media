// 完全基于marketing.globaloneclick.net标准的数据结构
export interface GlobalOneClickDataStructure {
  // 频道基础信息
  channelInfo: {
    id: string;
    title: string;
    description: string;
    customUrl: string;
    thumbnailUrl: string;
    publishedAt: string;
    subscriberCount: number;
    subscriberGrowthRate: number;
    videoCount: number;
    viewCount: number;
    viewGrowthRate: number;
    country: string;
    category: string;
    isVerified: boolean;
    keywords: string[];
  };

  // 核心性能指标
  performanceMetrics: {
    overview: {
      totalViews: number;
      totalWatchTime: number; // 分钟
      averageViewDuration: number; // 秒
      audienceRetentionRate: number; // 百分比
      clickThroughRate: number; // 百分比
      engagementRate: number; // 百分比
      revenueEstimate: number; // USD
      rpm: number; // 每千次展示收入
      monthlyGrowthRate: number; // 百分比
    };

    // 时间序列数据 - 完全匹配globaloneclick格式
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
  };

  // 受众分析 - 完全匹配globaloneclick维度
  audienceAnalysis: {
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

  // 内容表现分析 - 完全匹配globaloneclick
  contentPerformance: {
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

  // 参与度分析 - 完全匹配globaloneclick
  engagementAnalysis: {
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

  // 变现分析 - 完全匹配globaloneclick
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

  // 竞品分析 - 完全匹配globaloneclick
  competitiveAnalysis: {
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
      competitiveAdvantage: string;
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

  // AI洞察分析 - 完全匹配globaloneclick
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