export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  duration: string;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  tags: string[];
  categoryId: string;
}

export interface YouTubeChannel {
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
}

export interface YouTubeAnalytics {
  overview: {
    totalViews: number;
    totalWatchTime: number;
    totalSubscribers: number;
    totalVideos: number;
    averageViewDuration: number;
    engagementRate: number;
  };
  dailyStats: {
    date: string;
    views: number;
    watchTime: number;
    subscribers: number;
  }[];
  topVideos: YouTubeVideo[];
  audienceDemographics: {
    ageGroups: { age: string; percentage: number }[];
    gender: { male: number; female: number; other: number };
    topCountries: { country: string; views: number; percentage: number }[];
  };
  trafficSources: {
    source: string;
    views: number;
    percentage: number;
  }[];
}

export type Overview = YouTubeAnalytics['overview'];

export interface ReportData {
  channel: YouTubeChannel;
  analytics: YouTubeAnalytics;
  reportGenerated: string;
  reportPeriod: {
    start: string;
    end: string;
  };
}