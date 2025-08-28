'use client';

import { motion } from 'framer-motion';
import { UserPlus, List, Brain, DollarSign } from 'lucide-react';
import { useState } from 'react';

export default function HeroViz() {
  const [hoveredStep, setHoveredStep] = useState(null);

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
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/30 via-purple-100/30 to-pink-100/30 rounded-3xl" />
      
      <div className="relative z-10 flex items-center justify-center space-x-8">
        {steps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Glowing line connector */}
            {index < steps.length - 1 && (
              <motion.div
                className={`absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r ${step.color} rounded-full`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                style={{
                  boxShadow: `0 0 20px ${getGlowColor(step.glowColor)}`,
                }}
              />
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
                w-32 h-32 rounded-2xl border-2 border-gray-200/50 
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
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}
                    animate={hoveredStep === step.id ? { 
                      scale: 1.1,
                      boxShadow: `0 0 30px ${getGlowColor(step.glowColor)}`
                    } : { 
                      scale: 1,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-6 h-6" />
                  </motion.div>
                  
                  {/* Title - only visible on hover */}
                  <motion.div
                    className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ 
                      opacity: hoveredStep === step.id ? 1 : 0,
                      y: hoveredStep === step.id ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="font-bold text-gray-800 text-base whitespace-nowrap">{step.title}</h3>
                  </motion.div>
                </div>
              </div>
              
              {/* Hover glow effect */}
              {hoveredStep === step.id && (
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20 blur-xl`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          </div>
        ))}
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60"
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
