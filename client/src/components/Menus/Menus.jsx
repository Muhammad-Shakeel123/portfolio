import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from 'react-icons/fc';

const Menus = ({ toggle }) => {
  const items = [
    { icon: <FcHome />, to: 'home', label: 'Home', isPage: false },
    { icon: <FcAbout />, to: 'about', label: 'About', isPage: false },
    { icon: <FcReadingEbook />, to: 'education', label: 'Education', isPage: false },
    { icon: <FcBiotech />, to: 'techstack', label: 'Tech Stack', isPage: false },
    { icon: <FcVideoProjector />, to: 'projects', label: 'Projects', isPage: false },
    { icon: <FcPortraitMode />, to: 'work', label: 'Work Experience', isPage: false },
    { icon: <FcBusinessContact />, to: 'contact', label: 'Contact', isPage: false },
  ];

  return (
    <div className="flex flex-col h-full">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center flex-shrink-0 p-4"
      >
        <div
          className={`relative rounded-full bg-gradient-to-tr from-indigo-600 via-purple-700 to-pink-600 shadow-lg overflow-hidden group cursor-pointer ${
            toggle ? 'w-[220px] h-[220px]' : 'w-12 h-12'
          }`}
          title="Profile"
        >
          <img
            src="/profileimage/porfile.jpg"
            alt="profile"
            className="rounded-full w-full h-full object-cover border-4 border-transparent shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:shadow-xl"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`text-white mt-6 flex-1 overflow-y-auto px-2 pb-20 ${
          toggle ? 'space-y-6' : 'space-y-6'
        } flex flex-col items-${toggle ? 'start' : 'center'}`}
      >
        {items.map(({ icon, to, label, isPage }) => (
          <motion.div
            key={to}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="transition duration-300 w-full"
          >
            {isPage ? (
              <RouterLink
                to={to}
                className={`flex items-center ${
                  toggle ? 'justify-start gap-4 px-4' : 'justify-center'
                } py-3 border border-b-amber-50 rounded-lg cursor-pointer transition-all duration-300
                hover:bg-pink-600 hover:text-white
                active:bg-pink-700 active:text-white
                `}
                aria-label={label}
                tabIndex={0}
                role="link"
                title={!toggle ? label : undefined}
              >
                <span className="text-xl">{icon}</span>
                {toggle && <span className="text-base font-semibold">{label}</span>}
              </RouterLink>
            ) : (
              <ScrollLink
                to={to}
                spy
                smooth
                offset={-100}
                duration={100}
                className={`flex items-center ${
                  toggle ? 'justify-start gap-4 px-4' : 'justify-center'
                } py-3 border border-b-amber-50 rounded-lg cursor-pointer transition-all duration-300
                hover:bg-pink-600 hover:text-white
                active:bg-pink-700 active:text-white
                `}
                activeClass="bg-pink-700 text-white border-pink-400 shadow-lg"
                aria-label={label}
                tabIndex={0}
                role="link"
                title={!toggle ? label : undefined}
              >
                <span className="text-xl">{icon}</span>
                {toggle && <span className="text-base font-semibold">{label}</span>}
              </ScrollLink>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Menus;
