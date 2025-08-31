'use client';

import { motion } from 'framer-motion';
import { Globe, Target, TrendingUp, Shield, Zap, Users } from 'lucide-react';

export default function ValueProposition() {
  const valueProps = [
    {
      icon: Globe,
      title: "Global Marketplace",
      description: "Access advertising spaces from car windows in Tokyo to Instagram bios in New York. Our platform connects you with opportunities worldwide.",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Reach your exact audience with demographic, location, and interest-based targeting. Every space is carefully curated for maximum impact.",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: TrendingUp,
      title: "Proven ROI",
      description: "Our advertisers see 3.2x better ROI compared to traditional digital advertising. Real results from real spaces.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "All spaces are vetted, all payments are secure, and all contracts are protected. Your success is our priority.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Launch campaigns in minutes, not weeks. Our streamlined process gets your message in front of your audience instantly.",
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join 50,000+ hosts and advertisers building the future of advertising together. Share insights, grow together.",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Why <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Advestors</span> is Revolutionary
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We're not just another advertising platform. We're redefining what advertising means by turning every space into an opportunity for connection and growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group-hover:border-gray-200">
                <div className={`w-16 h-16 rounded-2xl ${prop.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <prop.icon className={`w-8 h-8 ${prop.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {prop.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of successful businesses and hosts who are already transforming their advertising and revenue strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get Started Today
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
