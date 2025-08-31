'use client';

import { motion } from 'framer-motion';
import { Target, BarChart3, Globe, Zap, Users, Shield } from 'lucide-react';

export default function AdvertisersFeatures() {
  const features = [
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Reach your exact audience with demographic, location, and interest-based targeting.",
      color: "text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Real-time Analytics",
      description: "Track performance, engagement, and ROI with comprehensive dashboards and insights.",
      color: "text-pink-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access 50,000+ unique advertising spaces across all platforms and locations.",
      color: "text-red-600"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Launch campaigns in minutes with our streamlined process and pre-approved spaces.",
      color: "text-orange-600"
    },
    {
      icon: Users,
      title: "Authentic Audiences",
      description: "Connect with real people in their natural environments, not just digital spaces.",
      color: "text-indigo-600"
    },
    {
      icon: Shield,
      title: "Brand Safety",
      description: "All spaces are vetted and monitored to ensure your brand appears in appropriate contexts.",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Why <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Advertisers</span> Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach your target audience with precision and scale through authentic, real-world advertising spaces
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
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mb-6`}>
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
