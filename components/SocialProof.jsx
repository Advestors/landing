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
  { name: 'Nike', logo: 'NIKE', category: 'Sports' },
  { name: 'Coca-Cola', logo: 'COCA-COLA', category: 'Beverages' },
  { name: 'Tesla', logo: 'TESLA', category: 'Automotive' },
  { name: 'Netflix', logo: 'NETFLIX', category: 'Entertainment' },
  { name: 'McDonald\'s', logo: 'MCDONALD\'S', category: 'Food' },
  { name: 'Apple', logo: 'APPLE', category: 'Technology' }
];

const stats = [
  { icon: Users, value: '50,000+', label: 'Active Hosts' },
  { icon: TrendingUp, value: '$2.5M+', label: 'Paid to Hosts' },
  { icon: DollarSign, value: '10x', label: 'Cheaper than Traditional' }
];

export default function SocialProof() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Stats */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            The Numbers Don't <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Lie</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust logos */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-semibold text-gray-600 mb-8 uppercase tracking-wide">
            Trusted by Industry Leaders Worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {bigCompanies.map((company, index) => (
              <motion.div 
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, opacity: 1 }}
              >
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-lg group-hover:shadow-2xl group-hover:border-indigo-300 transition-all duration-300">
                  <div className="text-2xl font-black text-gray-400 group-hover:text-indigo-600 transition-colors duration-300">
                    {company.logo}
                  </div>
                  <div className="text-xs text-gray-500 mt-2 font-medium">{company.category}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-black text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Users</span> Say
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied advertisers and hosts who've already discovered the future of advertising
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-3xl border-2 border-gray-200 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Results badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                {testimonial.results}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 font-medium">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                      <div className="text-gray-600">{testimonial.title}</div>
                      <div className="text-indigo-600 font-semibold text-sm">{testimonial.company}</div>
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