import React, { useState } from 'react';

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGithub,
} from 'react-icons/fa';

import {
  SiRedux,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiCloudinary,
  SiJsonwebtokens,
  SiPostman,
  SiC,
  SiCplusplus,
  SiVercel,
  SiMysql,
  SiJavascript,
} from 'react-icons/si';

// Skills categorized
const skillCategories = {
  All: [
    { icon: <FaReact className="text-blue-500" />, name: 'React' },
    { icon: <SiRedux className="text-purple-500" />, name: 'Redux' },
    { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS3' },
    { icon: <FaJsSquare className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind CSS' },

    { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
    { icon: <SiExpress className="text-gray-400" />, name: 'Express.js' },
    { icon: <FaDatabase className="text-yellow-600" />, name: 'Databases' },
    { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
    { icon: <SiMongoose className="text-red-500" />, name: 'Mongoose' },
    { icon: <SiJsonwebtokens className="text-red-600" />, name: 'JWT' },

    { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
    { icon: <FaGithub className="text-white" />, name: 'GitHub' },
    { icon: <SiPostman className="text-orange-400" />, name: 'Postman' },
    { icon: <SiCloudinary className="text-blue-300" />, name: 'Cloudinary' },
    { icon: <SiVercel className="text-white" />, name: 'Vercel' },

    { icon: <SiC className="text-blue-500" />, name: 'C' },
    { icon: <SiCplusplus className="text-indigo-500" />, name: 'C++' },
    { icon: <SiMysql className="text-blue-700" />, name: 'MySQL' },
  ],
  Frontend: [
    { icon: <FaReact className="text-blue-500" />, name: 'React' },
    { icon: <SiRedux className="text-purple-500" />, name: 'Redux' },
    { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML5' },
    { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS3' },
    { icon: <FaJsSquare className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: 'Tailwind CSS' },
  ],
  Backend: [
    { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
    { icon: <SiExpress className="text-gray-400" />, name: 'Express.js' },
    { icon: <FaDatabase className="text-yellow-600" />, name: 'Databases' },
    { icon: <SiMongodb className="text-green-500" />, name: 'MongoDB' },
    { icon: <SiMongoose className="text-red-500" />, name: 'Mongoose' },
    { icon: <SiJsonwebtokens className="text-red-600" />, name: 'JWT' },
  ],
  Tools: [
    { icon: <FaGitAlt className="text-orange-500" />, name: 'Git' },
    { icon: <FaGithub className="text-white" />, name: 'GitHub' },
    { icon: <SiPostman className="text-orange-400" />, name: 'Postman' },
    { icon: <SiCloudinary className="text-blue-300" />, name: 'Cloudinary' },
    { icon: <SiVercel className="text-white" />, name: 'Vercel' },
  ],
  Languages: [
    { icon: <SiJavascript className="text-yellow-400" />, name: 'JavaScript' },
    { icon: <SiC className="text-blue-500" />, name: 'C' },
    { icon: <SiCplusplus className="text-indigo-500" />, name: 'C++' },
    { icon: <SiMysql className="text-blue-700" />, name: 'MySQL' },
  ],
};

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section
      id="about"
      className="w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-6 md:px-20 py-16 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl text-center drop-shadow-lg">
        <h1
          className="text-6xl font-extrabold mb-8 inline-block pb-2 text-white"
          style={{ color: 'white' }}
        >
          About Me
        </h1>

        <p
          className="text-xl mb-8 leading-relaxed text-white"
          style={{ color: 'white' }}
        >
          I am a passionate and results-driven MERN Stack Developer with a
          strong focus on building full-stack web applications using MongoDB,
          Express.js, React, and Node.js. With hands-on experience in both
          frontend and backend development, I specialize in crafting scalable,
          efficient, and user-friendly solutions. My skill set includes RESTful
          API development, responsive UI design, and modern state management
          tools like Redux and Context API. I enjoy writing clean, maintainable
          code and following best practices to ensure high performance and code
          quality.
        </p>

        <p
          className="text-xl mb-8 leading-relaxed text-white"
          style={{ color: 'white' }}
        >
          I thrive in collaborative environments where innovation and continuous
          improvement are encouraged. Whether working independently or as part
          of a team, I enjoy tackling complex problems and turning ideas into
          impactful digital experiences. I am comfortable using development
          tools like Git, VS Code, Postman, and Figma, and I regularly explore
          new technologies to stay current in the ever-evolving web ecosystem.
          My goal is to build solutions that are not only technically sound but
          also intuitive for end users.
        </p>

        <p
          className="text-xl mb-10 leading-relaxed text-white"
          style={{ color: 'white' }}
        >
          I’m always excited to take on new challenges, whether it’s optimizing
          a backend service, designing a sleek frontend interface, or
          contributing to a meaningful project. If you’re looking for a
          dedicated developer who’s committed to building high-quality
          applications with real impact — let’s connect and create something
          awesome together.
        </p>

        {/* Skills Heading */}
        <h3
          style={{ color: 'white' }}
          className="text-4xl font-extrabold mb-6 tracking-wide drop-shadow-lg"
        >
          Skills
        </h3>

        {/* Category Buttons */}
        <div className="mb-6 flex flex-wrap justify-center gap-4">
          {Object.keys(skillCategories).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-pink-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:border-2 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className="flex flex-wrap justify-center gap-4"
        >
          {skillCategories[selectedCategory].map(({ icon, name }) => {
            // Map skill names to official URLs or documents
            const urlMap = {
              React: 'https://reactjs.org/',
              Redux: 'https://redux.js.org/',
              HTML5: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
              CSS3: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
              JavaScript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
              'Tailwind CSS': 'https://tailwindcss.com/',
              'Node.js': 'https://nodejs.org/',
              'Express.js': 'https://expressjs.com/',
              Databases: 'https://en.wikipedia.org/wiki/Database',
              MongoDB: 'https://www.mongodb.com/',
              Mongoose: 'https://mongoosejs.com/',
              JWT: 'https://jwt.io/',
              Git: 'https://git-scm.com/',
              GitHub: 'https://github.com/',
              Postman: 'https://www.postman.com/',
              Cloudinary: 'https://cloudinary.com/',
              Vercel: 'https://vercel.com/',
              C: 'https://en.wikipedia.org/wiki/C_(programming_language)',
              'C++': 'https://isocpp.org/',
              MySQL: 'https://www.mysql.com/',
            };
            const link = urlMap[name] || '#';
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
                <span className="text-4xl text-white" style={{ zIndex: 20, opacity: 0.9 }}>{icon}</span>
                <span className="text-lg font-semibold text-white select-none" style={{ zIndex: 20, opacity: 0.9 }}>
                  {name}
                </span>
              </a>
            );
          })}
        </div>

        {/* Contact Button */}
        <a
          href="#contact"
          className="inline-block px-10 py-4 mt-5 rounded-full bg-pink-600 text-white font-bold text-xl hover:bg-pink-700 transition shadow-xl"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};
export default About;
