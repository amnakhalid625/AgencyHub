import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { featureData } from '../data.js';
import { Link } from 'react-router-dom';

const Features = () => {
  const steps = featureData;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  // Auto-play carousel effect
  useEffect(() => {
    if (isHovered) return; 
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [steps.length, isHovered]);

  // Handle mobile view detection
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -10,
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the features that make our platform exceptional.
          </p>
        </motion.div>

        {/* Carousel Navigation (Dots) - Mobile Only */}
        {mobileView && (
          <div className="flex justify-center mb-6 space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-primary w-6' : 'bg-gray-300'}`}
                aria-label={`Go to item ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Features Grid */}
          <motion.div
            className={`grid ${mobileView ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-8`}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {mobileView ? (
              // Mobile - single card carousel
              <motion.div
                key={activeIndex}
                className="bg-white rounded-xl overflow-hidden transition-all duration-300 group flex flex-col"
                style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={steps[activeIndex].image}
                    alt={steps[activeIndex].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {steps[activeIndex].number}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {steps[activeIndex].title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                    {steps[activeIndex].description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link
                      to={`/features/${steps[activeIndex].number}`}
                       onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
                      className="text-primary text-sm font-medium hover:underline flex items-center"
                    >
                      Learn More <span className="ml-1">→</span>
                    </Link>
                    <Link
                      to="/"
                       onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
                      className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ) : (
              // Desktop - show all cards
              steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden transition-all duration-300 group flex flex-col"
                  style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px' }}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Link
                        to={`/features/${step.number}`}
                         onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
                        className="text-primary text-sm font-medium hover:underline flex items-center"
                      >
                        Learn More <span className="ml-1">→</span>
                      </Link>
                      <Link
                        to="/"
                         onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
                        className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        Order Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </motion.div>

          {/* Navigation Arrows - Mobile Only */}
          {mobileView && (
            <>
              <button 
                onClick={() => setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
                aria-label="Previous item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={() => setActiveIndex((prev) => (prev + 1) % steps.length)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-all"
                aria-label="Next item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;