# YouTube Report Dashboard

A modern React application for displaying YouTube analytics and reporting data, similar to marketing dashboards.

## Features

- 📊 **Interactive Analytics Dashboard** - Overview metrics with trends and changes
- 📈 **Performance Charts** - Line charts for views, watch time, and subscriber growth
- 👥 **Audience Demographics** - Age groups, gender distribution, and geographic data
- 🎯 **Traffic Sources** - Pie chart showing where your audience comes from
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🎨 **Modern UI** - Built with Tailwind CSS and professional design
- 📊 **Data Visualization** - Powered by Recharts for beautiful charts

## Tech Stack

- **React 18** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Chart library
- **React Router** - Navigation (if needed)

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or copy the project files
2. Install dependencies:

```bash
cd react-youtube-report
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
react-youtube-report/
├── src/
│   ├── components/          # React components
│   │   ├── MetricsCard.tsx
│   │   ├── ChartCard.tsx
│   │   ├── OverviewMetrics.tsx
│   │   ├── ViewsChart.tsx
│   │   ├── DemographicsChart.tsx
│   │   ├── TrafficSourcesChart.tsx
│   │   └── TopVideosTable.tsx
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts
│   ├── data/               # Mock data and API utilities
│   │   └── mockData.ts
│   ├── App.tsx             # Main application component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── dist/                   # Built production files
└── package.json           # Project dependencies
```

## Components

### MetricsCard
Display key metrics with icons, values, and trend indicators.

### ChartCard
Wrapper component for charts with title and description.

### OverviewMetrics
Grid of key performance indicators for the YouTube channel.

### ViewsChart
Line chart showing daily performance metrics.

### DemographicsChart
Comprehensive demographic analysis with age, gender, and geographic data.

### TrafficSourcesChart
Pie chart displaying traffic source distribution.

### TopVideosTable
Sortable table of top-performing videos.

## Customization

### Data
The app uses mock data in `src/data/mockData.ts`. Replace this with your actual YouTube API data:

1. Set up YouTube Data API v3
2. Create components to fetch real data
3. Replace mock data with API responses

### Styling
- Modify `tailwind.config.js` for custom theme
- Update `src/index.css` for global styles
- Component-specific styles are in each component file

### Charts
- All charts are powered by Recharts
- Customize colors, tooltips, and legends in chart components
- Add new chart types as needed

## API Integration

To integrate with real YouTube data:

1. Get API credentials from Google Cloud Console
2. Install `axios` or `fetch` for API calls
3. Create API service files
4. Replace mock data with real API responses

Example API call structure:
```typescript
// src/services/youtubeApi.ts
export const getChannelAnalytics = async (channelId: string) => {
  const response = await axios.get(`/api/youtube/analytics/${channelId}`);
  return response.data;
};
```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

### Adding New Features

1. Create new components in `src/components/`
2. Define types in `src/types/`
3. Update data models if needed
4. Import and use in `App.tsx`

## Deployment

### Static Hosting
The built app can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

### Build and Deploy
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## License

This project is open source and available under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or issues, please create an issue in the project repository.