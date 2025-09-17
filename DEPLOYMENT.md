# GitHub Pages 部署指南

## 🚀 部署步骤

### 方法一：使用 GitHub Actions 自动部署

1. **创建 GitHub 仓库**
   ```bash
   # 在 GitHub 上创建新仓库，然后：
   git remote add origin https://github.com/你的用户名/youtube-analytics-dashboard.git
   git branch -M main
   git push -u origin main
   ```

2. **配置 GitHub Pages**
   - 进入仓库的 Settings 页面
   - 找到 Pages 部分
   - Source 选择 "GitHub Actions"
   - 使用下面的工作流配置

### 方法二：手动部署 dist 文件夹

1. **构建项目**
   ```bash
   npm run build
   ```

2. **部署到 gh-pages 分支**
   ```bash
   npm install -g gh-pages
   gh-pages -d dist
   ```

## 📝 GitHub Actions 工作流配置

创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build
      run: npm run build

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## 🔧 自定义域名配置

如果需要使用自定义域名：

1. **在仓库设置中配置**
   - Settings → Pages → Custom domain
   - 输入你的域名（如：analytics.yourdomain.com）

2. **配置 DNS**
   - 在你的域名提供商处添加 CNAME 记录
   - 指向 `你的用户名.github.io`

## 📊 功能特性

### ✅ 已实现功能
- **YouTube 数据可视化仪表板**
- **YesWelder 竞品分析报告**
- **交互式图表和性能指标**
- **受众分析和洞察**
- **AI 驱动的建议系统**
- **响应式设计**

### 🎯 技术栈
- **前端**: React 18 + TypeScript + Vite
- **样式**: Tailwind CSS
- **图表**: Recharts
- **构建**: Vite
- **部署**: GitHub Pages

## 📱 访问方式

部署完成后，你的应用将通过以下地址访问：

```
https://你的用户名.github.io/youtube-analytics-dashboard
```

## 🔄 更新部署

每次推送代码到 main 分支，GitHub Actions 会自动重新构建和部署：

```bash
git add .
git commit -m "更新内容描述"
git push origin main
```

## 🐛 故障排除

### 常见问题

1. **页面空白**
   - 检查浏览器控制台是否有错误
   - 确认所有资源路径正确

2. **图表不显示**
   - 确认 Recharts 库正确加载
   - 检查数据格式是否正确

3. **部署失败**
   - 检查 GitHub Actions 日志
   - 确认构建过程无错误

### 调试技巧

1. **本地预览**
   ```bash
   npm run preview
   ```

2. **检查构建输出**
   ```bash
   npm run build
   # 检查 dist 文件夹内容
   ```

3. **查看部署日志**
   - 仓库 → Actions → 查看部署日志

## 📈 性能优化

### 建议优化
1. **图片压缩**: 使用 WebP 格式
2. **代码分割**: 实现懒加载
3. **缓存策略**: 配置适当的缓存头
4. **CDN 加速**: 使用 GitHub Pages 的 CDN

### 监控
- Google Analytics 集成
- Vercel Analytics（如果使用 Vercel）
- GitHub Pages 内置统计

## 🎨 自定义说明

### 修改 YesWelder 数据
编辑 `src/data/yeswelderAnalysisData.ts` 文件：

```typescript
export const yeswelderChannel = {
  // 修改频道信息
  title: '你的频道名称',
  subscriberCount: 285000,
  // ... 其他数据
};
```

### 添加新的分析报告
1. 在 `src/data/` 目录创建新的数据文件
2. 在 `src/App.tsx` 中添加新的路由选项
3. 创建对应的分析组件

### 样式自定义
- 修改 `tailwind.config.js` 调整主题
- 编辑 `src/index.css` 添加全局样式
- 使用 Tailwind 类名进行样式调整

---

## 📞 支持

如果遇到问题，请：
1. 检查本文档的故障排除部分
2. 查看 GitHub Issues
3. 检查浏览器开发者工具

---

**祝你部署成功！** 🎉