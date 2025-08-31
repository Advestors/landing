'use client';

import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp } from 'lucide-react';

export default function AdvertisersSocialProof() {
  const testimonials = [
    {
      name: "Jennifer Park",
      role: "Marketing Director, Nike",
      results: "3.2x ROI increase",
      text: "Our campaign through Advestors delivered 3.2x better ROI than traditional digital ads.",
      avatar: "JP"
    },
    {
      name: "David Chen",
      role: "CEO, StartupXYZ",
      results: "45% more engagement",
      text: "We saw 45% higher engagement rates compared to social media advertising.",
      avatar: "DC"
    },
    {
      name: "Maria Garcia",
      role: "Brand Manager, Coca-Cola",
      results: "2.8x brand awareness",
      text: "The authentic placement in real spaces increased our brand awareness by 2.8x.",
      avatar: "MG"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Campaign <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how leading brands achieve exceptional results with our platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-purple-200 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center gap-2 text-purple-600 font-bold">
                    <TrendingUp className="w-4 h-4" />
                    {testimonial.results}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
