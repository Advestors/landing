'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Target, BarChart3 } from 'lucide-react';

export default function AdvertisersCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Ready to <span className="text-yellow-300">Launch</span> Your Campaign?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Access 50,000+ unique advertising spaces and reach your target audience with precision. 
            Start your campaign today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-yellow-300">
              <Target className="w-6 h-6" />
              <span className="text-2xl font-bold">50,000+</span>
              <span className="text-lg">ad spaces</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-300">
              <BarChart3 className="w-6 h-6" />
              <span className="text-2xl font-bold">3.2x</span>
              <span className="text-lg">better ROI</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
              <span>Start Campaign Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button className="group border-2 border-white/30 hover:border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
              View Spaces
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
