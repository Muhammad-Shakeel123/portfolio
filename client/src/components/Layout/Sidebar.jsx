import React, { useState } from 'react';
import Menus from '../Menus/Menus';
import { FiMenu, FiX } from 'react-icons/fi';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-gray-900 to-gray-800 shadow-xl z-50 flex flex-col transition-all duration-500 ease-in-out ${
        isOpen ? 'w-64' : 'w-20'
      }`}
      aria-label="Sidebar navigation"
    >
      <div className="flex items-center justify-between p-5 border-b border-gray-700">
        <h1
          className={`text-white text-2xl font-extrabold tracking-wide transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Portfolio
        </h1>
        <button
          onClick={toggleSidebar}
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
          className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded"
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <Menus toggle={isOpen} />
      </div>
      <footer
        className={`p-4 border-t border-gray-700 text-gray-400 text-sm text-center transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      >
        &copy; 2024 My Portfolio
      </footer>
    </aside>
  );
};

export default Sidebar;
