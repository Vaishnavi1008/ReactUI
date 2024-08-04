import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Activity = ({ title, chartData }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full flex flex-col">
      <h2 className="text-white text-xl md:text-2xl mb-4 font-bold">{title}</h2>
      {chartData && (
        <div className="w-full h-64 md:h-80">
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
            }}
            className='w-full h-full'
          />
        </div>
      )}
    </div>
  );
};

export default Activity;
