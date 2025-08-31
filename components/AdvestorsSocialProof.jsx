'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function AdvestorsSocialProof() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Car Owner",
      earnings: "$180/month",
      text: "I never thought my car could make me money! I'm earning $180/month just from window ads.",
      avatar: "SC"
    },
    {
      name: "Mike Rodriguez",
      role: "Gym Owner",
      earnings: "$450/month",
      text: "The TV ads in my gym are generating $450/month. It's like having an extra employee!",
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Instagram Influencer",
      earnings: "$320/month",
      text: "My bio space is now a revenue stream. I'm earning $320/month from brand partnerships.",
      avatar: "ET"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of Advestors already earning passive income from their spaces
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
              <Quote className="w-8 h-8 text-green-200 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-green-600 font-bold">{testimonial.earnings}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
