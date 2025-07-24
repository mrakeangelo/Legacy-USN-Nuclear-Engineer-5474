import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAnchor, FiZap, FiHeart } = FiIcons;

const Footer = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "He powered the sea. Not with brawn — but with brilliance.",
    "In the Navy, a reactor never rests — and neither did he.",
    "Excellence isn't a destination — it's a discipline.",
    "The reactor teaches us that precision is not perfectionism — it's responsibility.",
    "True leadership isn't about commanding respect — it's about earning trust."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-navy-deep border-t border-radiation-gold/30 py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Quote carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="relative h-16 flex items-center justify-center">
            <motion.blockquote
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-2xl font-heading text-radiation-gold italic max-w-3xl mx-auto"
            >
              "{quotes[currentQuote]}"
            </motion.blockquote>
          </div>
          
          {/* Quote indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote
                    ? 'bg-radiation-gold scale-125'
                    : 'bg-control-gray/30 hover:bg-control-gray/50'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Memorial section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
              <SafeIcon icon={FiAnchor} className="text-2xl text-radiation-gold" />
              <h3 className="text-xl font-heading text-atomic-white">
                In Memory
              </h3>
            </div>
            <p className="text-control-gray leading-relaxed">
              LCDR Nathaniel D. Cross<br />
              U.S. Navy Nuclear Engineering Officer<br />
              1979 - 2023<br />
              <span className="text-radiation-gold italic">
                "Reactor Qualified, Fleet Tested, Forever Remembered"
              </span>
            </p>
          </motion.div>

          {/* Nuclear legacy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center gap-3 mb-4 justify-center">
              <SafeIcon icon={FiZap} className="text-2xl text-radiation-gold animate-pulse-glow" />
              <h3 className="text-xl font-heading text-atomic-white">
                Nuclear Legacy
              </h3>
            </div>
            <div className="space-y-2 text-control-gray">
              <div className="flex justify-between">
                <span>Years of Service:</span>
                <span className="text-radiation-gold font-mono">22</span>
              </div>
              <div className="flex justify-between">
                <span>Reactor Startups:</span>
                <span className="text-radiation-gold font-mono">47</span>
              </div>
              <div className="flex justify-between">
                <span>Officers Trained:</span>
                <span className="text-radiation-gold font-mono">156</span>
              </div>
              <div className="flex justify-between">
                <span>Safety Record:</span>
                <span className="text-radiation-gold font-mono">100%</span>
              </div>
            </div>
          </motion.div>

          {/* Contact and admin */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-right"
          >
            <div className="flex items-center gap-3 mb-4 justify-center md:justify-end">
              <SafeIcon icon={FiHeart} className="text-2xl text-radiation-gold" />
              <h3 className="text-xl font-heading text-atomic-white">
                Tribute Site
              </h3>
            </div>
            <div className="space-y-2 text-control-gray">
              <div>
                <a href="/admin" className="text-radiation-gold hover:text-radiation-gold/80 transition-colors">
                  Admin Access
                </a>
              </div>
              <div>
                <a href="#guestbook" className="text-control-gray hover:text-atomic-white transition-colors">
                  Leave a Message
                </a>
              </div>
              <div>
                <a href="#gallery" className="text-control-gray hover:text-atomic-white transition-colors">
                  Photo Gallery
                </a>
              </div>
              <div>
                <a href="#timeline" className="text-control-gray hover:text-atomic-white transition-colors">
                  Career Timeline
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-control-gray/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-control-gray text-sm">
              © 2024 U.S. Navy Nuclear Engineering Officer Tribute
            </div>
            
            <div className="flex items-center gap-4 text-control-gray text-sm">
              <span>Designed with</span>
              <SafeIcon icon={FiHeart} className="text-radiation-gold" />
              <span>by</span>
              <a href="#" className="text-radiation-gold hover:text-radiation-gold/80 transition-colors">
                Mrake Agency
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Atomic watermark */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="atomic-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5cb5c" />
              <stop offset="100%" stopColor="#f5cb5c" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Atomic symbol */}
          <circle cx="200" cy="200" r="150" fill="url(#atomic-gradient)" />
          
          {/* Electron orbits */}
          <motion.ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="40"
            fill="none"
            stroke="#f5cb5c"
            strokeWidth="2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="40"
            fill="none"
            stroke="#f5cb5c"
            strokeWidth="2"
            transform="rotate(60 200 200)"
            animate={{ rotate: 420 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.ellipse
            cx="200"
            cy="200"
            rx="120"
            ry="40"
            fill="none"
            stroke="#f5cb5c"
            strokeWidth="2"
            transform="rotate(120 200 200)"
            animate={{ rotate: 480 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Nucleus */}
          <circle cx="200" cy="200" r="15" fill="#f5cb5c" />
          
          {/* Electrons */}
          <motion.circle
            cx="320"
            cy="200"
            r="5"
            fill="#f5cb5c"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 200px" }}
          />
          <motion.circle
            cx="320"
            cy="200"
            r="5"
            fill="#f5cb5c"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 200px", transform: "rotate(60deg)" }}
          />
          <motion.circle
            cx="320"
            cy="200"
            r="5"
            fill="#f5cb5c"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "200px 200px", transform: "rotate(120deg)" }}
          />
        </svg>
      </div>

      {/* Blueprint lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg viewBox="0 0 1000 400" className="w-full h-full opacity-10">
          <defs>
            <pattern id="blueprint-lines" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 50 0 M 0 0 L 0 50" stroke="#f5cb5c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint-lines)" />
          
          {/* Schematic lines */}
          <motion.line
            x1="0"
            y1="100"
            x2="1000"
            y2="100"
            stroke="#f5cb5c"
            strokeWidth="1"
            strokeDasharray="10,5"
            animate={{ strokeDashoffset: [0, -15] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="0"
            y1="300"
            x2="1000"
            y2="300"
            stroke="#f5cb5c"
            strokeWidth="1"
            strokeDasharray="10,5"
            animate={{ strokeDashoffset: [0, 15] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;