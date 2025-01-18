// components/EChartsClient.js
'use client';
import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const EChartsClient = ({ options, style }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // 初始化图表实例
      const chartInstance = echarts.init(chartRef.current);

      // 设置图表配置
      chartInstance.setOption(options);

      // 监听窗口大小调整
      const handleResize = () => chartInstance.resize();
      window.addEventListener('resize', handleResize);

      // 清理事件和实例
      return () => {
        window.removeEventListener('resize', handleResize);
        chartInstance.dispose();
      };
    }
  }, [options]);

  return <div ref={chartRef} style={style} />;
};

export default EChartsClient;
