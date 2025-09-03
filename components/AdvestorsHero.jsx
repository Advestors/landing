'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users, Store, DollarSign, MapPin, Calendar } from 'lucide-react';
import HeroViz from './HeroViz';

export default function AdvestorsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-blue-50 overflow-hidden pt-20">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 via-transparent to-blue-100/20" />
      
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        {/* Mobile: Stack vertically, Desktop: Side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 lg:pr-8 text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold w-fit mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <Store className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">💰 Turn Your Space Into Income</span>
              <span className="sm:hidden">💰 Earn Money</span>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <span className="bg-gradient-to-r from-green-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Your Space.
              </span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Your Rules.
              </span>{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-green-600 bg-clip-text text-transparent">
                Your Income.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              Rent out ANY space for advertising. From car windows to Instagram bios, 
              <span className="font-bold text-green-700"> turn your unused space into passive income.</span>
            </motion.p>

            {/* Key benefits */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <DollarSign className="w-4 h-4 text-green-500" />
                <span><span className="font-bold text-gray-900">$50-500</span> per month</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-blue-500" />
                <span><span className="font-bold text-gray-900">Any space</span> works</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Calendar className="w-4 h-4 text-indigo-500" />
                <span><span className="font-bold text-gray-900">Set your terms</span></span>
              </div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <button 
                className="group bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 lg:px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 hover:shadow-2xl"
                onClick={() => window.location.href = '/contact'}
              >
                <Store className="w-6 h-6" />
                <span>Start Earning Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              
              {/* <button 
                className="group border-2 border-gray-300 hover:border-green-400 text-gray-700 hover:text-green-700 px-8 lg:px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl bg-white/90 backdrop-blur-sm hover:bg-green-50"
                onClick={() => window.location.href = '/contact'}
              >
                <span>Learn More</span>
              </button> */}
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            >
              <p className="text-xs sm:text-sm text-gray-500 mb-3">Join thousands of successful hosts:</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 opacity-70">
                <span className="text-sm sm:text-lg font-bold text-gray-400">50,000+</span>
                <span className="text-sm sm:text-lg font-bold text-gray-400">Active Hosts</span>
                <span className="text-sm sm:text-lg font-bold text-gray-400">$2.5M+</span>
                <span className="text-sm sm:text-lg font-bold text-gray-400">Paid Out</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right visualization */}
          <motion.div 
            className="relative order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <HeroViz />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
