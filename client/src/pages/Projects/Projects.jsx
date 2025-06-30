import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    category: 'Frontend',
    image: '/projectsImages/1.png',
    title: 'Props Project',
    link: 'https://github.com/Muhammad-Shakeel123/react-props-project',
  },
  {
    id: 2,
    category: 'Frontend',
    image: '/projectsImages/2.png',
    title: 'Password Generator',
    link: 'https://github.com/Muhammad-Shakeel123/React-Password-Generator-Project',
  },
  {
    id: 3,
    category: 'Frontend',
    image: '/projectsImages/3.png',
    title: 'Todo List',
    link: 'https://github.com/Muhammad-Shakeel123/React-todoList-project',
  },
  {
    id: 4,
    category: 'Frontend',
    image: '/projectsImages/4.png',
    title: 'Card with Theme Toggle',
    link: 'https://github.com/Muhammad-Shakeel123/React-Card-Component-with-Theme-Toggle',
  },
  {
    id: 5,
    category: 'Frontend',
    image: '/projectsImages/5.png',
    title: 'Page Routing',
    link: 'https://github.com/Muhammad-Shakeel123/React-Router-Project',
  },
  {
    id: 6,
    category: 'Frontend',
    image: '/projectsImages/6.png',
    title: 'Chang Colors and Text',
    link: 'https://github.com/Muhammad-Shakeel123/React-color-and-text-change-project',
  },
  {
    id: 7,
    category: 'Full stack',
    image: '/projectsImages/7.png',
    title: 'Social Media Web App',
    link: 'https://github.com/Muhammad-Shakeel123/Social-media-app',
  },
  {
    id: 8,
    category: 'Full stack',
    image: '/projectsImages/8.png',
    title: 'Real -Time Chat App',
    link: 'https://github.com/Muhammad-Shakeel123/chat-app',
  },
  {
    id: 9,
    category: 'Backend',
    image: '/projectsImages/9.png',
    title: 'Full Stack Video Hosting Platform',
    link: 'https://github.com/Muhammad-Shakeel123/Full-Stack-Video-Hosting-Platform',
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const categories = ['All', 'Full stack', 'Frontend', 'Backend'];
  
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  const maxStartIndex = Math.max(0, filteredProjects.length - visibleCount);

  const handlePrev = () => {
    setStartIndex(prev => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIndex(prev => Math.min(prev + visibleCount, maxStartIndex));
  };

  const visibleProjects = filteredProjects.slice(
    startIndex,
    startIndex + visibleCount,
  );

  useEffect(() => {
    // Always show 3 cards regardless of screen size
    setVisibleCount(3);
    setStartIndex(0);
  }, []);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-20 py-16"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-80 z-0 pointer-events-none" />
        <div className="relative z-10 max-w-full md:max-w-6xl text-center drop-shadow-lg">
        <h2
          style={{ color: 'white' }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase mb-8 text-white"
        >
          Top Recent Projects
        </h2>

        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed text-white">
          Explore some of the latest projects showcasing diverse technologies
          and creative solutions.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setStartIndex(0);
              }}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:border hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative max-w-6xl w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex + selectedCategory}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-8 justify-center"
            >
              {visibleProjects.map(({ id, image, title, link }) => (
                <div
                  key={id}
                  className="group relative bg-white/5 border border-white/20 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl transform-gpu transition duration-500 hover:scale-105 hover:-rotate-1 w-full sm:w-[30%] md:w-[30%] lg:w-[30%] px-2"
                  style={{ height: 'auto' }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-pink-600 via-purple-600 to-fuchsia-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-60 transition duration-700 z-0" />
                  <div className="relative z-10 h-48 w-full overflow-hidden rounded-t-3xl">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                  </div>
                  <div className="relative z-10 p-6 text-center flex flex-col justify-between" style={{ minHeight: 'calc(100% - 12rem)' }}>
                    <h3
                      style={{ color: 'white' }}
                      className="text-xl sm:text-2xl font-bold mb-4 tracking-wide group-hover:tracking-wider transition-all duration-500"
                    >
                      {title}
                    </h3>
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block px-6 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md hover:shadow-pink-400/50 transition-transform duration-300 hover:scale-105"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {filteredProjects.length > visibleCount && (
          <div className="mt-10 flex justify-center gap-6">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= maxStartIndex}
              className="bg-pink-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-pink-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
