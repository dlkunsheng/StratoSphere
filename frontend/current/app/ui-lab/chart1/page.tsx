// pages/index.js
'use client';
import { Box, Heading } from '@chakra-ui/react';
import EChartsClient from '@/components/charts/EChartsClient';

export default function Home() {
  const chartOptions = {
    title: {
      text: 'Client-side ECharts',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '5%',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  return (
    <Box py={10} px={6}>
      <Heading as="h2" size="lg" mb={4}>
        Client-side ECharts Example
      </Heading>
      <EChartsClient options={chartOptions} style={{ height: '400px', width: '100%' }} />
    </Box>
  );
}
