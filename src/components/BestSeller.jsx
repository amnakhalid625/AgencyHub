import React from "react";
import { motion } from "framer-motion";
import seller from "../data.js";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

const BestSeller = () => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {seller.map((step, index) => (
        <motion.div
          key={index}
          className="relative border rounded-lg p-6 bg-white shadow-md overflow-hidden group"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className={`absolute top-4 left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${step.numberColor}`}
          >
            {step.number}
          </div>

          <div className="h-40 overflow-hidden rounded-lg mb-4">
            <img
              src={step.image || "/fallback.jpg"}
              alt={step.title}
              onError={(e) => (e.target.src = "/fallback.jpg")}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{step.description}</p>
            <a
              href={step.link}
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              Learn More →
            </a>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BestSeller;
