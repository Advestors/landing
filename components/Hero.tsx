'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Users, Globe, Target, CheckCircle, Play } from 'lucide-react';
import HeroViz from './HeroViz';
import Logo from './ui/logo';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden pt-20">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 via-transparent to-purple-100/20" />
      
      {/* Logo at the top */}
      <motion.div 
        className="absolute top-4 sm:top-6 lg:top-8 left-4 sm:left-6 lg:left-8 z-20 flex items-center gap-2 sm:gap-3 lg:gap-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Logo size="xl" className="sm:size-2xl lg:size-2xl drop-shadow-lg" />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Advestors
        </h1>
      </motion.div>
      
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold w-fit mx-auto lg:mx-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">🚀 The Future of Advertising is Here</span>
              <span className="sm:hidden">🚀 Future is Here</span>
            </motion.div>

            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Connect.
              </span>{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Collaborate.
              </span>{' '}
              <span className="bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
                Grow.
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            >
              The revolutionary marketplace where advertisers and hosts collaborate to maximize exposure and revenue. 
              <span className="font-bold text-indigo-700"> Everything is ad space now.</span>
            </motion.p>

            {/* Key benefits */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><span className="font-bold text-gray-900">50,000+</span> active hosts</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><span className="font-bold text-gray-900">$2.5M+</span> paid to hosts</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><span className="font-bold text-gray-900">98%</span> satisfaction rate</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span><span className="font-bold text-gray-900">Global</span> reach</span>
              </div>
            </motion.div>
            
            {/* Audience Selection Buttons */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <p className="text-lg font-semibold text-gray-800">Choose your path:</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {/* Advestors Button (Hosts) */}
                <Link href="/advestors" className="group">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 lg:px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 transform hover:scale-105 hover:shadow-2xl">
                    <Target className="w-6 h-6" />
                    <span>I'm an Advestor</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  <p className="text-sm text-gray-600 mt-2 text-center sm:text-left">Own space? Start earning money</p>
                </Link>
                
                {/* Advertisers Button */}
                <Link href="/advertisers" className="group">
                  <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 lg:px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 hover:shadow-2xl">
                    <Globe className="w-6 h-6" />
                    <span>I'm an Advertiser</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                  <p className="text-sm text-gray-600 mt-2 text-center sm:text-left">Need exposure? Find your audience</p>
                </Link>
              </div>
            </motion.div>

            {/* Demo button */}
            <motion.div 
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            >
              <button className="group inline-flex items-center gap-2 text-gray-600 hover:text-indigo-600 font-medium transition-colors duration-300">
                <Play className="w-5 h-5" />
                <span>Watch 2-minute demo</span>
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            >
              <p className="text-xs sm:text-sm text-gray-500 mb-3">Trusted by industry leaders:</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 opacity-70">
                <span className="text-sm sm:text-lg font-bold text-gray-400">Nike</span>
                <span className="text-sm sm:text-lg font-bold text-gray-400">Coca-Cola</span>
                <span className="text-sm sm:text-lg font-bold text-gray-400">Tesla</span>
                <span className="text-sm sm:text-lg font-bold text-gray-400">Netflix</span>
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