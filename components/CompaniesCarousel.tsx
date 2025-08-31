'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CompaniesCarousel() {
  const [isVisible, setIsVisible] = useState(false);

  const companies = [
    { 
      name: 'Nike', 
      logo: 'NIKE',
      color: '#000000',
      tier: 'premium' 
    },
    { 
      name: 'Coca-Cola', 
      logo: 'COCA-COLA',
      color: '#E31837',
      tier: 'premium' 
    },
    { 
      name: 'Tesla', 
      logo: 'TESLA',
      color: '#E31937',
      tier: 'premium' 
    },
    { 
      name: 'Netflix', 
      logo: 'NETFLIX',
      color: '#E50914',
      tier: 'premium' 
    },
    { 
      name: 'Apple', 
      logo: 'APPLE',
      color: '#000000',
      tier: 'premium' 
    },
    { 
      name: 'Google', 
      logo: 'GOOGLE',
      color: '#4285F4',
      tier: 'premium' 
    },
    { 
      name: 'Microsoft', 
      logo: 'MICROSOFT',
      color: '#00A4EF',
      tier: 'premium' 
    },
    { 
      name: 'Amazon', 
      logo: 'AMAZON',
      color: '#FF9900',
      tier: 'premium' 
    },
    { 
      name: 'Meta', 
      logo: 'META',
      color: '#0668E1',
      tier: 'premium' 
    },
    { 
      name: 'Spotify', 
      logo: 'SPOTIFY',
      color: '#1DB954',
      tier: 'premium' 
    },
    { 
      name: 'Uber', 
      logo: 'UBER',
      color: '#000000',
      tier: 'premium' 
    },
    { 
      name: 'Airbnb', 
      logo: 'AIRBNB',
      color: '#FF5A5F',
      tier: 'premium' 
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of successful brands already using Advestors to reach their audiences
          </p>
        </motion.div>

        <div className="relative overflow-hidden group">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
          
          <div className="flex animate-scroll-horizontal group-hover:pause">
            {/* First set of companies */}
            <div className="flex items-center gap-12 px-6 min-w-max">
              {companies.map((company, index) => (
                <motion.div
                  key={`${company.name}-1`}
                  className="flex items-center justify-center group/company"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    {/* B&W Logo (default) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-400 filter grayscale opacity-70 group-hover/company:opacity-0 transition-all duration-300">
                        {company.logo}
                      </span>
                    </div>
                    {/* Color Logo (on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span 
                        className="text-lg font-bold opacity-0 group-hover/company:opacity-100 transition-all duration-300"
                        style={{ color: company.color }}
                      >
                        {company.logo}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Second set of companies (duplicate for seamless loop) */}
            <div className="flex items-center gap-12 px-6 min-w-max">
              {companies.map((company, index) => (
                <motion.div
                  key={`${company.name}-2`}
                  className="flex items-center justify-center group/company"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    {/* B&W Logo (default) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-400 filter grayscale opacity-70 group-hover/company:opacity-0 transition-all duration-300">
                        {company.logo}
                      </span>
                    </div>
                    {/* Color Logo (on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span 
                        className="text-lg font-bold opacity-0 group-hover/company:opacity-100 transition-all duration-300"
                        style={{ color: company.color }}
                      >
                        {company.logo}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">50,000+</div>
            <div className="text-gray-600">Active Hosts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">$2.5M+</div>
            <div className="text-gray-600">Paid to Hosts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">98%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
