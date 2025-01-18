// pages/dynamicChart.js
'use client';
import React, { useState } from 'react';
import { Box, Button, Heading } from '@chakra-ui/react';
import EChartsClient from '@/components/charts/EChartsClient';

export default function DynamicChart() {
  const [data, setData] = useState([820, 932, 901, 934, 1290, 1330, 1320]);

  const updateData = () => {
    setData(data.map(value => value + Math.floor(Math.random() * 100 - 50)));
  };

  const chartOptions = {
    title: { text: 'Dynamic Data', left: 'center' },
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data, type: 'line' }],
  };

  return (
    <Box py={10} px={6}>
      <Heading as="h2" size="lg" mb={4}>
        Dynamic Data Example
      </Heading>
      <EChartsClient options={chartOptions} style={{ height: '400px', width: '100%' }} />
      <Button mt={4} colorScheme="teal" onClick={updateData}>
        Update Data
      </Button>
    </Box>
  );
}
