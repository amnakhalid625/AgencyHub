import React from 'react';
import { FaCheck, FaPencilAlt, FaRocket, FaClock, FaMagic } from 'react-icons/fa';

const LearnMorePage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://agencyhub.com/wp-content/uploads/2023/05/Content-Updated-1.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 flex items-center justify-center">
          <div className="text-center px-4 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold text-white">Professional Content Writing Services</h1>
            <p className="mt-4 text-xl text-orange-300">Stand out with SEO-friendly, engaging, and affordable content.</p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-orange-500 text-xl mb-8">Tired of reading and writing content for your website?</p>
        <div className="grid md:grid-cols-2 gap-8 text-left text-gray-700">
          <p>We deliver high-quality content optimized for search engines. Our experienced writers ensure every piece is engaging and original, including metadata and keyword-rich descriptions.</p>
          <p>With flexible pricing, no long-term contracts, and the option to handle keyword research for just $4, we keep things simple and effective.</p>
          <p>Whether it's blog posts, product reviews, social media captions, or detailed articles, we've worked with clients across industries for nearly a decade.</p>
          <p>Fresh, fast, and SEO-smart content that keeps your audience engaged and your site updated — we've got you covered.</p>
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
                  { icon: <FaCheck className="text-primary" />, title: "SEO-Friendly Structure" },
                  { icon: <FaRocket className="text-primary" />, title: "Quick Delivery" },
                  { icon: <FaClock className="text-primary" />, title: "No Long-term Commitment" },
                  { icon: <FaPencilAlt className="text-primary" />, title: "Professional Writers" },
                  { icon: <FaMagic className="text-primary" />, title: "Unique & Engaging Content" },
                  { icon: <FaCheck className="text-primary" />, title: "Easy-to-Use Platform" },
                ].map((item, i) => (
                  <div key={i} className="border rounded-lg p-6 hover:shadow-md transition">
                    <div className="text-3xl mb-4 flex justify-center">{item.icon}</div>
                    <h3 className="font-semibold text-lg text-center">{item.title}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Section - Content One Time Order */}
            <div className="lg:w-1/3 bg-gradient-to-b from-orange-500 to-orange-600 text-white rounded-xl shadow-lg p-8">
              <div className="h-full flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-center">Content One Time Order (OTO)</h2>
                <p className="mb-6 text-orange-100 text-center">Get powerful content without subscriptions or hassles.</p>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> SEO-friendly Content Structures</li>
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> Automated Publishing</li>
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> Quick Deliveries</li>
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> Easy-to-use System</li>
                  <li className="flex items-center"><FaCheck className="text-white mr-2" /> Unique And Original Content</li>
                </ul>
                <div className="mt-auto">
                  <p className="text-orange-100 text-center">Starting at</p>
                  <p className="text-3xl font-bold text-white text-center mb-4">$21</p>
                  <a
                    href="https://app.agencyhub.com/login.aspx?CategoryId=12"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white hover:bg-gray-100 text-orange-600 py-2 px-6 rounded font-medium transition text-center"
                  >
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Create Any Type of Content</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Website Content', img: 'user-interface' },
              { name: 'Product Review', img: 'rating' },
              { name: 'Medical Procedure', img: 'stethoscope' },
              { name: 'Blog Posts', img: 'doc' },
              { name: 'Product Descriptions', img: 'skirt' },
              { name: '"Best of" Articles', img: 'medals' },
              { name: 'Article Writing', img: 'study' },
              { name: 'Press Releases', img: 'newspaper' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-xl border shadow-sm hover:shadow-lg transition text-center">
                <img
                  src={`https://agencyhub.com/wp-content/uploads/2022/02/${item.img}.png`}
                  alt={item.name}
                  className="w-16 h-16 mx-auto mb-3"
                />
                <h4 className="font-medium text-gray-800">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;