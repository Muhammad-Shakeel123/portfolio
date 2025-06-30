import React, { useState } from 'react';
import { TechstackList } from '../../utils/TechStackList';

const urlMap = {
  HTML: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  'CSS / SCSS': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  Javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  Tailwind: 'https://tailwindcss.com/',
  Figma: 'https://www.figma.com/',
  'Adobe XD': 'https://www.adobe.com/products/xd.html',
  Photoshop: 'https://www.adobe.com/products/photoshop.html',
  'Node JS': 'https://nodejs.org/',
  'Express JS': 'https://expressjs.com/',
  Mongodb: 'https://www.mongodb.com/',
  SQL: 'https://www.mysql.com/',
  'Git / Github': 'https://github.com/',
};

const iconColorMap = {
  HTML: 'text-orange-600',
  'CSS / SCSS': 'text-blue-600',
  Javascript: 'text-yellow-400',
  Tailwind: 'text-cyan-400',
  Figma: 'text-cyan-400',
  'Adobe XD': 'text-purple-600',
  Photoshop: 'text-pink-600',
  'Node JS': 'text-green-600',
  'Express JS': 'text-gray-400',
  Mongodb: 'text-green-500',
  SQL: 'text-blue-700',
  'Git / Github': 'text-white',
};

const TechStack = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Design',
    'DevOps',
  ];

  const filteredTechs =
    selectedCategory === 'All'
      ? TechstackList
      : TechstackList.filter(tech => tech.category === selectedCategory);

  return (
    <section
      id="techstack"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-12 md:py-16 relative overflow-x-hidden"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-full sm:max-w-2xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto text-center drop-shadow-lg">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase mb-6 sm:mb-8 inline-block pb-2 text-white"
          style={{ color: 'white' }}
        >
          Technologies Stack
        </h2>

        <p
          className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed text-white"
          style={{ color: 'white' }}
        >
          Including programming languages, frameworks, databases, front-end and
          back-end tools, and APIs.
        </p>

        {/* Category Buttons */}
        <div className="mb-6 flex flex-wrap justify-center gap-3 sm:gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:border-2 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Icons Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredTechs.map(({ icon: Icon, name }) => {
            const link = urlMap[name] || '#';
            const colorClass = iconColorMap[name] || 'text-white';
            return (
              <a
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                className="relative flex flex-col items-center justify-center gap-2 rounded-3xl w-32 h-32 cursor-pointer bg-white/10 backdrop-blur-md border border-white shadow-lg hover:scale-105 hover:bg-white/20 hover:shadow-xl transition-transform duration-300"
                style={{ zIndex: 10, opacity: 0.85 }}
              >
                <Icon
                  className={`text-4xl ${colorClass}`}
                  style={{ zIndex: 20, opacity: 0.9 }}
                />
                <span
                  className="text-lg font-semibold text-white select-none"
                  style={{ zIndex: 20, opacity: 0.9 }}
                >
                  {name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
