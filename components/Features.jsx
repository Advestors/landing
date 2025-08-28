'use client';

import { motion } from 'framer-motion';
import { Brain, BarChart3, CreditCard, Globe, Shield, Zap, Target, Users } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Matching',
    description: 'Our algorithm instantly connects your ads with the perfect spaces and audiences. Get 3x better engagement than traditional ads.',
    color: 'indigo',
    stat: '3x Better'
  },
  {
    icon: Target,
    title: 'Hyper-Local Targeting',
    description: 'Reach customers exactly where they are - from neighborhood stores to gyms to delivery trucks. Precision targeting that actually works.',
    color: 'purple',
    stat: '50,000+ Spaces'
  },
  {
    icon: CreditCard,
    title: 'Instant Payments',
    description: 'Hosts get paid within 24 hours. No waiting, no hidden fees. Transparent revenue sharing that keeps everyone happy.',
    color: 'pink',
    stat: '24h Payouts'
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Verified hosts, quality control, and insurance coverage. Your brand is safe with our enterprise-grade security.',
    color: 'green',
    stat: '100% Safe'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track impressions, engagement, and ROI in real-time. Optimize campaigns on the fly with live performance data.',
    color: 'blue',
    stat: 'Live Data'
  },
  {
    icon: Users,
    title: 'Community Network',
    description: 'Join 50,000+ hosts and advertisers. Share best practices, collaborate on campaigns, and grow together.',
    color: 'teal',
    stat: '50K+ Users'
  }
];

const colorMap = {
  indigo: { 
    bg: 'from-indigo-500 to-indigo-600', 
    glow: 'group-hover:shadow-indigo-500/25',
    border: 'border-indigo-200',
    light: 'bg-indigo-50',
    text: 'text-indigo-700'
  },
  purple: { 
    bg: 'from-purple-500 to-purple-600', 
    glow: 'group-hover:shadow-purple-500/25',
    border: 'border-purple-200',
    light: 'bg-purple-50',
    text: 'text-purple-700'
  },
  pink: { 
    bg: 'from-pink-500 to-pink-600', 
    glow: 'group-hover:shadow-pink-500/25',
    border: 'border-pink-200',
    light: 'bg-pink-50',
    text: 'text-pink-700'
  },
  green: { 
    bg: 'from-green-500 to-green-600', 
    glow: 'group-hover:shadow-green-500/25',
    border: 'border-green-200',
    light: 'bg-green-50',
    text: 'text-green-700'
  },
  blue: { 
    bg: 'from-blue-500 to-blue-600', 
    glow: 'group-hover:shadow-blue-500/25',
    border: 'border-blue-200',
    light: 'bg-blue-50',
    text: 'text-blue-700'
  },
  teal: { 
    bg: 'from-teal-500 to-teal-600', 
    glow: 'group-hover:shadow-teal-500/25',
    border: 'border-teal-200',
    light: 'bg-teal-50',
    text: 'text-teal-700'
  }
};

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            Why <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Everyone</span> is Switching
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
            We've built the most advanced advertising platform in history. 
            <span className="text-indigo-700 font-bold"> Join the revolution.</span>
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={`group bg-white p-8 rounded-3xl border-2 ${colorMap[feature.color].border} shadow-lg hover:shadow-2xl ${colorMap[feature.color].glow} transition-all duration-300 cursor-pointer relative overflow-hidden`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Stat badge */}
              <div className={`absolute top-4 right-4 bg-gradient-to-r ${colorMap[feature.color].bg} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                {feature.stat}
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${colorMap[feature.color].bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-black text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${colorMap[feature.color].bg} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-black mb-4">Ready to Experience the Future?</h3>
            <p className="text-xl text-indigo-100 mb-6">
              Join thousands of businesses already using Advestors to revolutionize their advertising
            </p>
            <button className="bg-white text-indigo-700 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started in 2 Minutes
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}