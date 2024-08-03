import './App.css';
import { useEffect, useState } from 'react';
import Header from './Layouts/Header/Header';
import Sidebar from './Layouts/Sidebar/Sidebar';
import RightSide from './Pages/RightSide';
import Dashboard from './Pages/Dashboard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    console.log(document.documentElement.classList); // Check if 'dark' class is added
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen flex dark:bg-black dark:text-white">
    {/* <div className="h-screen flex dark:bg-black dark:text-white"> */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main className='flex-grow flex'>
          <div className='flex-1 pl-4'>
            <Dashboard />
          </div>
          <RightSide />
          </main>
      </div>
    
    </div>
  );
}

export default App;
