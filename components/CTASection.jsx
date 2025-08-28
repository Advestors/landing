'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap, TrendingUp, DollarSign } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-y-6"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6">
            The Future of Advertising is <span className="text-yellow-300">Here</span>
          </h2>
          <p className="text-2xl text-indigo-100 max-w-4xl mx-auto font-medium leading-relaxed">
            Join the revolution that's changing how businesses advertise and how people earn money. 
            <span className="text-white font-bold"> Every surface is now a revenue opportunity.</span>
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="text-center text-white">
            <div className="text-4xl font-black mb-2">50,000+</div>
            <div className="text-indigo-100 font-medium">Active Hosts</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-black mb-2">$2.5M+</div>
            <div className="text-indigo-100 font-medium">Paid to Hosts</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-black mb-2">10x</div>
            <div className="text-indigo-100 font-medium">Cheaper than Traditional</div>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="group bg-white text-indigo-700 hover:text-indigo-800 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Zap className="w-6 h-6" />
            Start Earning Money Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.button>
          
          <motion.button 
            className="group border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-black text-xl flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-sm hover:border-white/50 hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Users className="w-6 h-6" />
            Advertise My Business
          </motion.button>
        </motion.div>

        {/* Urgency CTA */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20 shadow-2xl max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="w-8 h-8 text-green-600" />
                <span className="text-2xl font-black text-gray-900">Limited Time Offer</span>
              </div>
              <h3 className="text-3xl font-black text-gray-900 mb-4">Get 50% Off Your First Month!</h3>
              <p className="text-gray-600 mb-6 text-lg">Join now and lock in exclusive early adopter pricing. This offer expires in 48 hours.</p>
              
              <div className="flex max-w-md mx-auto gap-3 mb-6">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-xl border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
                />
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Claim Offer
                </button>
              </div>
              
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span>Instant activation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-indigo-100 text-lg mb-4">
            <span className="font-bold">Don't wait.</span> Every day you're not on Advestors, you're losing money.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-10 py-4 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl">
            🚀 Join the Revolution Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}