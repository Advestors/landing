'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroViz() {
  const canvasRef = useRef(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const animationRef = useRef();

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced network nodes representing the ecosystem
    const advertisers = [
      { x: 0.15, y: 0.2, label: 'Local Restaurant', size: 8, color: '#3B82F6', type: 'advertiser' },
      { x: 0.25, y: 0.4, label: 'E-commerce', size: 10, color: '#2563EB', type: 'advertiser' },
      { x: 0.1, y: 0.6, label: 'SaaS Startup', size: 7, color: '#1D4ED8', type: 'advertiser' }
    ];

    const hosts = [
      { x: 0.75, y: 0.15, label: 'Food Blogger', size: 9, color: '#14B8A6', type: 'host' },
      { x: 0.85, y: 0.35, label: 'Tech Podcast', size: 11, color: '#0D9488', type: 'host' },
      { x: 0.9, y: 0.55, label: 'Local News', size: 8, color: '#0F766E', type: 'host' },
      { x: 0.8, y: 0.75, label: 'Lifestyle Vlog', size: 9, color: '#115E59', type: 'host' }
    ];

    const audiences = [
      { x: 0.45, y: 0.8, label: 'Food Lovers', size: 6, color: '#10B981', type: 'audience' },
      { x: 0.55, y: 0.85, label: 'Tech Enthusiasts', size: 7, color: '#059669', type: 'audience' },
      { x: 0.35, y: 0.75, label: 'Local Community', size: 5, color: '#047857', type: 'audience' },
      { x: 0.65, y: 0.75, label: 'Young Professionals', size: 6, color: '#065F46', type: 'audience' }
    ];

    const allNodes = [...advertisers, ...hosts, ...audiences];

    // Value flow particles
    const valueFlows = [];
    
    // Create connections showing value exchange
    const connections = [
      // Advertiser to Host connections (ad spend)
      { from: advertisers[0], to: hosts[0], type: 'adSpend', strength: 0.8 },
      { from: advertisers[1], to: hosts[1], type: 'adSpend', strength: 0.9 },
      { from: advertisers[2], to: hosts[2], type: 'adSpend', strength: 0.7 },
      { from: advertisers[1], to: hosts[3], type: 'adSpend', strength: 0.6 },
      
      // Host to Audience connections (content delivery)
      { from: hosts[0], to: audiences[0], type: 'content', strength: 0.9 },
      { from: hosts[1], to: audiences[1], type: 'content', strength: 0.8 },
      { from: hosts[2], to: audiences[2], type: 'content', strength: 0.7 },
      { from: hosts[3], to: audiences[3], type: 'content', strength: 0.8 },
      
      // Cross-connections showing network effects
      { from: hosts[0], to: audiences[2], type: 'content', strength: 0.4 },
      { from: hosts[1], to: audiences[0], type: 'content', strength: 0.3 },
      { from: advertisers[0], to: hosts[2], type: 'adSpend', strength: 0.5 }
    ];

    // Animation variables
    let time = 0;
    let mouseX = 0;
    let mouseY = 0;

    // Mouse interaction
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left) / rect.width;
      mouseY = (e.clientY - rect.top) / rect.height;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      // Draw gradient background with network pattern
      const bgGradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height));
      bgGradient.addColorStop(0, 'rgba(59, 130, 246, 0.03)');
      bgGradient.addColorStop(0.5, 'rgba(20, 184, 166, 0.02)');
      bgGradient.addColorStop(1, 'rgba(16, 185, 129, 0.03)');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw connections with value flow animation
      connections.forEach((connection, i) => {
        const fromX = connection.from.x * width;
        const fromY = connection.from.y * height;
        const toX = connection.to.x * width;
        const toY = connection.to.y * height;
        
        // Calculate distance to mouse for interaction
        const midX = (fromX + toX) / 2;
        const midY = (fromY + toY) / 2;
        const distToMouse = Math.sqrt(Math.pow(mouseX * width - midX, 2) + Math.pow(mouseY * height - midY, 2));
        const mouseInfluence = Math.max(0, 1 - distToMouse / 100);
        
        // Animated pulse based on connection strength and time
        const pulse = Math.sin(time * 2 + i * 0.5) * 0.3 + 0.7;
        const opacity = (connection.strength * pulse + mouseInfluence * 0.3) * 0.6;
        
        // Different colors for different types of value flow
        let strokeColor;
        if (connection.type === 'adSpend') {
          strokeColor = `rgba(59, 130, 246, ${opacity})`; // Blue for ad spend
        } else {
          strokeColor = `rgba(20, 184, 166, ${opacity})`; // Teal for content delivery
        }
        
        ctx.beginPath();
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = 2 + mouseInfluence * 2;
        ctx.moveTo(fromX, fromY);
        
        // Curved connection line
        const controlX = midX + Math.sin(time + i) * 20;
        const controlY = midY - 40 - Math.cos(time + i) * 15;
        ctx.quadraticCurveTo(controlX, controlY, toX, toY);
        ctx.stroke();
        
        // Draw value flow particles along the connection
        if (connection.strength > 0.6) {
          const flowProgress = (time * 0.5 + i * 0.3) % 1;
          const flowX = fromX + (toX - fromX) * flowProgress;
          const flowY = fromY + (toY - fromY) * flowProgress + Math.sin(flowProgress * Math.PI) * -30;
          
          ctx.beginPath();
          ctx.arc(flowX, flowY, 3, 0, Math.PI * 2);
          ctx.fillStyle = connection.type === 'adSpend' ? 'rgba(59, 130, 246, 0.8)' : 'rgba(20, 184, 166, 0.8)';
          ctx.fill();
          
          // Glow effect for particles
          ctx.shadowColor = connection.type === 'adSpend' ? '#3B82F6' : '#14B8A6';
          ctx.shadowBlur = 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Draw network nodes with enhanced styling
      allNodes.forEach((node, i) => {
        const nodeX = node.x * width;
        const nodeY = node.y * height;
        
        // Calculate distance to mouse for interaction
        const distToMouse = Math.sqrt(Math.pow(mouseX * width - nodeX, 2) + Math.pow(mouseY * height - nodeY, 2));
        const mouseInfluence = Math.max(0, 1 - distToMouse / 80);
        
        const pulse = Math.sin(time * 1.5 + i * 0.7) * 0.2 + 0.8;
        const size = (node.size + mouseInfluence * 4) * pulse;
        
        // Outer glow ring
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, size + 8, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, size + 8);
        glowGradient.addColorStop(0, node.color + '40');
        glowGradient.addColorStop(1, node.color + '00');
        ctx.fillStyle = glowGradient;
        ctx.fill();
        
        // Main node
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, size, 0, Math.PI * 2);
        
        const nodeGradient = ctx.createRadialGradient(nodeX, nodeY, 0, nodeX, nodeY, size);
        nodeGradient.addColorStop(0, node.color);
        nodeGradient.addColorStop(0.7, node.color);
        nodeGradient.addColorStop(1, node.color + 'CC');
        
        ctx.fillStyle = nodeGradient;
        ctx.fill();
        
        // Enhanced glow for interaction
        if (mouseInfluence > 0.1) {
          ctx.shadowColor = node.color;
          ctx.shadowBlur = 20 + mouseInfluence * 10;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
        
        // Node border
        ctx.beginPath();
        ctx.arc(nodeX, nodeY, size, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Draw value metrics floating around
      const metrics = [
        { text: '+127% ROI', x: 0.2, y: 0.1, color: '#10B981' },
        { text: '$2.4K Revenue', x: 0.8, y: 0.1, color: '#14B8A6' },
        { text: '15K Reach', x: 0.1, y: 0.8, color: '#3B82F6' },
        { text: '94% Match Rate', x: 0.9, y: 0.9, color: '#059669' }
      ];

      metrics.forEach((metric, i) => {
        const metricPulse = Math.sin(time * 1.2 + i * 1.5) * 0.3 + 0.7;
        const x = metric.x * width + Math.sin(time * 0.8 + i) * 10;
        const y = metric.y * height + Math.cos(time * 0.6 + i) * 8;
        
        // Background bubble
        ctx.beginPath();
        ctx.arc(x, y, 25 * metricPulse, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fill();
        
        // Border
        ctx.strokeStyle = metric.color + '40';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Text
        ctx.fillStyle = metric.color;
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(metric.text, x, y + 3);
      });

      // Draw data streams between platform components
      const dataStreams = [
        { from: { x: 0.5, y: 0.1 }, to: { x: 0.5, y: 0.9 }, label: 'Platform Intelligence' }
      ];

      dataStreams.forEach((stream, i) => {
        const streamX = stream.from.x * width;
        const streamY = stream.from.y * height;
        const endY = stream.to.y * height;
        
        // Vertical data flow
        for (let j = 0; j < 5; j++) {
          const progress = ((time * 0.3 + j * 0.2) % 1);
          const y = streamY + (endY - streamY) * progress;
          const opacity = Math.sin(progress * Math.PI) * 0.6;
          
          ctx.beginPath();
          ctx.arc(streamX, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99, 102, 241, ${opacity})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [prefersReducedMotion]);

  // Enhanced static fallback showing the network value
  if (prefersReducedMotion) {
    return (
      <div className="w-full h-96 bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl border border-blue-100 flex items-center justify-center relative overflow-hidden">
        <svg viewBox="0 0 400 300" className="w-full h-full max-w-md">
          <defs>
            <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#14B8A6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <rect width="400" height="300" fill="url(#networkGradient)" />
          
          {/* Advertisers */}
          <circle cx="60" cy="60" r="8" fill="#3B82F6" filter="url(#glow)" />
          <circle cx="100" cy="120" r="10" fill="#2563EB" filter="url(#glow)" />
          <circle cx="40" cy="180" r="7" fill="#1D4ED8" filter="url(#glow)" />
          
          {/* Hosts */}
          <circle cx="300" cy="45" r="9" fill="#14B8A6" filter="url(#glow)" />
          <circle cx="340" cy="105" r="11" fill="#0D9488" filter="url(#glow)" />
          <circle cx="360" cy="165" r="8" fill="#0F766E" filter="url(#glow)" />
          <circle cx="320" cy="225" r="9" fill="#115E59" filter="url(#glow)" />
          
          {/* Audiences */}
          <circle cx="180" cy="240" r="6" fill="#10B981" filter="url(#glow)" />
          <circle cx="220" cy="255" r="7" fill="#059669" filter="url(#glow)" />
          <circle cx="140" cy="225" r="5" fill="#047857" filter="url(#glow)" />
          <circle cx="260" cy="225" r="6" fill="#065F46" filter="url(#glow)" />
          
          {/* Connection lines showing value flow */}
          <path d="M 60 60 Q 180 30 300 45" stroke="#3B82F6" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 100 120 Q 220 80 340 105" stroke="#2563EB" strokeWidth="3" fill="none" opacity="0.7" />
          <path d="M 40 180 Q 200 140 360 165" stroke="#1D4ED8" strokeWidth="2" fill="none" opacity="0.5" />
          
          <path d="M 300 45 Q 240 140 180 240" stroke="#14B8A6" strokeWidth="2" fill="none" opacity="0.6" />
          <path d="M 340 105 Q 280 180 220 255" stroke="#0D9488" strokeWidth="3" fill="none" opacity="0.7" />
          <path d="M 360 165 Q 250 195 140 225" stroke="#0F766E" strokeWidth="2" fill="none" opacity="0.5" />
          
          {/* Value metrics */}
          <text x="80" y="25" fill="#10B981" fontSize="10" fontWeight="bold" textAnchor="middle">+127% ROI</text>
          <text x="320" y="25" fill="#14B8A6" fontSize="10" fontWeight="bold" textAnchor="middle">$2.4K Revenue</text>
          <text x="40" y="285" fill="#3B82F6" fontSize="10" fontWeight="bold" textAnchor="middle">15K Reach</text>
          <text x="360" y="285" fill="#059669" fontSize="10" fontWeight="bold" textAnchor="middle">94% Match</text>
        </svg>
      </div>
    );
  }

  return (
    <motion.div 
      className="relative w-full h-96 rounded-2xl overflow-hidden border border-blue-100 shadow-xl bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-pointer"
      />
      
      {/* Enhanced node labels with value indicators */}
      <div className="absolute top-4 left-4 space-y-2">
        <div className="bg-blue-600/90 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-400/30 text-xs font-medium text-white">
          🏢 Advertisers
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-blue-100">
          Local Restaurant • E-commerce • SaaS
        </div>
      </div>
      
      <div className="absolute top-4 right-4 space-y-2 text-right">
        <div className="bg-teal-600/90 backdrop-blur-sm px-3 py-1 rounded-full border border-teal-400/30 text-xs font-medium text-white">
          📺 Hosts
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-teal-100">
          Bloggers • Podcasts • News • Vlogs
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-y-2 text-center">
        <div className="bg-green-600/90 backdrop-blur-sm px-3 py-1 rounded-full border border-green-400/30 text-xs font-medium text-white">
          👥 Audiences
        </div>
        <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-green-100">
          Food Lovers • Tech Enthusiasts • Local Community
        </div>
      </div>
      
      {/* Value flow indicators */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <div className="bg-blue-500/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-blue-200 border border-blue-400/20">
          💰 Ad Spend
        </div>
      </div>
      
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <div className="bg-teal-500/20 backdrop-blur-sm px-2 py-1 rounded text-xs text-teal-200 border border-teal-400/20">
          📊 Revenue Share
        </div>
      </div>
      
      {/* Platform value indicator */}
      <div className="absolute bottom-4 right-4">
        <div className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-white/20">
          ⚡ Smart Matching Engine
        </div>
      </div>
    </motion.div>
  );
}