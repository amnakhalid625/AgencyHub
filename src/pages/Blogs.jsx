import React from 'react';
import { Link } from "react-router-dom";

const Blogs = () => {
  const blogData = [
    {
      id: 1,
      category: "TECHNOLOGY",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      excerpt: "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Aspernatur tenetur distinctio neque?",
      author: "Jerome Walton",
      time: "2h ago",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=250&fit=crop",
      categoryColor: "bg-cyan-400"
    },
    {
      id: 2,
      category: "PLACE",
      title: "Hot Air Ballooning in Nepal - 1 Day - Nepal Mother House Treks",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Fugiat dolor nihil saepe. Nobis nihil minus similique hic quas mollitia. Error.",
      author: "Lewis Daniels",
      time: "Yesterday",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      categoryColor: "bg-purple-600"
    },
    {
      id: 3,
      category: "TRAVEL",
      title: "New York City | Layout, People, Economy, Culture, & History",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Molestias consequuntur sequi suscipit iure fuga ea!",
      author: "Carrie Brewer",
      time: "23 Dec 2020",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=250&fit=crop",
      categoryColor: "bg-pink-500"
    },
    {
      id: 4,
      category: "FOOD",
      title: "The Ultimate Guide to Mediterranean Cuisine",
      excerpt: "Discover the rich flavors and healthy ingredients that make Mediterranean food so beloved worldwide.",
      author: "Maria Rodriguez",
      time: "3h ago",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHJ_2dgv6JdsBEdVV5SOPEw2BvXVf6Ne4vA&s",
      categoryColor: "bg-orange-500"
    },
    {
      id: 5,
      category: "HEALTH",
      title: "10 Simple Ways to Boost Your Mental Health",
      excerpt: "Mental wellness is crucial for overall health. Here are proven strategies to improve your mental well-being.",
      author: "Dr. Sarah Johnson",
      time: "5h ago",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      categoryColor: "bg-green-500"
    },
    {
      id: 6,
      category: "BUSINESS",
      title: "Remote Work: The Future of Professional Life",
      excerpt: "How remote work is reshaping industries and what it means for the future of employment.",
      author: "Michael Chen",
      time: "1 day ago",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      categoryColor: "bg-blue-600"
    },
    {
      id: 7,
      category: "LIFESTYLE",
      title: "Minimalism: Living with Less, Enjoying More",
      excerpt: "Explore how minimalist living can lead to greater happiness and reduced stress in your daily life.",
      author: "Emma Thompson",
      time: "2 days ago",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=250&fit=crop",
      categoryColor: "bg-indigo-500"
    },
    {
      id: 8,
      category: "SCIENCE",
      title: "Mars Exploration: Latest Discoveries from Perseverance",
      excerpt: "Recent findings from NASA's Mars rover reveal fascinating insights about the Red Planet's past.",
      author: "Dr. Alex Kumar",
      time: "3 days ago",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=250&fit=crop",
      categoryColor: "bg-red-600"
    },
    {
      id: 9,
      category: "FASHION",
      title: "Sustainable Fashion: Eco-Friendly Clothing Trends",
      excerpt: "The fashion industry is going green. Discover the latest sustainable fashion trends and brands.",
      author: "Sophie Martin",
      time: "4 days ago",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=250&fit=crop",
      categoryColor: "bg-emerald-500"
    },
    {
      id: 10,
      category: "SPORTS",
      title: "The Rise of Esports: Digital Athletics Revolution",
      excerpt: "How competitive gaming is becoming a mainstream sport with millions of fans worldwide.",
      author: "Jake Wilson",
      time: "5 days ago",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      categoryColor: "bg-yellow-500"
    },
    {
      id: 11,
      category: "ART",
      title: "Digital Art Revolution: NFTs and Creative Expression",
      excerpt: "How blockchain technology is transforming the art world and empowering digital artists.",
      author: "Isabella Garcia",
      time: "6 days ago",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=250&fit=crop",
      categoryColor: "bg-purple-500"
    },
    {
      id: 12,
      category: "EDUCATION",
      title: "Online Learning: Transforming Education Globally",
      excerpt: "The pandemic accelerated online education adoption. Here's how it's changing learning forever.",
      author: "Prof. Robert Lee",
      time: "1 week ago",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      categoryColor: "bg-teal-500"
    },
    {
      id: 13,
      category: "ENVIRONMENT",
      title: "Climate Change Solutions: Renewable Energy Progress",
      excerpt: "Breakthrough innovations in solar and wind energy are making clean power more accessible.",
      author: "Dr. Lisa Zhang",
      time: "1 week ago",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop",
      categoryColor: "bg-green-600"
    },
    {
      id: 14,
      category: "FINANCE",
      title: "Cryptocurrency: Understanding Digital Currency Future",
      excerpt: "A comprehensive guide to cryptocurrency investing and the future of digital finance.",
      author: "Daniel Park",
      time: "1 week ago",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=400&h=250&fit=crop",
      categoryColor: "bg-amber-500"
    },
    {
      id: 15,
      category: "MUSIC",
      title: "Streaming Revolution: How Music Consumption Changed",
      excerpt: "The shift from physical media to streaming platforms has revolutionized the music industry.",
      author: "Taylor Brooks",
      time: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
      categoryColor: "bg-rose-500"
    },
    {
      id: 16,
      category: "PHOTOGRAPHY",
      title: "Mobile Photography: Creating Art with Smartphones",
      excerpt: "Professional photography tips and techniques using just your smartphone camera.",
      author: "Chris Anderson",
      time: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=250&fit=crop",
      categoryColor: "bg-slate-600"
    },
    {
      id: 17,
      category: "GAMING",
      title: "Next-Gen Gaming: Virtual Reality and Beyond",
      excerpt: "Explore the future of gaming with VR, AR, and emerging technologies that will change how we play.",
      author: "Ryan Mitchell",
      time: "2 weeks ago",
      image: "https://wallpapers.com/images/hd/lol-yasuo-4k-gaming-lc3i8x6n4hjd2268.jpg",
      categoryColor: "bg-violet-600"
    },
    {
      id: 18,
      category: "WELLNESS",
      title: "Meditation and Mindfulness in Modern Life",
      excerpt: "How ancient practices of meditation are helping people cope with modern stress and anxiety.",
      author: "Dr. Rachel Green",
      time: "3 weeks ago",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
      categoryColor: "bg-lime-500"
    },
    {
      id: 19,
      category: "AUTOMOTIVE",
      title: "Electric Vehicles: The Future of Transportation",
      excerpt: "The automotive industry's shift toward electric vehicles and what it means for consumers.",
      author: "Mark Johnson",
      time: "3 weeks ago",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCaO4mfbOzzaB1ua5hpcLQqaccYMrl-EozA&s",
      categoryColor: "bg-cyan-600"
    },
    {
      id: 20,
      category: "BOOKS",
      title: "Digital Reading: E-books vs Traditional Books",
      excerpt: "Analyzing the pros and cons of digital reading compared to traditional paper books.",
      author: "Jennifer Davis",
      time: "1 month ago",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=250&fit=crop",
      categoryColor: "bg-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary text-center mb-12">
          Latest Blog Posts
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog) => (
            <Link 
              to={`/blog/${blog.id}`} 
              key={blog.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`${blog.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide`}>
                    {blog.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {blog.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-900 font-medium text-sm">{blog.author}</p>
                      <p className="text-gray-500 text-xs">{blog.time}</p>
                    </div>
                  </div>
                  
                  <span className="text-primary hover:text-primary/80 font-medium text-sm transition-colors duration-300">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;