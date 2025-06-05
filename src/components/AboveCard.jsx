import React from 'react';
import { FaBookOpen, FaKeyboard, FaLink, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import WhatsAppButton from './WhatsAppButton';

const AboveCard = () => {
  const steps = [
    {
      icon: <FaBookOpen className="text-2xl text-white" />,
      title: 'Content One-Time Order',
      description: 'Get one-time content for your site.',
      link: '/',
      bgColor: 'bg-blue-500',
    },
    {
      icon: <FaKeyboard className="text-2xl text-white" />,
      title: 'Monthly Content Campaign',
      description: 'Recurring content for your blog.',
      link: '/',
      bgColor: 'bg-orange-400',
    },
    {
      icon: <FaLink className="text-2xl text-white" />,
      title: 'Backlinks & Guest Posts',
      description: 'Boost SEO with quality backlinks.',
      link: '/',
      bgColor: 'bg-pink-400',
    },
    {
      icon: <FaLinkedin className="text-2xl text-white" />,
      title: 'LinkedIn Outreach',
      description: 'We contact your prospects weekly.',
      link: '/',
      bgColor: 'bg-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <motion.div
        className="text-center py-16 px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.p
          className="text-sm text-primary font-semibold uppercase mb-2"
          variants={cardVariants}
        >
          Our Approach
        </motion.p>

        <motion.h2
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10"
          variants={cardVariants}
        >
          Our Popular Services
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl transition"
              variants={cardVariants}
            >
              <div className={`w-12 h-12 mx-auto flex items-center justify-center rounded-full ${step.bgColor} mb-4`}>
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{step.description}</p>
              <Link to={step.link} className="text-blue-600 text-xs inline-flex items-center hover:underline">
                Learn More
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <WhatsAppButton />
    </>
  );
};

export default AboveCard;
