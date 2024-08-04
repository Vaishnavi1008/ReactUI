import React from 'react';

const InfoCard = ({ icon, title, number, change }) => {
  return (
   
       <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col justify-between w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-full  xl:max-w-xl">
      <div className="p-3 bg-gray-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <div className="flex-grow text-left">
        <h3 className="text-white text-sm md:text-base mb-1">{title}</h3>
        <div className="text-white text-xl md:text-2xl font-bold">{number}</div>
      </div>
      <div className={`text-right text-sm ${change > 0 ? 'text-green-500' : 'text-red-500'} `}>
        {change > 0 ? `▲ ${change}%` : `▼ ${change}%`}
      </div>
    </div>
  
   
  );
};

export default InfoCard;
