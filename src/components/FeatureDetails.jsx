import React from 'react';
import { useParams } from 'react-router-dom';
import { featureData } from '../data.js';
import { FaCheck, FaPencilAlt, FaRocket, FaClock, FaMagic } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FeatureDetails = () => {
  const { id } = useParams();
  const feature = featureData.find(item => item.number === id.padStart(2, '0'));

  if (!feature) {
    return <div>Feature not found</div>;
  }

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${feature.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
          <div className="text-center px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white">{feature.title}</h1>
            <p className="mt-4 text-xl text-orange-300">{feature.description}</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Feature Details</h2>
        <div className="grid md:grid-cols-2 gap-8 text-left text-gray-700">
          <p>{feature.description}</p>
          <p>This feature is designed to help you achieve your goals with maximum efficiency and minimum hassle.</p>
          <p>We've developed this solution based on years of experience working with clients across various industries.</p>
          <p>Get started today and experience the difference this feature can make for your business.</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-3xl font-bold mb-10 text-center">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: <FaCheck className="text-primary" />, title: "Easy to Use" },
                { icon: <FaRocket className="text-primary" />, title: "Fast Results" },
                { icon: <FaClock className="text-primary" />, title: "Time Saving" },
                { icon: <FaPencilAlt className="text-primary" />, title: "Customizable" },
                { icon: <FaMagic className="text-primary" />, title: "Powerful Features" },
                { icon: <FaCheck className="text-primary" />, title: "Reliable Support" },
              ].map((item, i) => (
                <div key={i} className="border rounded-lg p-6 hover:shadow-md transition">
                  <div className="text-3xl mb-4 flex justify-center">{item.icon}</div>
                  <h3 className="font-semibold text-lg text-center">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start using this feature today and see the difference it can make for your business.
          </p>
          <Link
            to="/"
           onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' });
             }}
            
            className="inline-block bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition text-lg"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FeatureDetails;