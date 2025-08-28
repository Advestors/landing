'use client';

import { motion } from 'framer-motion';
import { Target, Zap, TrendingUp, Users, Banknote, Eye, Car, Building, Smartphone, Tv } from 'lucide-react';

const advertiserFeatures = [
  { icon: Target, text: 'Hyper-local targeting with real-world impact' },
  { icon: Zap, text: 'Access to 50,000+ unique ad spaces instantly' },
  { icon: TrendingUp, text: '10x cheaper than traditional advertising' }
];

const hostFeatures = [
  { icon: Users, text: 'Monetize ANY space you own or control' },
  { icon: Eye, text: 'Set your own prices & availability' },
  { icon: Banknote, text: 'Earn $50-$5000+ per month passively' }
];

const adSpaceExamples = [
  { icon: Car, text: 'Car Windows', category: 'Mobile' },
  { icon: Building, text: 'Storefronts', category: 'Retail' },
  { icon: Smartphone, text: 'Social Media', category: 'Digital' },
  { icon: Tv, text: 'Gym TVs', category: 'Entertainment' }
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
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            The <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Revolution</span> in Advertising
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-medium">
            We're turning every surface, screen, and space into a revenue-generating advertising opportunity. 
            <span className="text-indigo-700 font-bold"> The future is now.</span>
          </p>
        </motion.div>

        {/* Ad Space Examples */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">What Can You Advertise On?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {adSpaceExamples.map((example, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <example.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{example.text}</h4>
                <span className="text-sm text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-full">{example.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Advertisers */}
          <motion.div 
            className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 p-8 rounded-3xl border-2 border-indigo-200 shadow-xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-gray-900">For Advertisers</h3>
                <p className="text-indigo-600 font-semibold">Reach audiences like never before</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {advertiserFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-indigo-600 rounded-2xl text-white text-center">
              <div className="text-2xl font-black">$50</div>
              <div className="text-sm opacity-90">Average cost per campaign</div>
            </div>
          </motion.div>

          {/* Hosts */}
          <motion.div 
            className="bg-gradient-to-br from-purple-50 to-purple-100/50 p-8 rounded-3xl border-2 border-purple-200 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-gray-900">For Hosts</h3>
                <p className="text-purple-600 font-semibold">Turn your space into cash</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {hostFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-purple-600 rounded-2xl text-white text-center">
              <div className="text-2xl font-black">$2,500+</div>
              <div className="text-sm opacity-90">Top hosts earn monthly</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}