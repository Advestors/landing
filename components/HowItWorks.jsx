'use client';

import { motion } from 'framer-motion';
import { Upload, Users, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Ad Campaign',
    description: 'Create your campaign with targeting preferences and budget requirements.',
    color: 'blue'
  },
  {
    icon: Users,
    title: 'Match with Hosts',
    description: 'Our smart algorithm connects you with relevant hosts and audiences.',
    color: 'teal'
  },
  {
    icon: BarChart3,
    title: 'Track & Optimize',
    description: 'Monitor performance in real-time and optimize for better results.',
    color: 'green'
  }
];

const colorMap = {
  blue: { bg: 'bg-blue-600', border: 'border-blue-200', text: 'text-blue-700', light: 'bg-blue-50' },
  teal: { bg: 'bg-teal-600', border: 'border-teal-200', text: 'text-teal-700', light: 'bg-teal-50' },
  green: { bg: 'bg-green-600', border: 'border-green-200', text: 'text-green-700', light: 'bg-green-50' }
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our streamlined process designed for maximum efficiency.
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gray-200 rounded-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`${colorMap[step.color].light} p-8 rounded-2xl border ${colorMap[step.color].border} relative`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Step number */}
                <div className={`w-12 h-12 ${colorMap[step.color].bg} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                
                {/* Step indicator */}
                <div className={`absolute -top-3 left-8 w-6 h-6 ${colorMap[step.color].bg} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}