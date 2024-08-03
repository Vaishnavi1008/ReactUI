import React, { useState } from "react";
import Activity from "../Component/Activity";
import InfoCard from "../Component/Card";
import { faCartPlus, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RecentOrders from "../Component/RecentOrder";
import CustomerFeedback from "../Component/CustomerFeedback";

const Dashboard = () => {
  const [infoCardData, setInforCardData] = useState([
    { label: "Total Order", type: "Order", Amount: "75", Range: "3" },
    { label: "Total Delivered", type: "Deliver", Amount: "70", Range: "-3" },
    { label: "Total Delivered", type: "Deliver", Amount: "70", Range: "-3" },
    { label: "Total Order", type: "Order", Amount: "75", Range: "3" },

  ]);

  const chartData = {
    labels: ["5", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27"],
    datasets: [
      {
        label: "Activity",
        data: [
          4000, 6000, 8000, 10000, 12000, 14000, 16000, 10000, 12000, 8000,
          6000,
        ],
        fill: false,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="flex flex-col mt-16 lg:flex-row  ml-12 sm:ml-4 flex-grow">
      {/* Left side content */}
      <div className="flex-1 pl-3">
        <h3 className="text-white font-bold text-xl ml-5 ">Dashboard</h3>
        <div className="container mx-auto p-3 pb-2">
          <div className="flex flex-wrap gap-4 justify-between ">
            {infoCardData.length > 0 &&
              infoCardData.map((i, index) => (
                <div
                  key={index}
                  className="flex-shrink-0  sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                >
                  <InfoCard
                    icon={
                      <FontAwesomeIcon
                        icon={
                          i.type === "Order"
                            ? faCartPlus
                            : i.type === "Deliver"
                            ? faTruck
                            : ""
                        }
                        className="text-white text-lg"
                      />
                    }
                    title={i.label}
                    number={i.Amount}
                    change={i.Range}
                  />
                </div>
              ))}
          </div>
        </div>
        <Activity title="Activity" chartData={chartData} />
        <RecentOrders />
      
      </div>
    </div>
  );
};

export default Dashboard;
