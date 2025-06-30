import React from 'react';
import { SiReact, SiJavascript, SiNodedotjs, SiMongodb } from 'react-icons/si';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { motion } from 'framer-motion';

const WorkExp = () => {
  const workExperiences = [
    {
      date: '2021 - 2022',
      title: 'JavaScript & Programming Foundations',
      desc: 'Learned the basics of programming including HTML, CSS, and JavaScript. Focused on core concepts like variables, functions, DOM manipulation, and basic problem-solving.',
      icon: <SiJavascript />,
      iconBg: '#facc15', // yellow
    },
    {
      date: '2022 - 2023',
      title: 'Backend Developer (Node.js & Express)',
      desc: 'Learned to build RESTful APIs using Node.js and Express. Gained experience in handling routes, middleware, databases (MongoDB), and authentication etc.',
      icon: <SiNodedotjs />,
      iconBg: '#4ade80', // green
    },
    {
      date: '2023 - 2024',
      title: 'Frontend Developer (React)',
      desc: 'Focused on developing user interfaces with React. Learned hooks, component architecture, routing, state management, and Tailwind CSS for responsive design.',
      icon: <SiReact />,
      iconBg: '#38bdf8', // blue
    },
    {
      date: '2024 - 2025',
      title: 'MERN Stack Developer',
      desc: 'Combined frontend and backend skills to build full-stack applications using the MERN stack. Worked on full project lifecycles, from database design to deployment.',
      icon: <SiMongodb />,
      iconBg: '#10b981', // emerald
    },
  ];

  return (
    <motion.section
      id="work"
      className="w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-3xl transition-colors duration-700 flex flex-col items-center justify-start overflow-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase mb-8 drop-shadow-lg text-center w-full max-w-5xl mx-auto"
        style={{ color: 'white' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Work Experience
      </motion.h2>
      <hr className="border-yellow-400 w-28 mb-12 mx-auto" />
      <VerticalTimeline lineColor="#facc15" className="w-full max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        {workExperiences.map((job, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: 'rgba(31, 41, 55, 0.9)', // Tailwind gray-800 with opacity
              color: '#fff',
              boxShadow: '0 0 20px rgba(250, 204, 21, 0.7)',
              borderRadius: '16px',
            }}
            contentArrowStyle={{ borderRight: '8px solid rgba(31, 41, 55, 0.85)' }}
            date={job.date}
            dateClassName="text-yellow-300 font-semibold text-lg"
            iconStyle={{ background: job.iconBg, color: '#fff', boxShadow: '0 0 15px ' + job.iconBg }}
            icon={job.icon}
            className="hover:scale-105 transition-transform duration-300"
          >
            <h3 style={{ color: 'white' }} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">{job.title}</h3>
            <h4 style={{ color: 'white' }} className="text-lg sm:text-xl mb-4 italic">{job.subtitle}</h4>
            <p style={{ color: 'white' }} className="leading-relaxed text-base sm:text-lg">{job.desc}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
};

export default WorkExp;
