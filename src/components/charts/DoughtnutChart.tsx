
"use client"
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  active: number,
  inactive: number,
}


export default function DoughtnutChart(props:Props){
    const data = {
        labels: ['Activos', 'Inactivos'],
        datasets: [
          {
            data: [props.active, props.inactive],
            backgroundColor:  ['rgb(10, 240, 60)', 'rgb(255, 0, 0)'], 
            hoverBackgroundColor: ['rgb(50, 168, 82)', '#rgb(255, 0, 0)'],
            borderColor: ['rgb(0, 0, 0)'],
            borderWidth: 1
          },
        ],
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {
              display: false,
            },
          },
      };
    
     return(
        <Doughnut data={data} options={options} className='w-full h-full' />
     );
}
