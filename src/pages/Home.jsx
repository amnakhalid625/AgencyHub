import { FiPlay, FiArrowRight } from 'react-icons/fi';
import studentImg from '../assets/images/main-img.png';
import homeImg from '../assets/images/homeImage.svg';
import AboveCard from '../components/AboveCard';
import Testimonials from '../components/Testimonails';
import Footer from '../components/Footer';
import Pattern from '../components/Pattern';
import BestSeller from '../components/BestSeller';
import Features from '../components/Features';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Schedule from '../components/Schedule';

const Hero = () => {
  return (
    <>
      <Helmet>
        <title>Biz.Tech.Mgt</title>
        <meta name="description" content="Business Technology Management Agency" />
      </Helmet>
      <section className="bg-background py-12 md:py-20 px-6 lg:px-16 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Changed flex order here: no md:flex-col-reverse */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Left content */}
            <motion.div
              className="w-full lg:w-1/2 text-center md:text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="inline-block bg-orange-100 text-primary text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-sm"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Business Technology Management Agency!
              </motion.div>

              <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] font-bold text-gray-900 leading-tight md:leading-snug">
                Discover the Highest Quality Products and Services to Scale Your Agency{' '}
                <motion.span
                  className="text-primary inline-block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  All In One Place!
                </motion.span>
              </h1>

              <motion.p
                className="text-gray-600 mt-4 text-base sm:text-lg max-w-md mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
               Don't waste your time on research or sourcing. You don't have time for that! We do the hard hard work of sourcing, vetting, and applying quality control on the products and services you need to scale your Business.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <button className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full transition shadow-md text-sm">
                  Get Started <FiArrowRight className="text-base" />
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-gray-800 transition">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <FiPlay className="text-lg ml-0.5" />
                  </span>
                  How it Works
                </button>
              </motion.div>
            </motion.div>

            {/* Right image with infinite floating animation */}
            <motion.div
              className="relative w-full lg:w-1/2 flex justify-center items-center min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="hidden lg:block absolute top-10 right-10 w-48 h-48 bg-teal-400 rounded-xl rotate-12 opacity-80 -z-10 shadow-xl"></div>
              <div className="hidden lg:block absolute top-28 right-0 w-40 h-40 bg-orange-500 rounded-xl -rotate-12 opacity-70 -z-10 shadow-lg"></div>

              <motion.img
                src={homeImg}
                alt="Cleaning Professional"
                className="w-full h-auto object-contain z-10 drop-shadow-xl"
                animate={{
                  y: [0, -40, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>
      <AboveCard />
      <Pattern />
      <BestSeller />
      <Schedule />
      <Features />
      {/* <About /> */}
      <Testimonials />
    </>
  );
};

export default Hero;
