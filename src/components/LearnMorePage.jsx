import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaPencilAlt, FaRocket, FaClock, FaMagic } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { sellerData } from '../data';

const LearnMorePage = () => {
  const { id } = useParams();
  const product = sellerData.find(item => item.number === id.padStart(2, '0'));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Define pricing information for each product
  const pricing = {
    "01": { price: "$1125", startingAt: true },
    "02": { price: "$82.5", startingAt: false },
    "03": { price: "$1800", startingAt: true },
    "04": { price: "$493.5", startingAt: true },
    "05": { price: "$688.5", startingAt: true },
    "06": { price: "$225", startingAt: true },
    "07": { price: "$748.5", startingAt: true },
    "08": { price: "$2998.5", startingAt: true },
    "09": { price: "$298.5", startingAt: true },
    "10": { price: "$445.5", startingAt: true },
    "11": { price: "$298.5", startingAt: true },
    "12": { price: "$450 ", startingAt: true },
    "13": { price: "$598.5", startingAt: true },
    "14": { price: "$1495.5", startingAt: true },
    "15": { price: "$150", startingAt: true },
    "16": { price: "$150", startingAt: true },
    "17": { price: "$1440", startingAt: true },
    "18": { price: "$825", startingAt: true },
    "19": { price: "$145.5", startingAt: true },
    "20": { price: "$1500", startingAt: true },



  };

  const productPrice = pricing[product.number] || { price: "$21", startingAt: true };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section - Dynamic Image */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${product.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
          <div className="text-center px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white">{product.title}</h1>
            <p className="mt-4 text-xl text-orange-300">{product.description.substring(0, 100)}...</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">About This Service</h2>
        <p className="text-primary text-xl mb-8">Professional {product.title.split('(')[0].trim()} Services</p>
        <div className="grid md:grid-cols-2 gap-8 text-left text-gray-700">
          <p>{product.description}</p>
          <p>Our service delivers high-quality results optimized for your needs. With flexible pricing and no long-term contracts, we keep things simple and effective.</p>
          <p>We've worked with clients across industries for nearly a decade, delivering professional results that meet your specific requirements.</p>
          <p>Fast, reliable service that gets the job done right - we've got you covered.</p>
        </div>
      </section>

      {/* Combined Features and Pricing Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Features Section - What You'll Get */}
            <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow">
              <h2 className="text-3xl font-bold mb-10 text-center">What You'll Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { icon: <FaCheck className="text-primary" />, title: "Professional Quality" },
                  { icon: <FaRocket className="text-primary" />, title: "Quick Delivery" },
                  { icon: <FaClock className="text-primary" />, title: "Reliable Service" },
                  { icon: <FaPencilAlt className="text-primary" />, title: "Expert Implementation" },
                  { icon: <FaMagic className="text-primary" />, title: "Tailored Solutions" },
                  { icon: <FaCheck className="text-primary" />, title: "Easy-to-Use Results" },
                ].map((item, i) => (
                  <div key={i} className="border rounded-lg p-6 hover:shadow-md transition">
                    <div className="text-3xl mb-4 flex justify-center">{item.icon}</div>
                    <h3 className="font-semibold text-lg text-center">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section - Dynamic */}
            <div className="lg:w-1/3 bg-primary text-white rounded-xl shadow-lg p-8">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-center">{product.title}</h2>
                <p className="mb-6 text-orange-100 text-center">Get this service without subscriptions or hassles.</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> High-quality service</li>
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> Professional results</li>
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> Quick turnaround</li>
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> Easy-to-use deliverables</li>
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> Tailored to your needs</li>
                </ul>
                <div className="mt-auto">
                  {productPrice.startingAt && <p className="text-orange-100 text-center">Starting at</p>}
                  <p className="text-3xl font-bold text-white text-center mb-4">{productPrice.price}</p>
                  <Link
                    to="/"
                    className="block w-full bg-white hover:bg-gray-100 text-primary py-2 px-6 rounded font-medium transition text-center"
                  >
                    Order Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sellerData
              .filter(item => item.number !== product.number)
              .slice(0, 3)
              .map((item, i) => {
                const relatedPrice = pricing[item.number] || { price: "$21", startingAt: true };
                return (
                  <div key={i} className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-lg transition">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-t-lg mb-3"
                    />
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-2">{item.description.substring(0, 100)}...</p>
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-primary font-medium">{relatedPrice.price}</span>
                      <Link 
                        to={`/learn-more/${item.number}`} 
                        className="text-primary text-sm font-medium hover:underline flex items-center"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;