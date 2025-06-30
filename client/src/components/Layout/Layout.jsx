import React, { useState, useEffect } from 'react';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Education from '../../pages/Educations/Education';
import Techstack from '../../pages/TechStack/TechStack';
import Projects from '../../pages/Projects/Projects';
import WorkExp from '../../pages/WorkExp/WorkExp';
import Contact from '../../pages/Contact/Contact';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import Menus from '../Menus/Menus';
import Footer from '../Common/Footer';
// import ScrollToTop from '../Common/ScrollToTop'; // Removed due to missing file
import { useTheme, ThemeProvider } from '../../context/ThemeContext';

const LayoutContent = () => {
  const [toggle, setToggle] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [theme] = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const sidebarWidth = toggle ? 'w-80' : isMobile ? 'w-0' : 'w-24';

  return (
    <div
      className={`flex flex-col min-h-screen bg-gray-100 text-gray-900 transition-colors duration-500 perspective-3d overflow-x-hidden ${
        theme === 'dark' ? 'dark bg-gray-900 text-gray-100' : ''
      }`}
    >
      <div className="flex flex-1 overflow-x-hidden">
        <aside
          className={`fixed top-0 left-0 h-full ${sidebarWidth} bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-2xl z-40 transition-all duration-500 ease-in-out overflow-hidden flex flex-col`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Toggle button placed at top inside the sidebar */} 
          <div
            className="p-2 mt-4 ml-auto mr-4 cursor-pointer rounded-full text-white bg-gray-800 shadow-md hover:shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition transform duration-300"
            style={{ width: '36px', height: '36px' }}
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle sidebar"
          >
            {toggle ? <AiOutlineDoubleLeft size={20} /> : <AiOutlineDoubleRight size={20} />}
          </div>
          {/* Hamburger menu button for mobile */}
          {!toggle && (
            <button
              className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition transform duration-300 md:hidden"
              onClick={() => setToggle(true)}
              aria-label="Open sidebar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          )}

          <Menus toggle={toggle} />
        </aside>

        {/* Left border line for sidebar */}
        <div
          className={`fixed top-0 z-30 h-full transition-all duration-500 ${
            toggle && !isMobile ? 'left-80' : isMobile ? 'left-0' : 'left-24'
          } w-[2px] bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 shadow-md rounded-full`}
          style={{ filter: 'drop-shadow(0 0 6px rgba(252, 211, 77, 0.8))' }}
        />

        <main
          className={`flex-1 overflow-y-auto overflow-x-hidden transition-all duration-300 ${
            toggle ? 'ml-80' : isMobile ? 'ml-0' : 'ml-24'
          } flex flex-col`}
        >
          <div className="mb-2">
            <Home />
          </div>
          <hr className="animated-gradient-line" />
          <div className="mb-2">
            <About />
          </div>
          <hr className="animated-gradient-line" />
          <div className="mb-2">
            <Education />
          </div>
          <hr className="animated-gradient-line" />
          <div className="mb-2">
            <Techstack />
          </div>
          <hr className="animated-gradient-line" />
          <div className="mb-2">
            <Projects />
          </div>
          <hr className="animated-gradient-line" />
          <div className="mb-2">
            <WorkExp />
          </div>
          <hr className="animated-gradient-line" />
          <div className="mb-2">
            <Contact />
          </div>
          <hr className="animated-gradient-line" />
          <Footer />
          {/* ScrollToTop component removed due to missing file */}
        </main>
      </div>
    </div>
  );
};

const Layout = () => (
  <ThemeProvider>
    <LayoutContent />
  </ThemeProvider>
);

export default Layout;
