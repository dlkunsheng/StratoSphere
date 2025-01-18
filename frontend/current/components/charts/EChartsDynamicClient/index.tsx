// components/EChartsDynamicClient.js
'use client';
import dynamic from 'next/dynamic';

const EChartsDynamicClient = dynamic(() => import('../EChartsClient'), {
  ssr: false, // 禁用服务端渲染
});

export default EChartsDynamicClient;
