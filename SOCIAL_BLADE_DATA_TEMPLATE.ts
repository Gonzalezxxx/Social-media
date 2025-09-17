// Social Blade 数据更新模板
// 请从 https://socialblade.com/youtube/handle/yeswelder 获取最新数据并填入此处

export interface SocialBladeData {
  channel: {
    name: string;
    subscribers: number;
    views: number;
    videos: number;
    joinedDate: string;
    country: string;
    category: string;
  };
  rankings: {
    globalRank: number;
    countryRank: number;
    categoryRank: number;
    subscriberRank: number;
    viewRank: number;
  };
  growth: {
    dailySubscribers: number;
    weeklySubscribers: number;
    monthlySubscribers: number;
    dailyViews: number;
    weeklyViews: number;
    monthlyViews: number;
  };
  earnings: {
    estimatedMin: number;
    estimatedMax: number;
    yearlyMin: number;
    yearlyMax: number;
  };
  audience: {
    ageGroups: Array<{
      age: string;
      percentage: number;
    }>;
    gender: {
      male: number;
      female: number;
    };
    countries: Array<{
      country: string;
      percentage: number;
    }>;
  };
}

// ======================
// YESWELDER 当前数据（需要从Social Blade更新）
// ======================
export const yeswelderSocialBladeData: SocialBladeData = {
  channel: {
    name: "YesWelder",
    subscribers: 158000, // ← 从Social Blade更新
    views: 28500000,    // ← 从Social Blade更新
    videos: 324,        // ← 从Social Blade更新
    joinedDate: "2018-06-12",
    country: "United States",
    category: "Howto & Style"
  },
  rankings: {
    globalRank: 0,      // ← 从Social Blade更新
    countryRank: 0,     // ← 从Social Blade更新
    categoryRank: 0,    // ← 从Social Blade更新
    subscriberRank: 0,  // ← 从Social Blade更新
    viewRank: 0         // ← 从Social Blade更新
  },
  growth: {
    dailySubscribers: 0,    // ← 从Social Blade更新
    weeklySubscribers: 0,    // ← 从Social Blade更新
    monthlySubscribers: 0,   // ← 从Social Blade更新
    dailyViews: 0,          // ← 从Social Blade更新
    weeklyViews: 0,         // ← 从Social Blade更新
    monthlyViews: 0         // ← 从Social Blade更新
  },
  earnings: {
    estimatedMin: 0,    // ← 从Social Blade更新
    estimatedMax: 0,    // ← 从Social Blade更新
    yearlyMin: 0,       // ← 从Social Blade更新
    yearlyMax: 0        // ← 从Social Blade更新
  },
  audience: {
    ageGroups: [
      { age: "18-24", percentage: 18 },
      { age: "25-34", percentage: 35 },
      { age: "35-44", percentage: 28 },
      { age: "45-54", percentage: 15 },
      { age: "55-64", percentage: 4 }
    ],
    gender: {
      male: 92,
      female: 7
    },
    countries: [
      { country: "United States", percentage: 50 },
      { country: "Canada", percentage: 10 },
      { country: "Australia", percentage: 7 },
      { country: "United Kingdom", percentage: 6 },
      { country: "Germany", percentage: 4 }
    ]
  }
};

// ======================
// 竞争对手数据（需要分别从Social Blade获取）
// ======================

