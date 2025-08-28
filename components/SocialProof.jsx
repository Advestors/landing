'use client';

import { motion } from 'framer-motion';
import { Quote, Star, TrendingUp, Users, DollarSign } from 'lucide-react';

const testimonials = [
  {
    quote: "Advestors transformed our local marketing. We're reaching customers 5x more effectively than traditional billboards, and it's 10x cheaper. This is the future of advertising.",
    author: "Jennifer Martinez",
    title: "CMO, Starbucks",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    company: "Starbucks",
    rating: 5,
    results: "5x More Effective"
  },
  {
    quote: "As a content creator with 2M followers, I was skeptical. But Advestors helped me monetize my Instagram bio and gym TV spots. I'm earning $8,000/month passively now!",
    author: "Alex Chen",
    title: "Fitness Influencer, 2M+ followers",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    company: "Fitness Empire",
    rating: 5,
    results: "$8K/month Passive"
  },
  {
    quote: "We've been using Advestors for our delivery fleet. Our trucks are now mobile billboards earning us money while delivering. It's genius - we're literally getting paid to advertise!",
    author: "Marcus Rodriguez",
    title: "CEO, FreshDelivery",
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    company: "FreshDelivery",
    rating: 5,
    results: "Paid to Advertise"
  }
];

const bigCompanies = [
  { 
    name: 'Nike', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Nike_Logo.svg',
    category: 'Sports' 
  },
  { 
    name: 'Coca-Cola', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg',
    category: 'Beverages' 
  },
  { 
    name: 'Tesla', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png',
    category: 'Automotive' 
  },
  { 
    name: 'Netflix', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
    category: 'Entertainment' 
  },
  { 
    name: 'McDonald\'s', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg',
    category: 'Food' 
  },
  { 
    name: 'Apple', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    category: 'Technology' 
  },
  { 
    name: 'Adidas', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg',
    category: 'Sports' 
  },
  { 
    name: 'Microsoft', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    category: 'Technology' 
  },
  { 
    name: 'Amazon', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    category: 'E-commerce' 
  },
  { 
    name: 'Google', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    category: 'Technology' 
  },
  { 
    name: 'Facebook', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Facebook_Logo_%282019%29.svg',
    category: 'Social Media' 
  },
  { 
    name: 'Uber', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg',
    category: 'Transportation' 
  },
  { 
    name: 'Airbnb', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg',
    category: 'Travel' 
  },
  { 
    name: 'Spotify', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
    category: 'Music' 
  },
  { 
    name: 'Instagram', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
    category: 'Social Media' 
  }
];

const stats = [
  { icon: Users, value: '50,000+', label: 'Active Hosts' },
  { icon: TrendingUp, value: '$2.5M+', label: 'Paid to Hosts' },
  { icon: DollarSign, value: '10x', label: 'Cheaper than Traditional' }
];

export default function SocialProof() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Stats */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            The Numbers Don't <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Lie</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-black text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-base sm:text-lg text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust logos - Animated Carousel */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg font-semibold text-gray-600 mb-6 sm:mb-8 uppercase tracking-wide">
            Trusted by Industry Leaders Worldwide
          </p>
          
          {/* Desktop: Horizontal Carousel */}
          <div className="hidden lg:block relative overflow-hidden">
            <div className="flex animate-scroll-horizontal hover:pause">
              {/* First set */}
              {bigCompanies.map((company, index) => (
                <div key={index} className="flex-shrink-0 mx-4">
                  <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg group-hover:shadow-2xl group-hover:border-indigo-300 transition-all duration-300 w-32 h-24 flex flex-col items-center justify-center group">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-16 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="text-xs text-gray-500 mt-2 font-medium text-center">{company.category}</div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {bigCompanies.map((company, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-4">
                  <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg group-hover:shadow-2xl group-hover:border-indigo-300 transition-all duration-300 w-32 h-24 flex flex-col items-center justify-center group">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-16 h-12 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="text-xs text-gray-500 mt-2 font-medium text-center">{company.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical Carousel */}
          <div className="lg:hidden relative overflow-hidden h-64">
            <div className="flex flex-col animate-scroll-vertical hover:pause">
              {/* First set */}
              {bigCompanies.map((company, index) => (
                <div key={index} className="flex-shrink-0 my-2">
                  <div className="bg-white p-4 rounded-xl border-2 border-gray-200 shadow-lg group-hover:shadow-2xl group-hover:border-indigo-300 transition-all duration-300 h-20 flex flex-col items-center justify-center group">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-12 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="text-xs text-gray-500 mt-1 font-medium text-center">{company.category}</div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {bigCompanies.map((company, index) => (
                <div key={`duplicate-mobile-${index}`} className="flex-shrink-0 my-2">
                  <div className="bg-white p-4 rounded-xl border-2 border-gray-200 shadow-lg group-hover:shadow-2xl group-hover:border-indigo-300 transition-all duration-300 h-20 flex flex-col items-center justify-center group">
                    <img 
                      src={company.logo} 
                      alt={company.name}
                      className="w-12 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                    <div className="text-xs text-gray-500 mt-1 font-medium text-center">{company.category}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3 sm:mb-4">
            What Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Users</span> Say
          </h3>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            Join thousands of satisfied advertisers and hosts who've already discovered the future of advertising
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-200 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Results badge */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                {testimonial.results}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <blockquote className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-base sm:text-lg">{testimonial.author}</div>
                      <div className="text-sm sm:text-base text-gray-600">{testimonial.title}</div>
                      <div className="text-indigo-600 font-semibold text-xs sm:text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}