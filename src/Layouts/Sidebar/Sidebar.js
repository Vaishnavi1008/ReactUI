import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChartSimple,
  faCalendarCheck,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "./Style.css";
import dashboardImage from "../../Assets/Dashboard.png";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside
      className={`fixed top-14   left-0 z-40 w-20 h-screen  bg-gray-800 text-white transition-transform transform sm:translate-x-0 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } sm:static sm:w-64`}
    >
      <div className="h-full px-3  overflow-y-auto">
        <ul>
          <li className="items-center items  rounded">
            <FontAwesomeIcon icon={faHouse} className="mr-1  textxl left-icons" />
          </li>
          <li className="items-center items">
            <FontAwesomeIcon icon={faChartSimple} className="mr-1 textxl left-icons" />
          </li>
          <li className="items-center items">
            <FontAwesomeIcon icon={faCalendarCheck} className="mr-1 textxl left-icons" />
          </li>
          <li className="items-center items">
            <FontAwesomeIcon icon={faCartShopping} className="mr-1 textxl left-icons" />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
