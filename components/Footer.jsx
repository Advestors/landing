'use client';

import { motion } from 'framer-motion';
import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = [
  { title: 'About', href: '#' },
  { title: 'Terms', href: '#' },
  { title: 'Privacy', href: '#' },
  { title: 'Contact', href: '#' }
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Advestors
            </h3>
            <p className="text-gray-400 leading-relaxed">
              The marketplace where advertisers and hosts collaborate to create 
              meaningful connections and drive real results.
            </p>
          </motion.div>

          {/* Newsletter */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">Get notified about our launch and latest features.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Links & Social */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex flex-wrap gap-6 text-gray-400">
              {footerLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            © 2025 Advestors. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Built with ❤️ for the advertising community.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}