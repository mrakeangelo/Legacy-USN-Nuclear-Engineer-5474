import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiShield, FiStar, FiZap, FiAnchor } = FiIcons;

const Certifications = () => {
  const certifications = [
    {
      category: 'Nuclear Qualifications',
      items: [
        {
          name: 'Nuclear Propulsion Qualification (Surface)',
          description: 'Qualified to operate nuclear propulsion plants aboard surface vessels',
          icon: FiZap,
          date: '2004'
        },
        {
          name: 'Senior Reactor Operator License',
          description: 'Licensed to supervise reactor operations and authorize critical evolutions',
          icon: FiShield,
          date: '2005'
        },
        {
          name: 'Nuclear Engineering Officer Qualification',
          description: 'Qualified to serve as Engineering Officer on nuclear-powered vessels',
          icon: FiAward,
          date: '2007'
        }
      ]
    },
    {
      category: 'Warfare Qualifications',
      items: [
        {
          name: 'Surface Warfare Officer (SWO)',
          description: 'Qualified to serve as Officer of the Deck and conduct surface warfare operations',
          icon: FiAnchor,
          date: '2003'
        },
        {
          name: 'Engineering Duty Officer (EDO)',
          description: 'Specialized in engineering systems design, acquisition, and maintenance',
          icon: FiStar,
          date: '2010'
        }
      ]
    },
    {
      category: 'Medals & Commendations',
      items: [
        {
          name: 'Navy Commendation Medal (3x)',
          description: 'For exceptional performance in nuclear operations and leadership',
          icon: FiAward,
          date: '2006, 2009, 2014'
        },
        {
          name: 'Navy Achievement Medal (2x)',
          description: 'For outstanding technical achievement and sailor development',
          icon: FiStar,
          date: '2005, 2008'
        },
        {
          name: 'Meritorious Service Medal',
          description: 'For exceptional performance as Executive Officer',
          icon: FiShield,
          date: '2015'
        },
        {
          name: 'Naval Reactors Service Badge',
          description: 'For service with Naval Reactors Program Office',
          icon: FiZap,
          date: '2012'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-navy-deep to-reactor-blue relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-atomic-white mb-4">
            Certifications & Recognition
          </h2>
          <p className="text-xl text-control-gray max-w-2xl mx-auto">
            Devices, qualifications, and commendations earned through excellence in nuclear operations
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {certifications.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="mb-12"
            >
              <h3 className="text-2xl font-heading text-radiation-gold mb-8 text-center">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="group relative"
                  >
                    <div className="bg-control-gray/5 backdrop-blur-sm rounded-lg border border-radiation-gold/20 p-6 h-full hover:border-radiation-gold/50 transition-all duration-300">
                      {/* Icon and date */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 bg-radiation-gold/20 rounded-full flex items-center justify-center group-hover:bg-radiation-gold/30 transition-colors">
                          <SafeIcon icon={item.icon} className="text-radiation-gold text-xl" />
                        </div>
                        <span className="text-sm font-mono text-control-gray bg-navy-deep/50 px-2 py-1 rounded">
                          {item.date}
                        </span>
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-heading text-atomic-white mb-3 group-hover:text-radiation-gold transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-control-gray text-sm leading-relaxed">
                        {item.description}
                      </p>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-radiation-gold/5 to-reactor-blue/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rank progression timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-navy-deep/50 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-8"
        >
          <h3 className="text-2xl font-heading text-radiation-gold mb-8 text-center">
            Rank Progression
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { rank: 'ENS', year: '2001', title: 'Ensign' },
              { rank: 'LTJG', year: '2003', title: 'Lieutenant Junior Grade' },
              { rank: 'LT', year: '2005', title: 'Lieutenant' },
              { rank: 'LCDR', year: '2009', title: 'Lieutenant Commander' },
              { rank: 'CDR', year: '2015', title: 'Commander' }
            ].map((rank, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-radiation-gold/20 rounded-full flex items-center justify-center mb-2 group-hover:bg-radiation-gold/30 transition-colors">
                  <span className="text-radiation-gold font-heading font-bold">
                    {rank.rank}
                  </span>
                </div>
                <div className="text-xs text-control-gray">
                  {rank.year}
                </div>
                <div className="text-xs text-atomic-white opacity-0 group-hover:opacity-100 transition-opacity absolute mt-1 bg-navy-deep px-2 py-1 rounded text-nowrap">
                  {rank.title}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background technical elements */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <defs>
            <radialGradient id="medal-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f5cb5c" />
              <stop offset="100%" stopColor="#f5cb5c" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="200" cy="200" r="150" fill="url(#medal-gradient)" />
          <circle cx="200" cy="200" r="100" fill="none" stroke="#f5cb5c" strokeWidth="2" />
          <circle cx="200" cy="200" r="50" fill="none" stroke="#f5cb5c" strokeWidth="1" />
          <polygon points="200,150 210,180 240,180 218,198 228,228 200,210 172,228 182,198 160,180 190,180" fill="#f5cb5c" />
        </svg>
      </div>
    </section>
  );
};

export default Certifications;