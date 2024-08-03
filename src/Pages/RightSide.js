import React from "react";
import Netprofit from "../Component/NetProfit";
import ShortCut from "../Component/Shortcuts";
import CustomerFeedback from "../Component/CustomerFeedback";
const RightSide = ({children}) => {
    return(<>
    6<div className="text-gray-500 p-3 sm:ml-64 flex gap-2 flex-col lg-flex-row translate-all duration-300 mt-20">
       <div className="flex-1 flex flex-col gap-5 ">
        <div className="px-4 py-4 mt-2   rounded-lg  w-full dark:bg-gray-700 lg:w-1/4  flex flex-col justify-between gap-4">
        <Netprofit />
        <ShortCut />
        <CustomerFeedback   />
                
        </div>
   
       </div>
       
    </div>
    </>)
}
export default RightSide  