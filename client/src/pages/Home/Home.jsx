import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';

const socialLinks = [
  {
    icon: <FaLinkedin size={28} color="#db2777" />,
    url: 'https://www.linkedin.com/in/muhammad-shakeel-658a6923a/',
  },
  {
    icon: <FaGithub size={28} color="#db2777" />,
    url: 'https://github.com/Muhammad-Shakeel123',
  },
  {
    icon: <FaInstagram size={28} color="#db2777" />,
    url: 'https://www.instagram.com/muhammadshakeel5826/',
  },
  {
    icon: <FaFacebook size={28} color="#db2777" />,
    url: 'https://www.facebook.com/profile.php?id=100052399089062',
  },
];

const backgroundImages = [
  '/HomeBackGroundimages/image1.jpg',
  '/HomeBackGroundimages/image2.jpg',
  '/HomeBackGroundimages/image3.jpg',
  '/HomeBackGroundimages/image4.jpg',
  '/HomeBackGroundimages/image5.jpg',
  '/HomeBackGroundimages/image6.jpg',
  '/HomeBackGroundimages/image7.jpg',
  '/HomeBackGroundimages/image8.jpg',
];

const displayDuration = 20000;
const transitionDuration = 4000; // 4 seconds for smoother fade

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const cycleImages = () => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length);
    };
    timeoutRef.current = setInterval(cycleImages, displayDuration);
    return () => clearInterval(timeoutRef.current);
  }, [currentIndex]);

  const handleContactClick = () => {
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -100,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow: '0 0 8px rgb(251 191 36 / 0.8)',
      transition: { yoyo: Infinity, duration: 0.6 },
    },
  };

  // Define inline keyframes for colorChange animation and animated gradient line
  const styleSheet = `
    @keyframes colorChange {
      0% { color: white; }
      25% { color: #fbbf24; } /* yellow-400 */
      50% { color: #ec4899; } /* pink-500 */
      75% { color: #8b5cf6; } /* purple-600 */
      100% { color: white; }
    }
    .animated-gradient-line {
      height: 3px;
      border: none;
      background: linear-gradient(270deg, #fbbf24, #ec4899, #8b5cf6);
      background-size: 600% 600%;
      animation: gradientAnimation 8s ease infinite;
      border-radius: 2px;
      margin: 1.5rem 0;
    }
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .button-3d {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .button-3d:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 20px rgba(251, 191, 36, 0.6);
    }
    .social-icon {
      transition: transform 0.3s ease, color 0.3s ease;
    }
    .social-icon:hover {
      transform: scale(1.3);
      color: #4b5563;
    }
    .background-gradient {
      position: absolute;
      inset: 0;
      background: linear-gradient(270deg, #fbbf24, #ec4899, #8b5cf6, #fbbf24);
      background-size: 800% 800%;
      animation: gradientAnimation 15s ease infinite;
      z-index: -1;
      filter: blur(60px);
      opacity: 0.7;
    }
  `;

  return (
    <>
      <style>{styleSheet}</style>
      <div
        id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-10 overflow-hidden bg-white text-gray-900 max-w-full"
      >
        {/* BACKGROUND GRADIENT */}
        <div className="background-gradient" />

        {/* BACKGROUND IMAGES CROSSFADE */}
        <AnimatePresence>
          {prevIndex !== null && (
            <motion.div
              key={prevIndex}
              className="absolute inset-0 bg-cover bg-center scale-[1.05] blur-[1px]"
              style={{
                backgroundImage: `url(${backgroundImages[prevIndex]})`,
                opacity: 1,
              }}
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: transitionDuration / 1000,
                ease: 'easeInOut',
              }}
            />
          )}
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center scale-[1.05] blur-[1px]"
            style={{
              backgroundImage: `url(${backgroundImages[currentIndex]})`,
              opacity: 1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: transitionDuration / 1000,
              ease: 'easeInOut',
            }}
          />
        </AnimatePresence>

        {/* OVERLAY GRADIENT - reduced darkness */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/10 to-black/30 z-0"
          animate={{ opacity: [0.7, 0.9, 0.7] }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        {/* MAIN CONTENT CARD */}
          <motion.div
          className="relative z-10 p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white shadow-[0_0_20px_rgba(255,255,255,0.03)] w-full max-w-full md:max-w-6xl text-center space-y-8 hover-3d-card transition-transform-shadow"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide"
            tabIndex={0}
            style={{
              animation: 'colorChange 15s ease-in-out infinite',
              WebkitAnimation: 'colorChange 15s ease-in-out infinite',
            }}
          >
            Muhammad Shakeel
          </motion.h1>

          <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold drop-shadow-sm"
            tabIndex={0}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              animation: 'colorChange 15s ease-in-out infinite',
              WebkitAnimation: 'colorChange 15s ease-in-out infinite',
            }}
          >
            <span style={{ display: 'inline-block' }}>
              <Typewriter
                options={{
                  strings: ['MERN Stack Developer', 'Tech Enthusiast'],
                  autoStart: true,
                  loop: true,
                  pauseFor: 2000,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </motion.h2>

          <motion.p
          className="text-white/90 text-sm sm:text-base md:text-lg leading-relaxed font-medium rounded-xl p-4 sm:p-6 bg-gradient-to-r from-yellow-400/10 via-white/10 to-purple-400/10 border border-yellow shadow-xl"
            whileHover={{ scale: 1.02 }}
            tabIndex={0}
          >
            I’m a dedicated MERN Stack Web Developer with a strong focus on
            building modern, responsive, and high-performance web applications.
            With expertise in MongoDB, Express.js, React, and Node.js, I deliver
            clean, maintainable code and creative problem-solving to ensure
            seamless functionality and great user experiences across all
            devices.
          </motion.p>

          <motion.button
            onClick={handleContactClick}
          className="button-3d inline-block px-6 sm:px-8 py-3 sm:py-4 font-bold rounded-full bg-pink-600 text-white shadow-lg cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            tabIndex={0}
            aria-label="Contact me"
          >
            Contact Me
          </motion.button>

          {/* ANIMATED GRADIENT LINE */}
          <hr className="bg-white h-0.5 border-none my-4" />

          <div
          className="flex justify-center items-center gap-6 sm:gap-8 mt-4"
            aria-label="Social media links"
          >
            {socialLinks.map(({ icon, url }, index) => (
              <motion.a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              className="social-icon text-pink-600 hover:text-yellow-400 transition duration-300"
                whileHover={{ scale: 1.3 }}
                tabIndex={0}
                aria-label={`Link to ${url}`}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
