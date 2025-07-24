import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCircle, FiZap, FiAnchor, FiTool, FiAward, FiUsers } = FiIcons;

const CareerTimeline = () => {
  const milestones = [
    {
      year: '2001',
      title: 'Commissioned via USNA',
      description: 'Graduated from United States Naval Academy with BS in Nuclear Engineering',
      icon: FiAward,
      category: 'Education'
    },
    {
      year: '2002',
      title: 'Naval Nuclear Power School',
      description: 'Completed intensive 6-month nuclear theory and reactor physics training',
      icon: FiZap,
      category: 'Training'
    },
    {
      year: '2003',
      title: 'Nuclear Prototype Training',
      description: 'Hands-on reactor operations training at land-based prototype facility',
      icon: FiTool,
      category: 'Training'
    },
    {
      year: '2004',
      title: 'USS Enterprise (CVN-65)',
      description: 'Division Officer, Reactor Controls Division - supervised reactor operations',
      icon: FiAnchor,
      category: 'Sea Duty'
    },
    {
      year: '2007',
      title: 'Engineering Officer',
      description: 'USS George Washington (CVN-73) - responsible for entire nuclear propulsion plant',
      icon: FiUsers,
      category: 'Leadership'
    },
    {
      year: '2010',
      title: 'Naval Reactors Program',
      description: 'Program Officer at Naval Reactors Headquarters - reactor design and safety',
      icon: FiZap,
      category: 'Shore Duty'
    },
    {
      year: '2013',
      title: 'Executive Officer',
      description: 'USS Nimitz (CVN-68) - second in command of nuclear-powered aircraft carrier',
      icon: FiAward,
      category: 'Command'
    },
    {
      year: '2016',
      title: 'Commanding Officer',
      description: 'USS Connecticut (SSN-22) - command of nuclear attack submarine',
      icon: FiAnchor,
      category: 'Command'
    }
  ];

  const categoryColors = {
    'Education': 'border-blue-400 bg-blue-400/20',
    'Training': 'border-radiation-gold bg-radiation-gold/20',
    'Sea Duty': 'border-green-400 bg-green-400/20',
    'Leadership': 'border-purple-400 bg-purple-400/20',
    'Shore Duty': 'border-cyan-400 bg-cyan-400/20',
    'Command': 'border-red-400 bg-red-400/20'
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
            Career Timeline
          </h2>
          <p className="text-xl text-control-gray max-w-2xl mx-auto">
            Reactor Qualified • Nuclear Trained • Fleet Tested
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-radiation-gold via-reactor-blue to-radiation-gold opacity-50"></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${categoryColors[milestone.category]}`}>
                  {milestone.category}
                </div>
                <h3 className="text-xl font-heading text-atomic-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-control-gray text-sm mb-2">
                  {milestone.description}
                </p>
                <div className="text-radiation-gold font-mono text-lg font-bold">
                  {milestone.year}
                </div>
              </div>

              {/* Center icon */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-navy-deep border-4 border-radiation-gold rounded-full flex items-center justify-center z-10">
                <SafeIcon icon={milestone.icon} className="text-radiation-gold text-xl" />
              </div>

              {/* Spacer */}
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* Schematic overlay */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="none" stroke="#f5cb5c" strokeWidth="2" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="#f5cb5c" strokeWidth="1" />
            <circle cx="100" cy="100" r="20" fill="#f5cb5c" />
            <line x1="100" y1="20" x2="100" y2="0" stroke="#f5cb5c" strokeWidth="2" />
            <line x1="100" y1="180" x2="100" y2="200" stroke="#f5cb5c" strokeWidth="2" />
            <line x1="20" y1="100" x2="0" y2="100" stroke="#f5cb5c" strokeWidth="2" />
            <line x1="180" y1="100" x2="200" y2="100" stroke="#f5cb5c" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default CareerTimeline;