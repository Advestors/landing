'use client';

import { motion } from 'framer-motion';
import { Brain, BarChart3, CreditCard, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart Matching',
    description: 'AI-powered recommendations connect advertisers with the most relevant hosts and audiences.',
    color: 'blue'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track campaign performance, engagement metrics, and ROI with detailed insights.',
    color: 'teal'
  },
  {
    icon: CreditCard,
    title: 'Automated Payments',
    description: 'Seamless payment processing with transparent fees and instant payouts for hosts.',
    color: 'green'
  },
  {
    icon: Globe,
    title: 'Local & Digital Reach',
    description: 'Scale from local businesses to global campaigns with our flexible platform.',
    color: 'purple'
  }
];

const colorMap = {
  blue: { 
    bg: 'from-blue-500 to-blue-600', 
    glow: 'group-hover:shadow-blue-500/25',
    border: 'border-blue-200',
    light: 'bg-blue-50'
  },
  teal: { 
    bg: 'from-teal-500 to-teal-600', 
    glow: 'group-hover:shadow-teal-500/25',
    border: 'border-teal-200',
    light: 'bg-teal-50'
  },
  green: { 
    bg: 'from-green-500 to-green-600', 
    glow: 'group-hover:shadow-green-500/25',
    border: 'border-green-200',
    light: 'bg-green-50'
  },
  purple: { 
    bg: 'from-purple-500 to-purple-600', 
    glow: 'group-hover:shadow-purple-500/25',
    border: 'border-purple-200',
    light: 'bg-purple-50'
  }
};

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Advertising
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to create, manage, and optimize your advertising campaigns.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={`group bg-white p-6 rounded-2xl border ${colorMap[feature.color].border} shadow-sm hover:shadow-xl ${colorMap[feature.color].glow} transition-all duration-300 cursor-pointer`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${colorMap[feature.color].bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}