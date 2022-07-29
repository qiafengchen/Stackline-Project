import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useSelector } from 'react-redux';
import './LineGraph.css';

const ApexChart = () => {
  const product = useSelector((state) => state.product);

  const [state, setState] = useState({
    series: [
      {
        name: product?.title,
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      title: {
        text: 'Retail Sales',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [],
      },
    },
  });

  React.useEffect(() => {
    setState((prev) => ({
      ...prev,
      series: [
        {
          name: product?.title,
          data: product?.sales?.map((el) => el.retailSales),
        },
      ],
    }));
  }, [product]);

  return (
    <div className="chart">
      <ReactApexChart
        className="retailSales"
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
