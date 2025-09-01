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
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: '#', label: 'Trustpilot' }
];

const quickStats = [
  { icon: Users, value: '50,000+', label: 'Active Hosts' },
  { icon: DollarSign, value: '$2.5M+', label: 'Paid to Hosts' },
  { icon: Zap, value: '24h', label: 'Payout Time' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center sm:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
              <Logo size="lg" className="sm:size-xl lg:size-xl drop-shadow-lg" />
              <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Advestor
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg">
              The innovative platform that's turning every surface, screen, and space into a revenue-generating advertising opportunity.
            </p>
            
            {/* Trustpilot Rating */}
            <div className="flex justify-center sm:justify-start">
              <a 
                href="https://www.trustpilot.com/review/advestors.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <img 
                  src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-white.svg" 
                  alt="Trustpilot"
                  className="h-8 sm:h-10 mb-2"
                />
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-400'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-300">4.5/5</span>
                </div>
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="space-y-2 sm:space-y-3">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm sm:text-base">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center sm:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold text-white">Platform</h4>
            <div className="space-y-2 sm:space-y-3">
              {footerLinks.slice(0, 3).map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center sm:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold text-white">Company</h4>
            <div className="space-y-2 sm:space-y-3">
              {footerLinks.slice(3).map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform text-sm sm:text-base"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-4 sm:space-y-6 text-center sm:text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg sm:text-xl font-bold text-white">Stay Ahead</h4>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Get exclusive access to new features, success stories, and money-making opportunities.
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm sm:text-base"
              />
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 text-sm sm:text-base">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                Get Early Access
              </button>
            </div>
          </motion.div>
        </div>

        {/* Social & Bottom */}
        <motion.div 
          className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300 group-hover:text-white" />
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
              <Logo size="sm" className="opacity-70" />
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 Advestor. All rights reserved.
              </p>
            </div>
            <p className="text-gray-500 text-xs">
              🚀 Built for the future of advertising
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Powered by <span className="font-semibold text-white">Advestor</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}