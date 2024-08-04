import React, { useState } from 'react';
import InfoCard from '../Component/Card';
import { faCartPlus, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Activity from '../Component/Activity';
import RecentOrder from '../Component/RecentOrder';

const Dashboard = () => {
  const [infoCardData, setInfoCardData] = useState([
    { label: "Total Order", type: "Order", Amount: "75", Range: "3" },
    { label: "Total Deliver", type: "Deliver", Amount: "70", Range: "-3" },
    { label: "Total Shipped", type: "Order", Amount: "50", Range: "1" },
    { label: "Total Returned", type: "Deliver", Amount: "10", Range: "-1" },
    { label: "Total Returned", type: "Deliver", Amount: "10", Range: "-1" },
  ]);

  const chartData = {
    labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
    datasets: [
      {
        label: "Activity",
        data: [4000, 6000, 8000, 10000, 12000, 14000, 16000, 10000, 12000, 8000, 6000],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="p-4 mt-4 sm:mt-6 lg:mt-16 sm:ml-4 lg:ml-20">
      <h3 className="text-white font-bold text-xl mb-2">Dashboard</h3>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:gap-8 gap-4 sm:gap-6  sm:jsutify-center justify-between">
        {infoCardData.map((i, index) => (
          
            <InfoCard
              icon={
                <FontAwesomeIcon
                  icon={i.type === "Order" ? faCartPlus : faTruck}
                  className="text-white text-lg"
                />
              }
              title={i.label}
              number={i.Amount}
              change={i.Range}
            />
      
        ))}
      </div>
      
      <div className="mt-4 ">
        <Activity title="Activity" chartData={chartData} />
        <RecentOrder />
      </div>
   

    </div>
  );
};

export default Dashboard;
