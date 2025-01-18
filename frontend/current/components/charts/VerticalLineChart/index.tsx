import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const VerticalLineChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);

      // 假的测试数据
      const depthData = Array.from({ length: 101 }, (_, i) => i * 100); // 0 到 10000米
      const pressureData = depthData.map(() => Math.random() * 50 + 100); // 随机压力数据 (100 - 150)

      // 图表配置
      const options = {
        grid: {
          top: 100, // 表头的高度
          left: 50,
          right: 50,
          bottom: 0,
          containLabel: true,
        },
        tooltip: {
          trigger: 'axis',
          formatter: params => {
            const { value } = params[0];
            return `深度: ${value[1]} 米<br>压力: ${value[0]} MPa`;
          },
        },
        xAxis: {
          name: '压力 (MPa)',
          min: 100, // 假设压力最小值
          max: 150, // 假设压力最大值
          splitLine: {
            show: true, // 网格线
          },
        },
        yAxis: {
          name: '井深 (米)',
          type: 'value',
          inverse: true, // 井深从上到下
          min: 0,
          max: 10000,
          splitLine: {
            show: true, // 网格线
          },
        },
        series: [
          {
            type: 'line',
            data: depthData.map((depth, index) => [pressureData[index], depth]),
            smooth: true,
            lineStyle: {
              width: 2,
            },
            symbolSize: 6,
          },
        ],
        dataZoom: [
          {
            type: 'slider',
            yAxisIndex: 0,
            start: 0,
            end: 100,
            zoomOnMouseWheel: false, // 禁用滚轮缩放
          },
        ],
      };

      chartInstance.setOption(options);

      // 监听窗口大小变化
      const handleResize = () => chartInstance.resize();
      window.addEventListener('resize', handleResize);

      // 清理事件和实例
      return () => {
        window.removeEventListener('resize', handleResize);
        chartInstance.dispose();
      };
    }
  }, []);

  return (
    <div
      style={{ position: 'relative', width: '100%', height: '600px' }}
    >
      {/* 固定表头 */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 50,
          right: 50,
          height: '100px',
          background: '#f5f5f5',
          zIndex: 10,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 20px',
          borderBottom: '2px solid #ccc',
        }}
      >
        <span>压力最小值: 100 MPa</span>
        <span>压力最大值: 150 MPa</span>
      </div>

      {/* 图表容器 */}
      <div
        ref={chartRef}
        style={{
          position: 'absolute',
          top: 100,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
    </div>
  );
};

export default VerticalLineChart;
