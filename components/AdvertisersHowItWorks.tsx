'use client';

import { motion } from 'framer-motion';
import { Search, Target, Play, BarChart3 } from 'lucide-react';

export default function AdvertisersHowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Find Spaces",
      description: "Browse our marketplace of 50,000+ unique advertising spaces.",
      color: "text-purple-600"
    },
    {
      icon: Target,
      title: "Set Campaign",
      description: "Define your target audience, budget, and campaign duration.",
      color: "text-pink-600"
    },
    {
      icon: Play,
      title: "Launch & Monitor",
      description: "Your ads go live instantly. Track performance in real-time.",
      color: "text-red-600"
    },
    {
      icon: BarChart3,
      title: "Optimize & Scale",
      description: "Use insights to improve performance and expand your reach.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            How It <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Launch your advertising campaign in just 4 simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mx-auto`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-pink-200 transform translate-x-4"></div>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
