'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-6"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Start Advertising Smarter Today
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join thousands of businesses already using Advestors to grow their reach 
            and maximize their advertising ROI.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="group bg-white text-blue-700 hover:text-blue-800 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join as Advertiser
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
          
          <motion.button 
            className="group border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 backdrop-blur-sm hover:border-white/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-5 h-5" />
            Join as Host
          </motion.button>
        </motion.div>

        {/* Animated border container */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 rounded-2xl blur-sm"></div>
          <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to get started?</h3>
              <p className="text-gray-600 mb-6">Join our waitlist for early access and exclusive features.</p>
              <div className="flex max-w-md mx-auto gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}