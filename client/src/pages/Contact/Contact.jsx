import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BsEnvelope,
  BsTelephone,
  BsGeoAlt,
} from 'react-icons/bs';
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaLinkedin size={28} />,
    url: 'https://www.linkedin.com/in/muhammad-shakeel-658a6923a/',
  },
  {
    icon: <FaGithub size={28} />,
    url: 'https://github.com/Muhammad-Shakeel123',
  },
  {
    icon: <FaInstagram size={28} />,
    url: 'https://www.instagram.com/muhammadshakeel5826/',
  },
  {
    icon: <FaFacebook size={28} />,
    url: 'https://www.facebook.com/profile.php?id=100052399089062',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');
    try {
      const response = await fetch('http://localhost:8080/api/v1/portfolio/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          msg: formData.message,
        }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setSuccessMsg('Your message has been sent successfully.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setErrorMsg(data.message || 'Failed to send message.');
      }
    } catch (error) {
      setErrorMsg('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 flex items-center justify-center p-4 sm:p-8"
    >
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-xl max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-800">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <BsTelephone className="text-pink-600" size={20} />
                <a
                  href="https://wa.me/923075974287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:text-indigo-900 transition break-words"
                >
                  +92 307 597 4287
                </a>
              </div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <BsEnvelope className="text-pink-600" size={20} />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=muhammadshakeelafd@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 hover:text-indigo-900 transition break-words"
                >
                  muhammadshakeelafd@gmail.com
                </a>
              </div>
              <a
                href="https://www.google.com/maps/place/Peshawar,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 sm:space-x-4 cursor-pointer break-words"
              >
                <BsGeoAlt className="text-pink-600" size={20} />
                <span className="text-indigo-700">Peshawar, Pakistan</span>
              </a>
            </div>
              </div>
          <div className="flex space-x-4 sm:space-x-6 mt-6 text-pink-600 text-xl sm:text-2xl">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social Link"
                className="hover:text-indigo-800 transition"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 bg-white rounded-3xl shadow-lg"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-indigo-900">
            Send a Message
          </h2>
          {successMsg && (
            <p className="mb-4 text-green-600 font-semibold">{successMsg}</p>
          )}
          {errorMsg && (
            <p className="mb-4 text-red-600 font-semibold">{errorMsg}</p>
          )}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-indigo-900"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-indigo-900"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-indigo-900"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="text-right">
            <button
              type="submit"
              disabled={loading}
            className="bg-pink-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-pink-700 transition disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
