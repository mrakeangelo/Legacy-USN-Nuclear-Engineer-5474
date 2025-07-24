import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiZap, FiDroplet, FiThermometer, FiActivity, FiInfo } = FiIcons;

const ReactorSystemMap = () => {
  const [activeSystem, setActiveSystem] = useState(null);

  const systems = [
    {
      id: 'reactor-core',
      name: 'Reactor Core',
      x: 50,
      y: 45,
      icon: FiZap,
      color: 'text-radiation-gold',
      description: 'He supervised critical reactor core operations and fuel handling procedures.',
      details: 'Primary location for nuclear fission reactions. Monitored neutron flux, control rod positioning, and core temperature distribution.',
      experiences: [
        'Led reactor startup procedures',
        'Supervised fuel element inspections',
        'Managed criticality safety protocols'
      ]
    },
    {
      id: 'primary-loop',
      name: 'Primary Coolant Loop',
      x: 30,
      y: 35,
      icon: FiDroplet,
      color: 'text-blue-400',
      description: 'He trained operators on primary coolant system operations and chemistry control.',
      details: 'Pressurized water system that removes heat from the reactor core. Critical for reactor safety and power generation.',
      experiences: [
        'Conducted coolant chemistry training',
        'Supervised primary system maintenance',
        'Led leak detection procedures'
      ]
    },
    {
      id: 'steam-generator',
      name: 'Steam Generator',
      x: 70,
      y: 35,
      icon: FiThermometer,
      color: 'text-green-400',
      description: 'He oversaw steam generator operations and secondary plant systems.',
      details: 'Heat exchanger converting primary loop heat to steam for propulsion turbines.',
      experiences: [
        'Managed steam plant operations',
        'Supervised secondary chemistry',
        'Led turbine startup procedures'
      ]
    },
    {
      id: 'control-systems',
      name: 'Control Systems',
      x: 50,
      y: 25,
      icon: FiActivity,
      color: 'text-purple-400',
      description: 'He developed training programs for reactor control and instrumentation systems.',
      details: 'Instrumentation and control systems for reactor monitoring and automatic safety functions.',
      experiences: [
        'Trained control room operators',
        'Supervised instrument calibration',
        'Led emergency response drills'
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
            Reactor System Map
          </h2>
          <p className="text-xl text-control-gray max-w-2xl mx-auto">
            Interactive map of nuclear propulsion systems under his expertise
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Reactor diagram background */}
            <div className="relative bg-navy-deep/50 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-8 mb-8">
              <svg viewBox="0 0 100 60" className="w-full h-64 md:h-96">
                {/* Reactor vessel */}
                <rect x="40" y="30" width="20" height="25" fill="none" stroke="#f5cb5c" strokeWidth="0.5" rx="2" />
                
                {/* Primary loop */}
                <path d="M 25 40 Q 20 35 25 30 L 40 30 M 60 30 L 75 30 Q 80 35 75 40 L 60 55 M 40 55 L 25 55 Q 20 50 25 45" 
                      fill="none" stroke="#60a5fa" strokeWidth="1" />
                
                {/* Steam generator */}
                <rect x="65" y="25" width="15" height="15" fill="none" stroke="#34d399" strokeWidth="0.5" rx="2" />
                
                {/* Control systems */}
                <rect x="45" y="15" width="10" height="8" fill="none" stroke="#a855f7" strokeWidth="0.5" rx="1" />
                
                {/* Coolant flow indicators */}
                <motion.circle
                  cx="30"
                  cy="32"
                  r="1"
                  fill="#60a5fa"
                  animate={{ cx: [30, 35, 40, 35, 30] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.circle
                  cx="70"
                  cy="32"
                  r="1"
                  fill="#60a5fa"
                  animate={{ cx: [70, 65, 60, 65, 70] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Interactive hotspots */}
                {systems.map((system) => (
                  <motion.circle
                    key={system.id}
                    cx={system.x}
                    cy={system.y}
                    r="3"
                    fill={activeSystem === system.id ? "#f5cb5c" : "rgba(245, 203, 92, 0.5)"}
                    stroke="#f5cb5c"
                    strokeWidth="1"
                    className="cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    onClick={() => setActiveSystem(activeSystem === system.id ? null : system.id)}
                    animate={{
                      scale: activeSystem === system.id ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      scale: {
                        duration: 1,
                        repeat: activeSystem === system.id ? Infinity : 0,
                        repeatType: "reverse"
                      }
                    }}
                  />
                ))}
              </svg>
              
              {/* Legend */}
              <div className="absolute top-4 right-4 bg-navy-deep/80 backdrop-blur-sm rounded-lg border border-control-gray/20 p-4">
                <h4 className="text-sm font-heading text-atomic-white mb-2">System Legend</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-radiation-gold rounded"></div>
                    <span className="text-control-gray">Reactor Core</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-1 bg-blue-400"></div>
                    <span className="text-control-gray">Primary Loop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-green-400 rounded"></div>
                    <span className="text-control-gray">Steam Generator</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 border border-purple-400 rounded"></div>
                    <span className="text-control-gray">Control Systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* System details panel */}
            <AnimatePresence>
              {activeSystem && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-reactor-blue/20 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-6"
                >
                  {(() => {
                    const system = systems.find(s => s.id === activeSystem);
                    return (
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-full bg-control-gray/20 flex items-center justify-center ${system.color}`}>
                            <SafeIcon icon={system.icon} className="text-xl" />
                          </div>
                          <div>
                            <h3 className="text-xl font-heading text-atomic-white">
                              {system.name}
                            </h3>
                            <p className="text-control-gray text-sm">
                              {system.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-lg font-heading text-radiation-gold mb-2">
                              Technical Details
                            </h4>
                            <p className="text-control-gray text-sm leading-relaxed">
                              {system.details}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-heading text-radiation-gold mb-2">
                              His Experience
                            </h4>
                            <ul className="space-y-1">
                              {system.experiences.map((exp, index) => (
                                <li key={index} className="text-control-gray text-sm flex items-start gap-2">
                                  <span className="text-radiation-gold mt-1">•</span>
                                  {exp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Instructions */}
            {!activeSystem && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center mt-8"
              >
                <div className="inline-flex items-center gap-2 bg-control-gray/10 backdrop-blur-sm rounded-full px-4 py-2 border border-control-gray/20">
                  <SafeIcon icon={FiInfo} className="text-radiation-gold" />
                  <span className="text-control-gray text-sm">
                    Click on the glowing points to explore reactor systems
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Background technical overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <defs>
            <pattern id="reactor-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#f5cb5c" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#f5cb5c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reactor-grid)" />
        </svg>
      </div>
    </section>
  );
};

export default ReactorSystemMap;