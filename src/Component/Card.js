import React from 'react';

const InfoCard = ({ icon, title, number, change }) => {
  return (
    <div className="bg-gray-800 p-4 w-48 sm:w-1/2 md:w-1/3 lg:w-1/4  rounded-lg shadow-lg flex flex-col ">
      <div className="flex flex-col  mb-2">
        <div className="p-2 bg-gray-900 rounded-full w-1/4 text-center">
          {icon}
        </div>
      </div>
      <div className="flex-grow ">
        <h3 className="text-white text-sm mb-1">{title}</h3>
        <div className="text-white text-3xl font-bold ">{number}</div>
      </div>
      <div className={`text-end text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change > 0 ? `▲ ${change}%` : `▼ ${change}%`}
      </div>
    </div>
  );
};

export default InfoCard;
