import React from 'react';
import { motion } from 'framer-motion';
import whyusImg from '../assets/images/why-us.svg';
import { services } from '../data';
import Footer from '../components/Footer';

const WhyChooseUs = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="relative min-h-[700px] md:min-h-[700px]">

          {/* Central Image */}
          <div className="relative mx-auto w-64 h-64 md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2
                          rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-tr from-primary/20 to-white">
            {/* Soft animated background */}
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse z-[-1]" />
            
            {/* Image */}
            <img
              src={whyusImg}
              alt="Cleaning Professional"
              className="w-full h-full object-cover rounded-full animate-float"
            />
          </div>

          {/* Services container */}
          <div className="md:absolute md:top-0 md:left-0 md:w-full md:h-full">

            {/* For small screens, stack cards vertically */}
            <div className="space-y-8 md:hidden mt-10">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  service={service}
                  align="left" // alignment not so relevant here, but keep left for consistency
                  delay={0.1 * (index + 1)}
                />
              ))}
            </div>

            {/* For md and larger screens, absolute positioned cards */}
            <div className="hidden md:block">

              {/* Top Row */}
              <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2 w-[85%] flex justify-between">
                <ServiceCard service={services[0]} align="left" delay={0.1} />
                <ServiceCard service={services[1]} align="right" delay={0.2} />
              </div>

              {/* Middle Row */}
              <div className="absolute top-1/2 left-0 w-full flex justify-between transform -translate-y-1/2 px-12">
                <ServiceCard service={services[2]} align="left" delay={0.3} />
                <ServiceCard service={services[3]} align="right" delay={0.4} />
              </div>

              {/* Bottom Row */}
              <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 w-[85%] flex justify-between">
                <ServiceCard service={services[4]} align="left" delay={0.5} />
                <ServiceCard service={services[5]} align="right" delay={0.6} />
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const ServiceCard = ({ service, align, delay }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`max-w-xs p-5 rounded-xl shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 ${
        align === 'left' ? 'text-left mr-auto' : 'text-right ml-auto'
      }`}
    >
      <div className="inline-flex items-center justify-center mb-3 w-12 h-12 rounded-full bg-primary text-white text-xl shadow-md">
        <Icon />
      </div>
      <h3 className="font-bold text-lg uppercase tracking-wider mb-1">{service.title}</h3>
      <p className="text-sm text-gray-600">{service.description}</p>
    </motion.div>
  );
};

export default WhyChooseUs;
