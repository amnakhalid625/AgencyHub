import React from 'react';
import myImage from '../assets/images/schedule.svg';

const Schedule = () => {
  return (
    <div className="bg-black py-12 px-8 md:px-16 mx-4 md:mx-20 my-10 rounded-2xl shadow-2xl">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        {/* Left Side - Text */}
        <div className="text-white md:w-1/2 w-full">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 leading-snug tracking-tight">Schedule</h1>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
            Ready to showcase your product or service to top-tier agencies and brands? AgencyHub is your gateway to a thriving digital marketplace — no experience needed.
          </p>
          <button className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
            Schedule a Call
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={myImage}
            alt="Schedule"
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
