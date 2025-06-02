import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Jack',
    title: 'CEO at Anthem Software',
    text: 'Biz.Tech.Mgt is great because I can get everything in one place. They handle the fulfillment which lets me focus on acquiring clients and increasing my MRR.',
  },
  {
    name: 'Henry',
    title: 'CEO at Anthem Software',
    text: 'Using Biz.Tech.Mgt allowed us to scale by outsourcing the items we no longer cared to deliver with our in-house team. ',
  },
  {
    name: 'James Smith', 
    title: 'CEO at Anthem Software',
    text: 'Biz.Tech.Mgt is great because I can get everything in one place. They handle the fulfillment which lets me focus on acquiring clients and increasing my MRR.',
  },
  {
    name: 'Theodore',
    title: 'CEO at Anthem Software',
    text: 'Using Biz.Tech.Mgt allowed us to scale by outsourcing the items we no longer cared to deliver with our in-house team.',
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Clients<span className="text-orange-500">Feedback</span>
          </h2>
          <p className="text-gray-600 text-lg">What our clients say about Biz.Tech.Mgt</p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 h-full border-l-4 border-orange-500 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="mb-6 relative pl-10">
                    <svg
                      className="absolute left-0 top-0 w-6 h-6 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.17 6A6.003 6.003 0 003 12c0 1.26.38 2.43 1.04 3.41a1 1 0 01-.84 1.55H2a1 1 0 01-1-1c0-4.97 4.03-9 9-9 .34 0 .67.02 1 .05V6.02a1 1 0 00-1-1H7.17zm10 0A6.003 6.003 0 0013 12c0 1.26.38 2.43 1.04 3.41a1 1 0 01-.84 1.55h-1.2a1 1 0 01-1-1c0-4.97 4.03-9 9-9 .34 0 .67.02 1 .05V6.02a1 1 0 00-1-1h-2.83z" />
                    </svg>
                    <p className="text-gray-700 italic text-sm leading-relaxed">{testimonial.text}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination flex justify-center mt-10 space-x-2" />
        </div>
      </div>

      <style jsx>{`
        .testimonial-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #d1d5db;
          border-radius: 9999px;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .testimonial-pagination .swiper-pagination-bullet-active {
          background-color: #f97316;
          width: 24px;
        }
      `}</style>
    </section>
  );
};

export default Testimonial;
