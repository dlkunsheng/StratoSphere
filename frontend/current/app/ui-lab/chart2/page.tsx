// pages/index.js
'use client';
import EChartsDynamicClient from '@/components/charts/EChartsDynamicClient';

export default function Home() {
  const chartOptions = {
    title: { text: 'Dynamic Client-side ECharts', left: 'center' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }],
  };

  return (
    <EChartsDynamicClient
      options={chartOptions}
      style={{ height: '400px', width: '100%' }}
    />
  );
}
