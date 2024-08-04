import React from 'react';
import Netprofit from '../Component/NetProfit';
import ShortCut from '../Component/Shortcuts';
import CustomerFeedback from '../Component/CustomerFeedback';

const RightSide = ({ children }) => {
  return (
    <div className="mt-8 sm:mt-6 lg:mt-24 sm:ml-4 lg:ml-6 p-2 flex flex-col gap-4 lg:flex-row">
      <div className="flex-1 flex flex-col gap-4">
        <div className="px-4 py-4 mt-2 w-full sm:w-48 lg:w-96 xl:w-96 flex flex-col justify-between gap-4 rounded-lg dark:bg-gray-700">
          <Netprofit />
          <ShortCut />
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
