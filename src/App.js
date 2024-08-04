import './App.css';
import { useEffect, useState } from 'react';
import Header from './Layouts/Header/Header';
import Sidebar from './Layouts/Sidebar/Sidebar';
import RightSide from './Pages/RightSide';
import Dashboard from './Pages/Dashboard';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} />

        {/* Main content area */}
        <main className="flex flex-col lg:flex-row sm:flex-col">
          <Dashboard />
          <RightSide />
        </main>
      </div>
    </div>
  );
}

export default App;
