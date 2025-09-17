#!/usr/bin/env python3
"""
Social Blade数据收集工具
专门用于获取YesWelder及其竞争对手的YouTube统计数据
"""

import asyncio
import json
import re
import time
from datetime import datetime
from pathlib import Path
from typing import Dict, List, Any, Optional, Tuple
from urllib.parse import urljoin, urlparse

from playwright.async_api import async_playwright, Page, Browser, BrowserContext
import pandas as pd


class SocialBladeDataCollector:
    """Social Blade专用数据收集器"""

    def __init__(self):
        self.base_url = "https://socialblade.com"
        self.output_dir = Path("socialblade_data")
        self.output_dir.mkdir(exist_ok=True)

        # 目标频道列表
        self.target_channels = {
            'yeswelder': {
                'url': '/youtube/handle/yeswelder',
                'name': 'YesWelder',
                'category': 'Target'
            },
            'lincoln_electric': {
                'url': '/youtube/user/lincolnelectric',
                'name': 'Lincoln Electric',
                'category': 'Competitor'
            },
            'hobart_welding': {
                'url': '/youtube/user/hobartwelding',
                'name': 'Hobart Welding',
                'category': 'Competitor'
            },
            'miller_electric': {
                'url': '/youtube/user/millerwelders',
                'name': 'Miller Electric',
                'category': 'Competitor'
            },
            'weldpro': {
                'url': '/youtube/handle/weldpro',
                'name': 'WeldPro',
                'category': 'Competitor'
            }
        }

        # 反检测配置
        self.user_agents = [
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        ]

    async def setup_browser(self, playwright) -> Tuple[Browser, BrowserContext]:
        """设置反检测浏览器"""
        browser = await playwright.chromium.launch(
            headless=True,
            args=[
                '--disable-blink-features=AutomationControlled',
                '--disable-dev-shm-usage',
                '--no-sandbox',
                '--disable-setuid-sandbox'
            ]
        )

        context = await browser.new_context(
            user_agent=self.user_agents[0],
            viewport={'width': 1920, 'height': 1080},
            extra_http_headers={
                'Accept-Language': 'en-US,en;q=0.9',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Encoding': 'gzip, deflate, br',
                'DNT': '1',
                'Connection': 'keep-alive',
                'Upgrade-Insecure-Requests': '1',
                'Referer': 'https://www.google.com/',
            },
            java_script_enabled=True
        )

        # 绕过webdriver检测
        await context.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined,
            });

            Object.defineProperty(navigator, 'plugins', {
                get: () => [
                    {
                        0: {type: "application/x-google-chrome-pdf"},
                        description: "Portable Document Format",
                        filename: "internal-pdf-viewer",
                        length: 1,
                        name: "Chrome PDF Plugin"
                    }
                ],
            });

            Object.defineProperty(navigator, 'languages', {
                get: () => ['en-US', 'en'],
            });
        """)

        return browser, context

    async def wait_for_content(self, page: Page, timeout: int = 30000) -> bool:
        """等待页面内容加载完成"""
        try:
            # 等待主要内容区域
            await page.wait_for_selector('.user-info, .YouTubeUserTopInfo, .content, #main-content', timeout=timeout)

            # 等待加载动画消失
            await page.wait_for_timeout(2000)

            # 检查是否有实际内容
            content = await page.evaluate("""() => {
                const mainContent = document.querySelector('.user-info, .YouTubeUserTopInfo, .content, #main-content');
                return mainContent && mainContent.innerText.length > 100;
            }""")

            if not content:
                print("⚠️ 页面内容加载不完整，继续等待...")
                await page.wait_for_timeout(3000)

            return True

        except Exception as e:
            print(f"⚠️ 等待内容加载超时: {e}")
            return False

    async def extract_socialblade_data(self, page: Page, channel_name: str) -> Dict[str, Any]:
        """提取Social Blade数据"""
        try:
            # 等待数据加载
            await self.wait_for_content(page)

            # 提取基本信息
            basic_info = await page.evaluate("""() => {
                const data = {};

                // 提取频道名称
                const nameElement = document.querySelector('h1, .user-name, .channel-name, .YouTubeUserTopInfo h1');
                data.channel_name = nameElement ? nameElement.innerText.trim() : 'Unknown';

                // 提取订阅者数量
                const subscriberElements = document.querySelectorAll('.subscribers, .youtube-subscribers, [data-stat="subscribers"]');
                subscriberElements.forEach(el => {
                    const text = el.innerText.trim();
                    if (text && /subscribers?/i.test(text)) {
                        data.subscribers = text;
                    }
                });

                // 提取观看次数
                const viewElements = document.querySelectorAll('.views, .youtube-views, [data-stat="views"]');
                viewElements.forEach(el => {
                    const text = el.innerText.trim();
                    if (text && /views?/i.test(text)) {
                        data.views = text;
                    }
                });

                // 提取视频数量
                const videoElements = document.querySelectorAll('.videos, .youtube-videos, [data-stat="videos"]');
                videoElements.forEach(el => {
                    const text = el.innerText.trim();
                    if (text && /videos?/i.test(text)) {
                        data.videos = text;
                    }
                });

                // 提取国家/地区
                const countryElement = document.querySelector('.country, .location, .user-country');
                data.country = countryElement ? countryElement.innerText.trim() : 'Unknown';

                // 提取频道类型
                const typeElement = document.querySelector('.channel-type, .user-type');
                data.channel_type = typeElement ? typeElement.innerText.trim() : 'Unknown';

                // 提取加入日期
                const joinedElement = document.querySelector('.joined, .user-date, .channel-created');
                data.joined_date = joinedElement ? joinedElement.innerText.trim() : 'Unknown';

                return data;
            }""")

            # 提取统计数据
            stats_data = await page.evaluate("""() => {
                const stats = {};

                // 查找所有统计数据
                const statElements = document.querySelectorAll('.stat, .stat-item, .data-point, .metric');
                statElements.forEach(el => {
                    const label = el.querySelector('.label, .stat-label, .data-label') || el;
                    const value = el.querySelector('.value, .stat-value, .data-value') || el;

                    const labelText = label.innerText.trim();
                    const valueText = value.innerText.trim();

                    if (labelText && valueText && labelText !== valueText) {
                        stats[labelText] = valueText;
                    }
                });

                return stats;
            }""")

            # 提取增长率数据
            growth_data = await page.evaluate("""() => {
                const growth = {};

                // 查找增长率相关数据
                const growthElements = document.querySelectorAll('.growth, .growth-rate, .change, .trend');
                growthElements.forEach(el => {
                    const text = el.innerText.trim();
                    if (text && /%|\+|\-|growth|change|trend/i.test(text)) {
                        growth[text] = text;
                    }
                });

                return growth;
            }""")

            # 提取估值和收入数据
            financial_data = await page.evaluate("""() => {
                const financial = {};

                // 查找估值和收入相关数据
                const financialElements = document.querySelectorAll('.estimated, .valuation, .revenue, .income, .earnings');
                financialElements.forEach(el => {
                    const text = el.innerText.trim();
                    if (text && /(\$|€|£|¥|estimated|valuation|revenue|income|earnings)/i.test(text)) {
                        financial[text] = text;
                    }
                });

                return financial;
            }""")

            # 提取排名数据
            ranking_data = await page.evaluate("""() => {
                const ranking = {};

                // 查找排名相关数据
                const rankingElements = document.querySelectorAll('.rank, .ranking, .position, .ranked');
                rankingElements.forEach(el => {
                    const text = el.innerText.trim();
                    if (text && /rank|position|#/i.test(text)) {
                        ranking[text] = text;
                    }
                });

                return ranking;
            }""")

            # 提取图表数据
            charts_data = await page.evaluate("""() => {
                const charts = {};

                // 查找图表相关的数据
                const chartElements = document.querySelectorAll('.chart, .graph, .stats-chart, .growth-chart');
                chartElements.forEach((el, index) => {
                    charts[`chart_${index}`] = {
                        className: el.className,
                        innerText: el.innerText,
                        dataAttributes: {}
                    };

                    // 提取数据属性
                    el.getAttributeNames().forEach(attr => {
                        if (attr.startsWith('data-')) {
                            charts[`chart_${index}`].dataAttributes[attr] = el.getAttribute(attr);
                        }
                    });
                });

                return charts;
            }""")

            # 组合所有数据
            extracted_data = {
                'channel_name': channel_name,
                'basic_info': basic_info,
                'stats': stats_data,
                'growth': growth_data,
                'financial': financial_data,
                'ranking': ranking_data,
                'charts': charts_data,
                'url': page.url,
                'scraped_at': datetime.now().isoformat()
            }

            return extracted_data

        except Exception as e:
            print(f"❌ 提取{channel_name}数据时出错: {e}")
            return {}

    async def capture_screenshot(self, page: Page, filename: str) -> Optional[str]:
        """截取页面截图"""
        try:
            screenshot_path = self.output_dir / f"{filename}.png"
            await page.screenshot(path=str(screenshot_path), full_page=True)
            print(f"📸 页面截图已保存: {screenshot_path}")
            return str(screenshot_path)
        except Exception as e:
            print(f"❌ 截图失败: {e}")
            return None

    async def scrape_channel(self, channel_key: str, channel_info: Dict[str, str]) -> Dict[str, Any]:
        """爬取单个频道数据"""
        print(f"🔍 开始爬取 {channel_info['name']} ({channel_key})...")

        async with async_playwright() as playwright:
            browser, context = await self.setup_browser(playwright)

            try:
                page = await context.new_page()
                page.set_default_timeout(30000)

                # 构建URL
                url = urljoin(self.base_url, channel_info['url'])
                print(f"📍 访问: {url}")

                # 访问页面
                await page.goto(url, wait_until="networkidle")

                # 等待内容加载
                print("⏳ 等待页面内容加载...")
                if not await self.wait_for_content(page):
                    print("⚠️ 页面可能加载不完全，继续尝试提取数据...")

                # 提取数据
                print("📊 提取Social Blade数据...")
                channel_data = await self.extract_socialblade_data(page, channel_info['name'])

                # 截图
                timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
                screenshot_path = await self.capture_screenshot(page, f"{channel_key}_{timestamp}")

                if screenshot_path:
                    channel_data['screenshot'] = screenshot_path

                # 添加元数据
                channel_data['channel_key'] = channel_key
                channel_data['channel_category'] = channel_info['category']
                channel_data['target_url'] = url

                return channel_data

            except Exception as e:
                print(f"❌ 爬取{channel_info['name']}时出错: {e}")
                return {}
            finally:
                await browser.close()

    def parse_numeric_value(self, value_str: str) -> float:
        """解析数字字符串（如 1.2M, 345K, 1,234）"""
        if not value_str:
            return 0

        # 移除逗号和空格
        clean_str = value_str.replace(',', '').strip()

        # 匹配数字部分
        match = re.match(r'^([0-9.]+)([KMB]?)$', clean_str.upper())
        if not match:
            return 0

        number, suffix = match.groups()
        num_value = float(number)

        # 处理后缀
        if suffix == 'K':
            num_value *= 1000
        elif suffix == 'M':
            num_value *= 1000000
        elif suffix == 'B':
            num_value *= 1000000000

        return num_value

    def process_channel_data(self, raw_data: Dict[str, Any]) -> Dict[str, Any]:
        """处理原始数据，提取关键指标"""
        if not raw_data:
            return {}

        processed = {
            'channel_key': raw_data.get('channel_key'),
            'channel_name': raw_data.get('channel_name'),
            'channel_category': raw_data.get('channel_category'),
            'scraped_at': raw_data.get('scraped_at'),
            'url': raw_data.get('url'),
            'target_url': raw_data.get('target_url')
        }

        # 处理基本信息
        basic_info = raw_data.get('basic_info', {})
        processed['basic_info'] = basic_info

        # 解析订阅者数量
        subscribers = basic_info.get('subscribers', '')
        processed['subscribers_raw'] = subscribers
        processed['subscribers_count'] = self.parse_numeric_value(subscribers)

        # 解析观看次数
        views = basic_info.get('views', '')
        processed['views_raw'] = views
        processed['views_count'] = self.parse_numeric_value(views)

        # 解析视频数量
        videos = basic_info.get('videos', '')
        processed['videos_raw'] = videos
        processed['videos_count'] = self.parse_numeric_value(videos)

        # 处理统计数据
        stats = raw_data.get('stats', {})
        processed['stats'] = stats

        # 处理增长率数据
        growth = raw_data.get('growth', {})
        processed['growth'] = growth

        # 处理财务数据
        financial = raw_data.get('financial', {})
        processed['financial'] = financial

        # 处理排名数据
        ranking = raw_data.get('ranking', {})
        processed['ranking'] = ranking

        # 处理图表数据
        charts = raw_data.get('charts', {})
        processed['charts'] = charts

        return processed

    def save_channel_data(self, channel_data: Dict[str, Any]) -> str:
        """保存频道数据"""
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
        channel_key = channel_data.get('channel_key', 'unknown')

        # 保存JSON格式
        json_file = self.output_dir / f"{channel_key}_{timestamp}.json"
        with open(json_file, 'w', encoding='utf-8') as f:
            json.dump(channel_data, f, indent=2, ensure_ascii=False)

        # 保存处理后的CSV格式
        processed_data = self.process_channel_data(channel_data)
        if processed_data:
            csv_file = self.output_dir / f"{channel_key}_processed_{timestamp}.csv"

            # 创建DataFrame
            df_data = {
                'channel_key': [processed_data.get('channel_key')],
                'channel_name': [processed_data.get('channel_name')],
                'channel_category': [processed_data.get('channel_category')],
                'subscribers_count': [processed_data.get('subscribers_count')],
                'subscribers_raw': [processed_data.get('subscribers_raw')],
                'views_count': [processed_data.get('views_count')],
                'views_raw': [processed_data.get('views_raw')],
                'videos_count': [processed_data.get('videos_count')],
                'videos_raw': [processed_data.get('videos_raw')],
                'scraped_at': [processed_data.get('scraped_at')],
                'url': [processed_data.get('url')]
            }

            df = pd.DataFrame(df_data)
            df.to_csv(csv_file, index=False, encoding='utf-8')
            print(f"📊 CSV数据已保存: {csv_file}")

        print(f"✅ {channel_key}数据已保存: {json_file}")
        return str(json_file)

    async def scrape_all_channels(self) -> Dict[str, Any]:
        """爬取所有目标频道"""
        print("🚀 开始Social Blade数据收集...")
        print("=" * 60)

        all_data = {}
        successful_channels = []
        failed_channels = []

        for channel_key, channel_info in self.target_channels.items():
            try:
                print(f"\n📡 处理频道: {channel_info['name']}")
                print("-" * 40)

                # 爬取频道数据
                channel_data = await self.scrape_channel(channel_key, channel_info)

                if channel_data:
                    # 保存数据
                    saved_file = self.save_channel_data(channel_data)
                    all_data[channel_key] = channel_data
                    successful_channels.append(channel_key)
                    print(f"✅ {channel_info['name']} 数据收集成功")
                else:
                    failed_channels.append(channel_key)
                    print(f"❌ {channel_info['name']} 数据收集失败")

                # 短暂延迟，避免被封
                await asyncio.sleep(2)

            except Exception as e:
                failed_channels.append(channel_key)
                print(f"❌ {channel_info['name']} 处理出错: {e}")

        # 保存汇总数据
        summary = {
            'scraped_at': datetime.now().isoformat(),
            'total_channels': len(self.target_channels),
            'successful_channels': successful_channels,
            'failed_channels': failed_channels,
            'success_rate': len(successful_channels) / len(self.target_channels) * 100,
            'channels_data': all_data
        }

        summary_file = self.output_dir / f"socialblade_summary_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        with open(summary_file, 'w', encoding='utf-8') as f:
            json.dump(summary, f, indent=2, ensure_ascii=False)

        print(f"\n📋 汇总数据已保存: {summary_file}")

        # 打印摘要
        print("\n📊 数据收集摘要:")
        print(f"   总频道数: {summary['total_channels']}")
        print(f"   成功收集: {len(successful_channels)}")
        print(f"   失败频道: {len(failed_channels)}")
        print(f"   成功率: {summary['success_rate']:.1f}%")

        if failed_channels:
            print(f"   失败频道: {', '.join(failed_channels)}")

        return summary

    def generate_competitive_analysis(self, summary_data: Dict[str, Any]) -> str:
        """生成竞品分析报告"""
        channels_data = summary_data.get('channels_data', {})

        if not channels_data:
            return "无可用数据进行竞品分析"

        # 处理数据以便分析
        processed_channels = {}
        for channel_key, raw_data in channels_data.items():
            processed = self.process_channel_data(raw_data)
            if processed:
                processed_channels[channel_key] = processed

        if not processed_channels:
            return "无有效数据进行竞品分析"

        # 生成分析报告
        report = []
        report.append("# Social Blade竞品分析报告")
        report.append(f"生成时间: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
        report.append("")

        # 基本统计
        report.append("## 基本统计")
        report.append("")

        for channel_key, data in processed_channels.items():
            report.append(f"### {data.get('channel_name', channel_key)}")
            report.append(f"- 订阅者: {data.get('subscribers_raw', 'N/A')} ({data.get('subscribers_count', 0):,})")
            report.append(f"- 观看次数: {data.get('views_raw', 'N/A')} ({data.get('views_count', 0):,})")
            report.append(f"- 视频数量: {data.get('videos_raw', 'N/A')} ({data.get('videos_count', 0):,})")
            report.append("")

        # 排名分析
        report.append("## 排名分析")
        report.append("")

        # 按订阅者排序
        sorted_by_subscribers = sorted(processed_channels.items(), key=lambda x: x[1].get('subscribers_count', 0), reverse=True)

        report.append("### 订阅者排名")
        for i, (channel_key, data) in enumerate(sorted_by_subscribers, 1):
            report.append(f"{i}. {data.get('channel_name', channel_key)}: {data.get('subscribers_raw', 'N/A')}")
        report.append("")

        # 按观看次数排序
        sorted_by_views = sorted(processed_channels.items(), key=lambda x: x[1].get('views_count', 0), reverse=True)

        report.append("### 观看次数排名")
        for i, (channel_key, data) in enumerate(sorted_by_views, 1):
            report.append(f"{i}. {data.get('channel_name', channel_key)}: {data.get('views_raw', 'N/A')}")
        report.append("")

        # 对比分析
        if len(processed_channels) > 1:
            report.append("## 对比分析")
            report.append("")

            # 找到目标频道
            target_channel = processed_channels.get('yeswelder')
            if target_channel:
                report.append("### YesWelder vs 竞争对手")
                report.append("")

                target_subs = target_channel.get('subscribers_count', 0)
                target_views = target_channel.get('views_count', 0)

                for channel_key, data in processed_channels.items():
                    if channel_key != 'yeswelder':
                        subs_ratio = (data.get('subscribers_count', 0) / target_subs * 100) if target_subs > 0 else 0
                        views_ratio = (data.get('views_count', 0) / target_views * 100) if target_views > 0 else 0

                        report.append(f"#### {data.get('channel_name', channel_key)}")
                        report.append(f"- 订阅者比例: {subs_ratio:.1f}%")
                        report.append(f"- 观看次数比例: {views_ratio:.1f}%")
                        report.append("")

        # 保存报告
        report_content = "\n".join(report)
        report_file = self.output_dir / f"competitive_analysis_{datetime.now().strftime('%Y%m%d_%H%M%S')}.md"

        with open(report_file, 'w', encoding='utf-8') as f:
            f.write(report_content)

        print(f"📋 竞品分析报告已保存: {report_file}")

        return report_content

    async def run(self) -> Dict[str, Any]:
        """运行数据收集器"""
        print("🎯 Social Blade数据收集器启动")
        print("=" * 60)

        # 执行数据收集
        summary_data = await self.scrape_all_channels()

        if summary_data.get('channels_data'):
            # 生成竞品分析报告
            analysis_report = self.generate_competitive_analysis(summary_data)
            summary_data['analysis_report'] = analysis_report

            print("\n🎉 Social Blade数据收集完成！")
            print(f"📁 数据文件位置: {self.output_dir}")
        else:
            print("❌ 数据收集失败")

        return summary_data


async def main():
    """主函数"""
    collector = SocialBladeDataCollector()
    await collector.run()


if __name__ == "__main__":
    asyncio.run(main())