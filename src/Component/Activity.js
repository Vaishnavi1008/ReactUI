import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Activity = ({ title, chartData }) => {
  return (
    <div className="ml-3  bg-gray-800 p-3 lg:1/4  sm:w-80 md:w-96 rounded-lg shadow-lg ">
      <h2 className="text-white text-xl mb-4 font-bold ">{title}</h2>
    
      {chartData && 
         <div className="h-48 px-2 pb-0 rounded-lg  w-auto">
          <Line data={chartData} options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
 className='w-full h-full' />
        </div>
      }

    </div>
  );
};

export default Activity;
