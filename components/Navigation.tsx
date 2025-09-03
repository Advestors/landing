'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './ui/logo';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setIsScrolled(window.scrollY > 100);
      } else {
        setIsScrolled(true); // Always show on other pages
      }
    };

    // Set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navigationItems = [
    { name: 'Home', href: '/', current: pathname === '/' },
    { name: 'Advestors', href: '/advestors', current: pathname === '/advestors' },
    { name: 'Advertisers', href: '/advertisers', current: pathname === '/advertisers' },
    { name: 'Contact', href: '/contact', current: pathname === '/contact' },
  ];

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="hidden md:flex fixed top-4 left-0 right-0 z-50 justify-center"
        >
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200/30 rounded-xl shadow-sm">
            <div className="flex items-center gap-6 h-12 px-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <Logo size="sm" />
                <span className="text-base font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Advestors
                </span>
              </Link>

              {/* Navigation */}
              <div className="flex items-center gap-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-1.5 text-sm font-medium rounded-xl transition-colors duration-200 ${
                      item.current
                        ? 'text-white bg-indigo-600'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
