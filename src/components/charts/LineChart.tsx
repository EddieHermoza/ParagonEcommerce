"use client";

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const LineChart: React.FC = () => {
    const generateRandomData = (numPoints: number) => {
        return Array.from({ length: numPoints }, () => Math.floor(Math.random() * 100));
      };
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      {
        data: generateRandomData(7),
        borderColor: "rgb(255, 100, 0)", 
        borderWidth: 3,
        pointBorderColor: "rgb(255, 100, 0)", 
        pointBorderWidth: 3,
        fill: true,
        backgroundColor: "rgba(255, 100,0,0.2)",
      }
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {

      },
    },
    scales: {
      y: {
        display: false, 
      },
      x: {
        ticks: {
          font: {
            size: 14,
            weight: 'bold',
        },
        color: '#FFFFFF',
        },
      },
    },
  };

  return (
    <div className="flex-center w-full max-sm:h-96 sm:h-[500px] relative ">
      <Line data={data} options={options} className='w-full h-full' />
    </div>
  );

};

export default LineChart;