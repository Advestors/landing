'use client';

import { motion } from 'framer-motion';
import { UserPlus, List, Brain, DollarSign } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function HeroViz() {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const steps = [
    {
      id: 'register',
      icon: UserPlus,
      title: 'Register',
      color: 'from-blue-500 to-cyan-500',
      glowColor: 'blue'
    },
    {
      id: 'list',
      icon: List,
      title: 'Place Your List',
      color: 'from-purple-500 to-pink-500',
      glowColor: 'purple'
    },
    {
      id: 'ai-match',
      icon: Brain,
      title: 'AI-Match',
      color: 'from-green-500 to-emerald-500',
      glowColor: 'green'
    },
    {
      id: 'monetize',
      icon: DollarSign,
      title: 'Monetize',
      color: 'from-yellow-500 to-orange-500',
      glowColor: 'yellow'
    }
  ];

  return (
    <div className="relative w-full h-[500px] sm:h-[550px] lg:h-[600px] flex items-center justify-center mb-16 sm:mb-20 lg:mb-24">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-pink-100/30 rounded-3xl" />
      
      {/* Mobile: Vertical layout, Desktop: Horizontal layout */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-4 lg:space-x-8">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Glowing line connector - hidden on mobile, visible on desktop */}
            {index < steps.length - 1 && (
              <>
                {/* Mobile: Vertical line */}
                <div className="sm:hidden absolute -bottom-4 left-1/2 w-0.5 h-8 bg-gradient-to-b from-transparent to-gray-300 rounded-full" />
                {/* Desktop: Horizontal line */}
                <motion.div
                  className={`hidden sm:block absolute top-1/2 -right-2 lg:-right-4 w-4 lg:w-8 h-0.5 bg-gradient-to-r ${step.color} rounded-full`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  style={{
                    boxShadow: `0 0 20px ${getGlowColor(step.glowColor)}`,
                  }}
                />
              </>
            )}
            
            {/* Step box */}
            <motion.div
              className={`relative group cursor-pointer transition-all duration-500`}
              onMouseEnter={() => setHoveredStep(step.id)}
              onMouseLeave={() => setHoveredStep(null)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Box container */}
              <div className={`
                w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl border-2 border-gray-200/50 
                bg-white/80 backdrop-blur-sm shadow-lg
                transition-all duration-500 group-hover:scale-110
                ${hoveredStep === step.id ? 'border-opacity-100' : 'border-opacity-50'}
                ${hoveredStep === step.id ? 'shadow-2xl' : 'shadow-lg'}
              `}>
                {/* Icon container */}
                <div className={`
                  w-full h-full flex flex-col items-center justify-center
                  transition-all duration-500
                  ${hoveredStep === step.id ? 'opacity-100' : 'opacity-40'}
                `}>
                  <motion.div
                    className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                    animate={hoveredStep === step.id ? { 
                      scale: 1.1,
                      boxShadow: `0 0 30px ${getGlowColor(step.glowColor)}`
                    } : { 
                      scale: 1,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </motion.div>
                </div>
              </div>
              
              {/* Title - hidden by default, shown only on hover with mobile-optimized positioning */}
              <motion.div
                className="absolute top-full mt-4 sm:mt-4 left-1/2 transform -translate-x-1/2 text-center w-max"
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: hoveredStep === step.id ? 1 : 0,
                  y: hoveredStep === step.id ? 0 : 10
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-bold text-gray-800 text-xs sm:text-sm lg:text-base whitespace-nowrap">{step.title}</h3>
              </motion.div>
              
              {/* Hover glow effect */}
              {hoveredStep === step.id && (
                <motion.div
                  className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-xl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Floating particles effect - reduced on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 0.2, 0.6],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Helper function to get glow colors
function getGlowColor(color) {
  const colors = {
    blue: 'rgba(59, 130, 246, 0.5)',
    purple: 'rgba(147, 51, 234, 0.5)',
    green: 'rgba(34, 197, 94, 0.5)',
    yellow: 'rgba(234, 179, 8, 0.5)'
  };
  return colors[color] || colors.blue;
}
