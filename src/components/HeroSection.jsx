import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiAnchor, FiZap } = FiIcons;

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with animated schematic lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep to-reactor-blue">
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#f5cb5c" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <motion.circle
            cx="500"
            cy="500"
            r="200"
            fill="none"
            stroke="#f5cb5c"
            strokeWidth="2"
            opacity="0.3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>
      </div>

      {/* Floating reactor particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-radiation-gold rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.5
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <SafeIcon icon={FiAnchor} className="text-4xl text-radiation-gold" />
            <SafeIcon icon={FiZap} className="text-4xl text-radiation-gold animate-pulse-glow" />
            <SafeIcon icon={FiAnchor} className="text-4xl text-radiation-gold" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading text-atomic-white mb-4">
            LCDR Nathaniel D. Cross
          </h1>
          
          <div className="border-t border-b border-radiation-gold/30 py-4 mb-6">
            <p className="text-xl md:text-2xl text-radiation-gold font-medium">
              U.S. Navy Nuclear Engineering Officer
            </p>
          </div>
          
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-lg md:text-xl text-control-gray italic mb-8 max-w-2xl mx-auto"
          >
            "He powered the fleet with nothing but intellect, control, and trust."
          </motion.blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <button className="group inline-flex items-center gap-3 bg-radiation-gold text-navy-deep px-8 py-4 rounded-lg font-heading text-lg font-medium hover:bg-radiation-gold/90 transition-all duration-300 transform hover:scale-105">
            Enter the Reactor Room of His Legacy
            <SafeIcon 
              icon={FiArrowRight} 
              className="text-xl transition-transform group-hover:translate-x-1" 
            />
          </button>
        </motion.div>

        {/* Technical specs overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-control-gray/70"
        >
          <div className="flex items-center gap-8">
            <div className="text-center">
              <div className="text-radiation-gold font-mono">PWR-S8G</div>
              <div>Reactor Type</div>
            </div>
            <div className="text-center">
              <div className="text-radiation-gold font-mono">20+ Years</div>
              <div>Service</div>
            </div>
            <div className="text-center">
              <div className="text-radiation-gold font-mono">100%</div>
              <div>Safety Record</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;