import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChartSimple, faCalendarCheck, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Style.css"; // Ensure this file is correctly linked
import dashboardImage from "../../Assets/Dashboard.png";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-12 left-0 z-40 h-screen bg-gray-800 text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 `}
    >
      <div className="h-full px-3 py-4 overflow-y-auto">
        <ul className="space-y-4">
          <li className="flex items-center rounded p-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faHouse} className="mr-3 text-xl" />

          </li>
          <li className="flex items-center rounded p-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faChartSimple} className="mr-3 text-xl" />
           
          </li>
          <li className="flex items-center rounded p-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faCalendarCheck} className="mr-3 text-xl" />
           
          </li>
          <li className="flex items-center rounded p-2 hover:bg-gray-700">
            <FontAwesomeIcon icon={faCartShopping} className="mr-3 text-xl" />
            
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
