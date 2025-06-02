import React from 'react';
import { motion } from 'framer-motion';
import seller from '../data.js'; // make sure the images are imported in data.js

const BestSeller = () => {
  const steps = seller;

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
            Our Process Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow our proven methodology to achieve exceptional results
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl overflow-hidden transition-all duration-300 group flex flex-col"
              style={{ boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px' }}
              variants={cardVariants}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.number}
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 flex-grow leading-relaxed">
                  {step.description}
                </p>
                <a
                  href={step.link}
                  className="text-black text-sm font-medium mb-3 hover:underline"
                >
                  Learn More →
                </a>
                <a
                  href="/configure"
                  className="inline-block bg-primary text-black font-semibold py-2 px-4 rounded-md hover:opacity-90 transition-all duration-300"
                >
                  Configure & Order
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BestSeller;
