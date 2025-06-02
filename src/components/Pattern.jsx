import React from 'react';
import { motion } from 'framer-motion';
import patternBg from '../assets/images/pattern.avif';

const Pattern = () => {
  return (
    <div
      className="w-full h-96 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${patternBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Animated Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <motion.div
          className="text-white max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 leading-snug tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover tools & services <br className="hidden sm:block" />
            to grow your agency.
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Partner with experts in SEO, paid media, web design, and social media. We're your growth engine — saving time and boosting revenue while helping your agency thrive.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Pattern;
