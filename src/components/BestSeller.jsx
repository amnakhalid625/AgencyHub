import React from 'react';
import { sellerData } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const BestSeller = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    },
    whileHover: {
      y: -8,
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Our Best Sellers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved products that customers keep coming back for
          </p>
        </motion.div>

        {/* Swiper Carousel with External Navigation */}
        <div className="relative">
          {/* Custom Swiper Nav Buttons - Top Right */}
          <div className="absolute right-0 -top-16 z-10 flex gap-3">
            <button className="custom-swiper-button-prev w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="custom-swiper-button-next w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ el: '.best-seller-pagination', clickable: true }}
            navigation={{
              nextEl: '.custom-swiper-button-next',
              prevEl: '.custom-swiper-button-prev'
            }}
            loop={true}
          >
            {sellerData.map((step, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white rounded-xl overflow-hidden group flex flex-col h-full"
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover="whileHover"
                  viewport={{ once: true, amount: 0.3 }}
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
                    <div className="flex justify-between items-center mt-auto">
                      <a
                        href={step.link}
                        className="text-primary text-sm font-medium hover:underline flex items-center"
                      >
                        Learn More <span className="ml-1">→</span>
                      </a>
                      <a
                        href="/configure"
                        className="bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-6 rounded-md hover:opacity-90 transition-all duration-300"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="best-seller-pagination mt-6 flex justify-center space-x-2" />
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Still can't decide?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact our support team or explore all products to find the perfect match.
          </p>
          <a
            href="#"
            className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-opacity-90 transition"
          >
            View All Products
          </a>
        </div>
      </div>

      <style jsx>{`
        .best-seller-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #d1d5db;
          border-radius: 9999px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .best-seller-pagination .swiper-pagination-bullet-active {
          background-color: #f97316;
          width: 24px;
        }
      `}</style>
    </section>
  );
};

export default BestSeller;
