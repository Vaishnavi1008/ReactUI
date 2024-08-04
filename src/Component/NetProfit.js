import React from 'react';
import CircularProgress from '../Component/Progressbar'; // Import your CircularProgress component

const Netprofit = () => {
    const percentage = 70; // The percentage of completion
    const radius = 60; // Radius of the circle
    const strokeWidth = 10; // Stroke width of the circle
    const color = '#4CAF50'; // Color of the progress
//<div className="py-6 dark:bg-gray-600 rounded-lg p-5 flex items-center justify-center">
    return (
        <div className="flex gap-3 dark:bg-gray-800 items-center  p-8 rounded-lg ">
         
            <div className="flex items-center  p-1 space-x-28"> {/* Added space-x-6 for horizontal spacing */}
                <div className="text-white">
                   
                    <p className="text-sm ">Net Profit</p>
                    <h3 className="text-2xl font-bold mt-2">$123,456</h3>
                </div>
                <CircularProgress
                    percentage={percentage}
                    radius={radius}
                    strokeWidth={strokeWidth}
                    color={color}
                />
            </div>
        </div>
    );
};

export default Netprofit;
