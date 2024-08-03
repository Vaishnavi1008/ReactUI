import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useState } from 'react'
import {
  faEnvelope,
  faBell,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";
import Dashboard from "../../Pages/Dashboard";

const Header = ({ toggleSidebar }) => {

  return (
    <>
      <header className="fixed w-full flex items-center p-2 bg-gray-800 dark:bg-gray-900">
        <button
          className={`inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden`}
          onClick={toggleSidebar}
        >
          <HiOutlineMenuAlt2 className="text-2xl" />
        </button>
        <a href="#" className="flex ms-2 md:me-24 ">
          <MdSpaceDashboard className="h-8 me-3 text2xl text-violet-500" />
        </a>
        <div className="flex-grow flex-left">
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-right flex-row">
          <div className="dark:bg-gray-600 rounded-full mr-2 p-2 text-center">
          <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
          </div>
          <div className="dark:bg-gray-600 rounded-full mr-2 p-2 text-center">
          <FontAwesomeIcon icon={faGear} className="text-white text-xl" />
          </div>
          <div className="dark:bg-gray-600 rounded-full mr-2 p-2 text-center">
          <FontAwesomeIcon icon={faBell} className="text-white text-xl" />
          </div>
          <div className="dark:bg-gray-600 rounded-full mr-2 p-2 text-center">
          <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
          </div>
          
        </div>
      </header>
   
    </>
  );
};

export default Header;
