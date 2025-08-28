'use client';

import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Users, Banknote, Eye } from 'lucide-react';

const advertiserFeatures = [
  { icon: Target, text: 'Target local & digital audiences' },
  { icon: Zap, text: 'Automate placement decisions' },
  { icon: TrendingUp, text: 'Pay only for results' }
];

const hostFeatures = [
  { icon: Users, text: 'Monetize your audience' },
  { icon: Eye, text: 'Flexible ad placements' },
  { icon: Banknote, text: 'Transparent payouts' }
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built for Both Sides of the Marketplace
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to advertise or monetize your platform, 
            we've designed Advestors to maximize value for everyone.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Advertisers */}
          <motion.div 
            className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-8 rounded-2xl border border-blue-200"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Advertisers</h3>
            </div>
            
            <div className="space-y-4">
              {advertiserFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hosts */}
          <motion.div 
            className="bg-gradient-to-br from-teal-50 to-teal-100/50 p-8 rounded-2xl border border-teal-200"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">For Hosts</h3>
            </div>
            
            <div className="space-y-4">
              {hostFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}