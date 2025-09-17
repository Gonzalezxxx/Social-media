import { ReportData } from '../types';

export const mockChannelData = {
  id: 'UC_x5XG1OV2P6uZZ5FSM9Ttw',
  title: 'Google Developers',
  description: 'The official Google Developers channel. Videos from our events, tutorials, and updates.',
  customUrl: 'googledevelopers',
  publishedAt: '2007-08-23T00:00:00Z',
  thumbnail: 'https://yt3.ggpht.com/ytc/AMLnZu9V2k7L4qG6kL5X-3QjQ9J5Z8X3W3Y3X3W3Y3X3W3Y3X3W3Y3X3W3Y3X3W3Y=s800-c-k-c0x00ffffff-no-rj',
  subscriberCount: 2500000,
  videoCount: 5000,
  viewCount: 500000000,
  country: 'US'
};

export const mockAnalyticsData = {
  overview: {
    totalViews: 15432000,
    totalWatchTime: 24560000,
    totalSubscribers: 2500000,
    totalVideos: 5000,
    averageViewDuration: 185,
    engagementRate: 8.5
  },
  dailyStats: [
    { date: '2024-01-01', views: 45000, watchTime: 72000, subscribers: 1200 },
    { date: '2024-01-02', views: 52000, watchTime: 83000, subscribers: 1500 },
    { date: '2024-01-03', views: 48000, watchTime: 76000, subscribers: 1100 },
    { date: '2024-01-04', views: 61000, watchTime: 98000, subscribers: 1800 },
    { date: '2024-01-05', views: 58000, watchTime: 92000, subscribers: 1600 },
    { date: '2024-01-06', views: 55000, watchTime: 88000, subscribers: 1400 },
    { date: '2024-01-07', views: 67000, watchTime: 107000, subscribers: 2000 },
  ],
  topVideos: [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Introduction to TensorFlow 2.0',
      description: 'Learn the basics of TensorFlow 2.0 and how to build your first machine learning model.',
      thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
      publishedAt: '2024-01-15T00:00:00Z',
      duration: '15:42',
      viewCount: 1250000,
      likeCount: 85000,
      commentCount: 3200,
      tags: ['tensorflow', 'machine learning', 'AI', 'tutorial'],
      categoryId: '27'
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'Building Modern Web Apps with React',
      description: 'Complete guide to building modern web applications using React and modern tooling.',
      thumbnail: 'https://i.ytimg.com/vi/jNQXAC9IVRw/maxresdefault.jpg',
      publishedAt: '2024-01-10T00:00:00Z',
      duration: '22:18',
      viewCount: 980000,
      likeCount: 67000,
      commentCount: 2800,
      tags: ['react', 'javascript', 'web development', 'frontend'],
      categoryId: '27'
    },
    {
      id: 'M7lc1UVf-VE',
      title: 'Cloud Computing Best Practices',
      description: 'Learn best practices for cloud computing and scalable architecture design.',
      thumbnail: 'https://i.ytimg.com/vi/M7lc1UVf-VE/maxresdefault.jpg',
      publishedAt: '2024-01-08T00:00:00Z',
      duration: '18:35',
      viewCount: 750000,
      likeCount: 52000,
      commentCount: 2100,
      tags: ['cloud', 'aws', 'architecture', 'scalability'],
      categoryId: '27'
    }
  ],
  audienceDemographics: {
    ageGroups: [
      { age: '13-17', percentage: 8 },
      { age: '18-24', percentage: 22 },
      { age: '25-34', percentage: 35 },
      { age: '35-44', percentage: 20 },
      { age: '45-54', percentage: 10 },
      { age: '55-64', percentage: 4 },
      { age: '65+', percentage: 1 }
    ],
    gender: { male: 65, female: 32, other: 3 },
    topCountries: [
      { country: 'United States', views: 3200000, percentage: 35 },
      { country: 'India', views: 1800000, percentage: 20 },
      { country: 'United Kingdom', views: 900000, percentage: 10 },
      { country: 'Germany', views: 720000, percentage: 8 },
      { country: 'Canada', views: 540000, percentage: 6 }
    ]
  },
  trafficSources: [
    { source: 'YouTube Search', views: 5400000, percentage: 35 },
    { source: 'Browse Features', views: 3100000, percentage: 20 },
    { source: 'External', views: 2150000, percentage: 14 },
    { source: 'Direct', views: 1540000, percentage: 10 },
    { source: 'Suggested Videos', views: 1080000, percentage: 7 },
    { source: 'Other', views: 2150000, percentage: 14 }
  ]
};

export const mockReportData: ReportData = {
  channel: mockChannelData,
  analytics: mockAnalyticsData,
  reportGenerated: new Date().toISOString(),
  reportPeriod: {
    start: '2024-01-01',
    end: '2024-01-31'
  }
};