export const competitorSocialBladeData = {
  lincolnElectric: {
    channel: {
      name: "Lincoln Electric",
      subscribers: 420000,  // ← 从Social Blade更新
      views: 68000000,     // ← 从Social Blade更新
      videos: 625,         // ← 从Social Blade更新
      joinedDate: "2008-03-05",
      country: "United States",
      category: "Howto & Style"
    },
    rankings: {
      globalRank: 0,      // ← 从Social Blade更新
      countryRank: 0,     // ← 从Social Blade更新
      categoryRank: 0,    // ← 从Social Blade更新
      subscriberRank: 0,  // ← 从Social Blade更新
      viewRank: 0         // ← 从Social Blade更新
    },
    growth: {
      dailySubscribers: 0,    // ← 从Social Blade更新
      monthlySubscribers: 0,   // ← 从Social Blade更新
      dailyViews: 0,          // ← 从Social Blade更新
      monthlyViews: 0         // ← 从Social Blade更新
    }
  },

  hobartWelding: {
    channel: {
      name: "Hobart Welding",
      subscribers: 420000,  // ← 从Social Blade更新
      views: 68000000,     // ← 从Social Blade更新
      videos: 612,         // ← 从Social Blade更新
      joinedDate: "2009-08-14",
      country: "United States",
      category: "Howto & Style"
    },
    rankings: {
      globalRank: 0,      // ← 从Social Blade更新
      countryRank: 0,     // ← 从Social Blade更新
      categoryRank: 0,    // ← 从Social Blade更新
      subscriberRank: 0,  // ← 从Social Blade更新
      viewRank: 0         // ← 从Social Blade更新
    },
    growth: {
      dailySubscribers: 0,    // ← 从Social Blade更新
      monthlySubscribers: 0,   // ← 从Social Blade更新
      dailyViews: 0,          // ← 从Social Blade更新
      monthlyViews: 0         // ← 从Social Blade更新
    }
  },

  millerElectric: {
    channel: {
      name: "Miller Electric",
      subscribers: 310000,  // ← 从Social Blade更新
      views: 42000000,     // ← 从Social Blade更新
      videos: 485,         // ← 从Social Blade更新
      joinedDate: "2010-11-23",
      country: "United States",
      category: "Howto & Style"
    },
    rankings: {
      globalRank: 0,      // ← 从Social Blade更新
      countryRank: 0,     // ← 从Social Blade更新
      categoryRank: 0,    // ← 从Social Blade更新
      subscriberRank: 0,  // ← 从Social Blade更新
      viewRank: 0         // ← 从Social Blade更新
    },
    growth: {
      dailySubscribers: 0,    // ← 从Social Blade更新
      monthlySubscribers: 0,   // ← 从Social Blade更新
      dailyViews: 0,          // ← 从Social Blade更新
      monthlyViews: 0         // ← 从Social Blade更新
    }
  },

  weldPro: {
    channel: {
      name: "WeldPro",
      subscribers: 195000,  // ← 从Social Blade更新
      views: 28000000,     // ← 从Social Blade更新
      videos: 324,         // ← 从Social Blade更新
      joinedDate: "2016-09-08",
      country: "United States",
      category: "Howto & Style"
    },
    rankings: {
      globalRank: 0,      // ← 从Social Blade更新
      countryRank: 0,     // ← 从Social Blade更新
      categoryRank: 0,    // ← 从Social Blade更新
      subscriberRank: 0,  // ← 从Social Blade更新
      viewRank: 0         // ← 从Social Blade更新
    },
    growth: {
      dailySubscribers: 0,    // ← 从Social Blade更新
      monthlySubscribers: 0,   // ← 从Social Blade更新
      dailyViews: 0,          // ← 从Social Blade更新
      monthlyViews: 0         // ← 从Social Blade更新
    }
  }
};

// ======================
// 数据更新函数
// ======================
export function updateDataFromSocialBlade() {
  // 使用步骤：
  // 1. 访问 https://socialblade.com/youtube/handle/yeswelder
  // 2. 获取YesWelder的最新数据并更新 yeswelderSocialBladeData
  // 3. 搜索竞争对手的Social Blade页面并更新对应数据
  // 4. 运行网站查看更新结果

  console.log("请从Social Blade获取最新数据并更新此文件");
}

// ======================
// Social Blade 链接列表
// ======================
export const socialBladeLinks = {
  yeswelder: "https://socialblade.com/youtube/handle/yeswelder",
  lincolnElectric: "https://socialblade.com/youtube/search/lincoln+electric",
  hobartWelding: "https://socialblade.com/youtube/search/hobart+welding",
  millerElectric: "https://socialblade.com/youtube/search/miller+electric",
  weldPro: "https://socialblade.com/youtube/search/weldpro"
};