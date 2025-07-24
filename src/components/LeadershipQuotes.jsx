import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiChevronLeft, FiChevronRight, FiUser, FiStar, FiShield } = FiIcons;

const LeadershipQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    {
      text: "LCDR Cross didn't just teach us reactor physics—he taught us how to think like nuclear engineers. His standards were uncompromising, but his mentorship was invaluable. Every procedure we learned, every safety protocol we mastered, came with the understanding that lives depended on our precision.",
      author: "ET1 Sarah Mitchell",
      role: "Reactor Controls Division",
      context: "USS Enterprise (2004-2006)",
      type: "subordinate"
    },
    {
      text: "As my Engineering Officer, Nathaniel demonstrated the perfect balance of technical expertise and leadership acumen. His ability to maintain reactor plant safety while developing junior officers was exceptional. He never asked his sailors to do anything he wouldn't do himself—including standing the toughest watches.",
      author: "CAPT Robert Hayes",
      role: "Commanding Officer",
      context: "USS George Washington (2007-2010)",
      type: "superior"
    },
    {
      text: "During our Naval Reactors inspection, LCDR Cross's plant stood as a model of operational excellence. His engineering logs were meticulous, his procedures were flawless, and his crew's knowledge was outstanding. It's rare to see such a perfect combination of technical competence and leadership.",
      author: "RADM Jennifer Thompson",
      role: "Naval Reactors Inspection Team",
      context: "ORSE Inspection (2008)",
      type: "peer"
    },
    {
      text: "Working with Nathaniel at Naval Reactors was a privilege. His insights into reactor design and safety protocols helped shape policy that affects the entire nuclear fleet. He had the rare ability to see both the big picture and the critical details that make nuclear propulsion safe and reliable.",
      author: "Dr. Michael Chen",
      role: "Senior Nuclear Engineer",
      context: "Naval Reactors Program Office (2010-2013)",
      type: "peer"
    },
    {
      text: "As a junior officer, I was intimidated by the complexity of nuclear operations. LCDR Cross took the time to explain not just the 'what' but the 'why' behind every procedure. His patience and expertise gave me the confidence to become the nuclear officer I am today.",
      author: "LT David Park",
      role: "Nuclear Division Officer",
      context: "USS Nimitz (2013-2015)",
      type: "subordinate"
    },
    {
      text: "Nathaniel's leadership during reactor startup evolutions was textbook perfect. Cool under pressure, decisive in critical moments, and always focused on the safety of the crew and the plant. His technical knowledge was matched only by his ability to inspire confidence in his team.",
      author: "MCPO James Rodriguez",
      role: "Engineering Department Master Chief",
      context: "USS Connecticut (2016-2018)",
      type: "peer"
    }
  ];

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'superior': return FiStar;
      case 'peer': return FiShield;
      case 'subordinate': return FiUser;
      default: return FiUser;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'superior': return 'text-radiation-gold';
      case 'peer': return 'text-blue-400';
      case 'subordinate': return 'text-green-400';
      default: return 'text-control-gray';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-reactor-blue to-navy-deep relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-atomic-white mb-4">
            Leadership Testimonials
          </h2>
          <p className="text-xl text-control-gray max-w-2xl mx-auto">
            Voices from the nuclear fleet - superiors, peers, and subordinates
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Quote display */}
          <div className="relative bg-navy-deep/50 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-8 mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quote text */}
                <blockquote className="text-lg md:text-xl text-control-gray leading-relaxed mb-6 italic">
                  "{quotes[currentQuote].text}"
                </blockquote>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-control-gray/20 ${getTypeColor(quotes[currentQuote].type)}`}>
                    <SafeIcon icon={getTypeIcon(quotes[currentQuote].type)} className="text-xl" />
                  </div>
                  <div>
                    <div className="text-atomic-white font-heading text-lg">
                      {quotes[currentQuote].author}
                    </div>
                    <div className="text-control-gray text-sm">
                      {quotes[currentQuote].role}
                    </div>
                    <div className="text-radiation-gold text-xs font-mono">
                      {quotes[currentQuote].context}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <button
                onClick={prevQuote}
                className="w-10 h-10 rounded-full bg-radiation-gold/20 text-radiation-gold hover:bg-radiation-gold/30 transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiChevronLeft} className="text-xl" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4">
              <button
                onClick={nextQuote}
                className="w-10 h-10 rounded-full bg-radiation-gold/20 text-radiation-gold hover:bg-radiation-gold/30 transition-colors flex items-center justify-center"
              >
                <SafeIcon icon={FiChevronRight} className="text-xl" />
              </button>
            </div>
          </div>

          {/* Quote indicators */}
          <div className="flex justify-center gap-2 mb-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentQuote
                    ? 'bg-radiation-gold scale-125'
                    : 'bg-control-gray/30 hover:bg-control-gray/50'
                }`}
              />
            ))}
          </div>

          {/* Quote categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { type: 'superior', label: 'Superior Officers', count: quotes.filter(q => q.type === 'superior').length },
              { type: 'peer', label: 'Peer Officers', count: quotes.filter(q => q.type === 'peer').length },
              { type: 'subordinate', label: 'Junior Officers & Sailors', count: quotes.filter(q => q.type === 'subordinate').length }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-control-gray/5 backdrop-blur-sm rounded-lg border border-control-gray/20"
              >
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center bg-control-gray/20 ${getTypeColor(category.type)}`}>
                  <SafeIcon icon={getTypeIcon(category.type)} className="text-xl" />
                </div>
                <h3 className="text-lg font-heading text-atomic-white mb-2">
                  {category.label}
                </h3>
                <p className="text-control-gray text-sm">
                  {category.count} testimonial{category.count !== 1 ? 's' : ''}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <defs>
            <pattern id="quote-pattern" width="200" height="200" patternUnits="userSpaceOnUse">
              <text x="100" y="100" textAnchor="middle" fontSize="120" fill="#f5cb5c" opacity="0.1">"</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#quote-pattern)" />
        </svg>
      </div>
    </section>
  );
};

export default LeadershipQuotes;