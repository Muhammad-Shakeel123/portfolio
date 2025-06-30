import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdSchool } from 'react-icons/md';

const educationData = [
  {
    name: 'UET Mardan',
    date: '2021 - 2025',
    title: 'Bachelor of Science in Computer Software Engineering(Bs,CSE)',
    location: 'Charsadda Road, Mardan, Khyber Pakhtunkhwa, Pakistan',
    description:
      'Focused on software engineering principles, programming, and problem-solving. Gaining expertise in a variety of courses across software development, data science, and computer systems.',
  },
  {
    name: 'Govt Shaheed Abdul Azam Afridi Higher Secondary School NO 1',
    date: '2019 - 2021',
    title: 'Pre-Computer Science (HSSC)',
    location: 'Jamrud, Khyber Pakhtunkhwa, Pakistan',
    description: 'Studied foundational subjects in computer science.',
  },
  {
    name: 'The Jamrud Model High School',
    date: '2017 - 2019',
    title: 'Secondary School Certificate (SSC)',
    location: 'Jamrud, Khyber Pakhtunkhwa, Pakistan',
    description: 'Completed basic education with focus on science subjects.',
  },
];

const backgroundImages = [
  '/EducationBAckGroundImages/image1.jpg',
];

const displayDuration = 20000; // 20 seconds
const fadeDuration = 3000; // 3 seconds

const cardVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.8, ease: 'easeIn' } },
};

const EducationCard = ({
  education,
  variants,
  initial,
  animate,
  exit,
  onPrev,
  onNext,
}) => {
  return (
    <motion.div
      className="relative z-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-black border border-purple-700 rounded-3xl p-6 sm:p-8 md:p-12 max-w-full sm:max-w-3xl md:max-w-4xl text-white flex flex-col"
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
      role="article"
      aria-label={`${education.title} at ${education.location}`}
      tabIndex={0}
      style={{ color: 'white' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="flex items-center space-x-8 mb-8">
        <div className="bg-purple-700 rounded-full p-5">
          <MdSchool size={48} aria-hidden="true" className="text-yellow-400" />
        </div>
        <div>
          <motion.h4
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide font-serif mb-1 sm:mb-2 px-1 sm:px-2 md:px-3"
            style={{}}
            animate={{
              x: [0, 15, 0, -15, 0],
              color: ['#ffd700', '#ff8c00', '#ffd700', '#8a2be2', '#ffd700'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {education.name}
          </motion.h4>
          <h3
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-wide font-serif px-1 sm:px-2 md:px-3"
            style={{ color: '#ffdd57' }}
          >
            {education.title}
          </h3>
          <p
            className="text-base sm:text-lg md:text-xl italic mt-1 px-1 sm:px-2 md:px-3"
            style={{ textShadow: '0 0 8px rgba(0,0,139,0.8)' }}
          >
            {education.location}
          </p>
        </div>
      </div>
      <p
        className="text-xl font-serif leading-relaxed flex-grow mb-6"
        style={{ color: '#e0d7ff', textShadow: '0 0 8px rgba(139,92,246,0.8)' }}
      >
        {education.description}
      </p>
      <div
        className="mt-8 text-purple-300 font-semibold text-lg sm:text-xl tracking-wide"
        style={{ textShadow: '0 0 10px rgba(139,92,246,0.7)' }}
      >
        {education.date}
      </div>

      {/* Buttons inside card */}
      <div className="mt-10 flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <motion.button
          className="bg-gradient-to-r from-pink-400 via-pink-600 to-pink-700 text-white py-3 px-6 sm:px-10 rounded-full text-lg sm:text-xl font-bold shadow-lg transition-all duration-300"
          onClick={onPrev}
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous education"
        >
          Previous
        </motion.button>
        <motion.button
          className="bg-gradient-to-r from-pink-400 via-pink-600 to-pink-700 text-white py-3 px-6 sm:px-10 rounded-full text-lg sm:text-xl font-bold shadow-lg transition-all duration-300"
          onClick={onNext}
          whileHover={{
            scale: 1.15,
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next education"
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const cycleImages = () => {
      setCurrentIndex(prev => (prev + 1) % backgroundImages.length);
      setNextIndex(prev => (prev + 1) % backgroundImages.length);
    };

    timeoutRef.current = setInterval(cycleImages, displayDuration);

    return () => {
      clearInterval(timeoutRef.current);
    };
  }, []);

  const paginate = newDirection => {
    setPage(([prevPage]) => {
      const newPage =
        (prevPage + newDirection + educationData.length) % educationData.length;
      return [newPage, newDirection];
    });
  };

  return (
    <section
      id="education"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white overflow-hidden"
      aria-label="Education details section"
    >
      <motion.div
        key={currentIndex}
        className="absolute inset-0 bg-cover bg-center filter brightness-75 saturate-150"
        style={{ backgroundImage: `url(${backgroundImages[currentIndex]})` }}
        initial={{ opacity: 1, scale: 1 }}
        animate={{
          opacity: [1, 1, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: displayDuration / 1000,
          ease: 'easeInOut',
          times: [0, (displayDuration - fadeDuration) / displayDuration, 1],
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <motion.div
        key={nextIndex}
        className="absolute inset-0 bg-cover bg-center filter brightness-75 saturate-150"
        style={{ backgroundImage: `url(${backgroundImages[nextIndex]})` }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: [0, 1, 1],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: displayDuration / 1000,
          ease: 'easeInOut',
          times: [0, fadeDuration / displayDuration, 1],
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent pointer-events-none"
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase mt-4 sm:mt-6 md:mt-8 tracking-widest font-sans select-none z-30 px-1 sm:px-2 md:px-4 lg:px-6 xl:px-8 py-1 sm:py-2 md:py-4 lg:py-6 xl:py-8 rounded-xl border border-yellow-400"
        style={{ color: 'white' }}
      >
        Education Details
      </motion.h2>

      <div
        className="animated-gradient-line w-full max-w-4xl rounded-full my-12 z-30"
        aria-hidden="true"
        style={{
          height: '6px',
          background:
            'linear-gradient(90deg, #ffdd57, #ffb347, #ffdd57, #ffb347, #ffdd57)',
          backgroundSize: '200% 100%',
          animation: 'gradientShift 4s linear infinite',
        }}
      ></div>

      <div className="relative w-full max-w-4xl flex flex-col items-center z-30">
        <AnimatePresence mode="wait" initial={false}>
          <EducationCard
            key={page}
            education={educationData[page]}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            onPrev={() => paginate(-1)}
            onNext={() => paginate(1)}
          />
        </AnimatePresence>

        <div
          className="flex space-x-6 mt-12 mb-12"
          role="tablist"
          aria-label="Education pagination"
        >
          {educationData.map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => setPage([idx, idx > page ? 1 : -1])}
            className={`w-6 h-6 rounded-full transition-colors duration-500 ${
              idx === page
                ? 'bg-pink-500 shadow-pink-500/80'
                : 'bg-pink-300 hover:bg-pink-400'
            }`}
            aria-selected={idx === page}
            aria-label={`Go to education ${idx + 1}`}
            role="tab"
            tabIndex={idx === page ? 0 : -1}
            whileHover={{ scale: 1.3, boxShadow: '0 0 15px 5px #ec4899' }}
            whileTap={{ scale: 0.9 }}
            layout
          />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            text-shadow: 0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e;
          }
          50% {
            text-shadow: 0 0 20px #16a34a, 0 0 30px #16a34a, 0 0 40px #16a34a;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
