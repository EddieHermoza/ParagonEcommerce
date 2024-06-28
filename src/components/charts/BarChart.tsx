"use client"
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {

  const generateRandomData = (numPoints: number) => {
    return Array.from({ length: numPoints }, () => Math.floor(Math.random() * 100));
  };

  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      {
        data: generateRandomData(7),
        backgroundColor: "rgba(255, 255, 255,0.8)",
        borderWidth: 2,
        borderColor: "rgba(255, 255, 255,1)",
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
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
    <div className="flex-center w-full max-sm:h-96 sm:h-[500px] relative">
      <Bar data={data} options={options} className='w-full h-full'/>
    </div>
  );
};

export default BarChart;