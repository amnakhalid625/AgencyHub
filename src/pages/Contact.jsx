import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import lootiee from '../animation/myAnimation.json';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-6xl mx-auto my-10 px-4"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left Side - Lottie Animation with infinite floating */}
        <motion.div
          className="w-full md:w-1/2"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        >
          <Lottie
            animationData={lootiee}
            loop={true}
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          />
        </motion.div>

        {/* Right Side - Form with fade and slide up */}
        <motion.div
          className="w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Contact Us</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-md hover:bg-primary-dark transition-colors"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
