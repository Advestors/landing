'use client';

import { motion } from 'framer-motion';
import { DollarSign, MapPin, Calendar, Shield, TrendingUp, Users } from 'lucide-react';

export default function AdvestorsFeatures() {
  const features = [
    {
      icon: DollarSign,
      title: "Passive Income",
      description: "Earn $50-500+ per month from spaces you already own. Set your own rates and terms.",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Any Space Works",
      description: "Car windows, balconies, Instagram bios, gym TVs, delivery trucks - everything is ad space.",
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose when your space is available. Pause anytime or set specific dates.",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "We handle all payments, contracts, and advertiser verification. Your space, your control.",
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Growing Demand",
      description: "Join 50,000+ successful hosts already earning from their spaces.",
      color: "text-pink-600"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Connect with other hosts, share tips, and maximize your earnings together.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Why <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Advestors</span> Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Turn your unused spaces into reliable income streams with our proven platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
