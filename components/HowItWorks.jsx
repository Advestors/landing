'use client';

import { motion } from 'framer-motion';
import { Upload, Users, BarChart3, Car, Building, Smartphone } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'List Your Space',
    description: 'Upload photos of your car windows, balcony, storefront, Instagram bio, or any space you control. Set your price and availability.',
    color: 'indigo',
    examples: ['Car Windows', 'Storefronts', 'Instagram Bios', 'Gym TVs']
  },
  {
    icon: Users,
    title: 'Get Matched Instantly',
    description: 'Our AI instantly connects you with relevant advertisers. No waiting, no negotiations - just automatic matching based on location and audience.',
    color: 'purple',
    examples: ['Local Businesses', 'National Brands', 'Startups', 'Influencers']
  },
  {
    icon: BarChart3,
    title: 'Earn Money Daily',
    description: 'Watch your earnings grow in real-time. Get paid within 24 hours for every impression, click, or conversion your space generates.',
    color: 'pink',
    examples: ['$50-$5000/month', 'Passive Income', '24h Payouts', 'No Hidden Fees']
  }
];

const colorMap = {
  indigo: { bg: 'bg-indigo-600', border: 'border-indigo-200', text: 'text-indigo-700', light: 'bg-indigo-50' },
  purple: { bg: 'bg-purple-600', border: 'border-purple-200', text: 'text-purple-700', light: 'bg-purple-50' },
  pink: { bg: 'bg-pink-600', border: 'border-pink-200', text: 'text-pink-700', light: 'bg-pink-50' }
};

const spaceTypes = [
  { icon: Car, name: 'Mobile Spaces', count: '25,000+' },
  { icon: Building, name: 'Physical Locations', count: '15,000+' },
  { icon: Smartphone, name: 'Digital Assets', count: '10,000+' }
];

export default function HowItWorks() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
            Start Earning in <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">3 Simple Steps</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto font-medium px-4 sm:px-0">
            From listing your space to earning money - it's that simple. 
            <span className="text-indigo-700 font-bold"> No experience needed.</span>
          </p>
        </motion.div>

        {/* Space Types Overview */}
        <motion.div 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {spaceTypes.map((type, index) => (
              <motion.div 
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{type.name}</h4>
                <div className="text-2xl sm:text-3xl font-black text-indigo-600">{type.count}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative">
          {/* Progress line - hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-2 bg-gray-200 rounded-full">
            <motion.div 
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`${colorMap[step.color].light} p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 ${colorMap[step.color].border} relative shadow-xl hover:shadow-2xl transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                {/* Step number */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${colorMap[step.color].bg} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-3 sm:mb-4">{step.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">{step.description}</p>
                
                {/* Examples */}
                <div className="space-y-2">
                  {step.examples.map((example, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${colorMap[step.color].bg} rounded-full`} />
                      <span className="text-gray-700 font-medium">{example}</span>
                    </div>
                  ))}
                </div>
                
                {/* Step indicator */}
                <div className={`absolute -top-3 sm:-top-4 left-6 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 ${colorMap[step.color].bg} rounded-full flex items-center justify-center text-white font-black text-sm sm:text-lg shadow-lg`}>
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">Ready to Turn Your Space Into Cash?</h3>
            <p className="text-lg sm:text-xl text-indigo-100 mb-4 sm:mb-6">
              Join 50,000+ hosts already earning passive income with Advestors
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-white text-indigo-700 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                List My Space Now
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 backdrop-blur-sm">
                See How Much I Can Earn
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}