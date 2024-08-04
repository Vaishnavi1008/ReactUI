import React from "react";
import Netprofit from "../Component/NetProfit";
import ShortCut from "../Component/Shortcuts";
import CustomerFeedback from "../Component/CustomerFeedback";

const RightSide = ({ children }) => {
  return (
    <div className="md:mt-12 lg:mt-24 sm:ml-20 lg:ml-48 p-3 flex flex-col gap-2  lg:flex-row  translate-all duration-300">
      <div className="flex-1 flex flex-col gap-5">
        <div className="px-2 py-4 mt-2 w-full lg:w-60 xl:w-80 flex flex-col justify-between gap-4 rounded-lg dark:bg-gray-700">
          <Netprofit />
       
          <ShortCut />
       
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
