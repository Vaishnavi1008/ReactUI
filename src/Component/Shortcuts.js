import { GoGoal } from 'react-icons/go';
import { IoIosArrowForward, IoIosStats, IoIosCalendar } from 'react-icons/io';

const ShortCut = () => {
    const data = [
        { title: "Goal", icon: GoGoal },
        { title: "Plan", icon: IoIosCalendar }, // Changed to IoIosCalendar for the Plan icon
        { title: "Stats", icon: IoIosStats }
    ];
    return (
      
          <div className="flex gap-4  flex-col  rounded-lg dark:bg-gray-800 p-4"> 
           
            {data.map((item, index) => (
                <div key={index} className='flex justify-between items-center cursor-pointer rounded-sm'>
                    <div className='flex gap-4 items-center'>
                        <span className='p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300'>
                            <item.icon />
                        </span>
                        <h3 className='font-medium dark:text-gray-300'>{item.title}</h3>
                    </div>
                    <span className='bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500'>
                        <IoIosArrowForward />
                    </span>
                </div>
            ))}
        </div>
    );
};

export default ShortCut;
