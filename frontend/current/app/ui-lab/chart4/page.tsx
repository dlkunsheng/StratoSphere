// pages/index.js
'use client';
import { Box, Heading } from '@chakra-ui/react';
import VerticalLineChart from '@/components/charts/VerticalLineChart';

export default function Home() {
  
  return (
    <Box py={10} px={6}>
      <VerticalLineChart/>
    </Box>
  );
}
