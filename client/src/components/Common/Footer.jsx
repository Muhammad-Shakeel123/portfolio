import React, { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope, // ✅ Importing a working email icon from FontAwesome
} from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  return (
    <footer
      className="bg-gray-900 text-gray-300 py-12 px-6 select-none"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* About Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4"style={{color:"white"}}>About Me</h3>
          <p className="text-gray-400 leading-relaxed">
            I am a passionate MERN stack developer focused on building scalable
            and maintainable web applications with excellent user experiences.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Quick links">
          <h3 className="text-2xl font-semibold mb-4" style={{color:"white"}}>
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              'Home',
              'About',
              'Education',
              'Tech Stack',
              'Projects',
              'Work Experience',
              'Contact',
            ].map(section => (
              <li key={section}>
                <a
                  href={`#${section.toLowerCase().replace(/\s/g, '')}`}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {section}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 " style={{color:"white"}}>
            Contact Info
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt aria-hidden="true" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Peshawar+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
                aria-label="City and Country location on map"
              >
                Peshawar, Pakistan
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone aria-hidden="true" />
              <a
                href="https://wa.me/923075974287"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
                aria-label="WhatsApp phone number"
              >
                +92 307 5974287
              </a>
            </li>
            <li className="flex items-center gap-3">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadshakeelafd@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 hover:text-white transition-colors duration-300 whitespace-nowrap"
                aria-label="Send email via Gmail"
                style={{ whiteSpace: 'nowrap' }}
              >
                <FaEnvelope aria-hidden="true" />
                <span className="whitespace-nowrap">
                  muhammadshakeelafd@gmail.com
                </span>
              </a>
            </li>
          </ul>

          {/* Social Icons */}
          <div
            className="flex space-x-6 mt-6 text-gray-400 text-2xl"
            role="list"
          >
            <a
              href="https://github.com/Muhammad-Shakeel123"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-shakeel-658a6923a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.instagram.com/muhammadshakeel5826/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100052399089062"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-white transition-colors duration-300"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <></>

      <div className="mt-12 text-center text-gray-500 text-sm select-text">
        &copy; {new Date().getFullYear()} Muhammad Shakeel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
