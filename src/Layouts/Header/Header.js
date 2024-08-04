import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBell, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdSpaceDashboard } from "react-icons/md";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center p-2 bg-gray-800 dark:bg-gray-900 z-50">
      {/* Sidebar toggle button */}
      <button
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden"
        onClick={toggleSidebar}
      >
        <HiOutlineMenuAlt2 className="text-2xl" />
      </button>
      {/* Dashboard icon */}
      <a href="#" className="flex items-center ms-2">
        <MdSpaceDashboard className="h-10 text-2xl text-violet-500" />
      </a>
      {/* Search input */}
      <div className=" flex items-center ms-4 ml-12 ">
        <input
          type="text"
          placeholder="Search..."
          className="flex-grow  w-1/4 sm:w-1/5 md:w-1/6 px-4 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      {/* Icons */}
      <div className="ml-auto flex items-center space-x-2">
        <div className="dark:bg-gray-600 rounded-full p-2 text-center mx-1">
          <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
        </div>
        <div className="dark:bg-gray-600 rounded-full p-2 text-center mx-1">
          <FontAwesomeIcon icon={faGear} className="text-white text-xl" />
        </div>
        <div className="dark:bg-gray-600 rounded-full p-2 text-center mx-1">
          <FontAwesomeIcon icon={faBell} className="text-white text-xl" />
        </div>
        <div className="dark:bg-gray-600 rounded-full p-2 text-center mx-1">
          <FontAwesomeIcon icon={faUser} className="text-white text-xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
