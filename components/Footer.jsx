'use client';

import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Instagram, Zap, Users, DollarSign } from 'lucide-react';
import Logo from './ui/logo';

const footerLinks = [
  { title: 'How It Works', href: '#how-it-works' },
  { title: 'Success Stories', href: '#success-stories' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Support', href: '#support' },
  { title: 'Terms', href: '#terms' },
  { title: 'Privacy', href: '#privacy' }
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' }
];

const quickStats = [
  { icon: Users, value: '50,000+', label: 'Active Hosts' },
  { icon: DollarSign, value: '$2.5M+', label: 'Paid to Hosts' },
  { icon: Zap, value: '24h', label: 'Payout Time' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <Logo size="xl" className="drop-shadow-lg" />
              <h3 className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Advestors
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              The revolutionary marketplace that's turning every surface, screen, and space into a revenue-generating advertising opportunity.
            </p>
            
            {/* Quick Stats */}
            <div className="space-y-3">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white">Platform</h4>
            <div className="space-y-3">
              {footerLinks.slice(0, 3).map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white">Company</h4>
            <div className="space-y-3">
              {footerLinks.slice(3).map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold text-white">Stay Ahead</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              Get exclusive access to new features, success stories, and money-making opportunities.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                <Mail className="w-4 h-4" />
                Get Early Access
              </button>
            </div>
          </motion.div>
        </div>

        {/* Social & Bottom */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <social.icon className="w-6 h-6 text-gray-300 group-hover:text-white" />
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
              <Logo size="sm" className="opacity-70" />
              <p className="text-gray-400 text-sm">
                © 2025 Advestors. All rights reserved.
              </p>
            </div>
            <p className="text-gray-500 text-xs">
              🚀 Built for the future of advertising
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}