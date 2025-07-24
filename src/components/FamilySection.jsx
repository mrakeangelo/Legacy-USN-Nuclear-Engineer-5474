import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiHome, FiClock, FiStar } = FiIcons;

const FamilySection = () => {
  const reflections = [
    {
      title: "The Long Hours",
      icon: FiClock,
      content: "Nuclear operations don't follow a 9-to-5 schedule. Reactor startups, emergency drills, and inspection preparations meant countless hours away from family dinners and bedtime stories. But Sarah understood that the reactor's heartbeat was the Navy's lifeline.",
      author: "Personal reflection"
    },
    {
      title: "High-Stakes Evaluations",
      icon: FiStar,
      content: "ORSE inspections and Naval Reactors evaluations brought pressure that extended beyond the plant. The weeks of preparation, the sleepless nights reviewing procedures, and the weight of knowing that careers and safety records hung in the balance—these moments tested not just technical knowledge, but family resilience.",
      author: "From evaluation periods"
    },
    {
      title: "Balancing Mind and Heart",
      icon: FiHeart,
      content: "The nuclear navy demands intellectual perfection, but family requires emotional presence. Learning to transition from the controlled environment of the reactor compartment to the beautiful chaos of family life was perhaps the most challenging evolution of all.",
      author: "Personal journey"
    }
  ];

  const familyLetters = [
    {
      from: "Sarah Cross (Spouse)",
      content: "I married a brilliant engineer, but I got so much more. I got someone who brought the same dedication to our family that he brought to reactor safety. Yes, the hours were long, and the pressure was immense, but watching him mentor young sailors with the same patience he showed our children—that's when I knew the Navy got the best of him, and so did we."
    },
    {
      from: "Emma Cross (Daughter)",
      content: "Dad always said that in the reactor compartment, there's no room for error. But at home, he taught me that mistakes are how we learn. He'd help with my science projects with the same precision he used for reactor calculations, but he never made me feel like I had to be perfect. Just my best."
    },
    {
      from: "Michael Cross (Son)",
      content: "I remember Dad explaining nuclear physics to me when I was eight, using LEGOs to show how atoms split. He had this way of making the most complex things simple, whether it was reactor theory or why it was important to keep promises. He taught me that real strength isn't about being the smartest person in the room—it's about lifting others up."
    }
  ];

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
            Family & Sacrifice
          </h2>
          <p className="text-xl text-control-gray max-w-2xl mx-auto">
            The human cost of nuclear excellence and the strength found in family bonds
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Personal reflections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {reflections.map((reflection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-navy-deep/50 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-6 hover:border-radiation-gold/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-radiation-gold/20 rounded-full flex items-center justify-center">
                    <SafeIcon icon={reflection.icon} className="text-radiation-gold text-xl" />
                  </div>
                  <h3 className="text-xl font-heading text-atomic-white">
                    {reflection.title}
                  </h3>
                </div>
                
                <p className="text-control-gray leading-relaxed mb-4">
                  {reflection.content}
                </p>
                
                <div className="text-xs text-radiation-gold font-mono">
                  {reflection.author}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Family letters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-control-gray/5 backdrop-blur-sm rounded-lg border border-control-gray/20 p-8"
          >
            <div className="text-center mb-8">
              <SafeIcon icon={FiHome} className="text-4xl text-radiation-gold mx-auto mb-4" />
              <h3 className="text-2xl font-heading text-atomic-white mb-2">
                Letters from Home
              </h3>
              <p className="text-control-gray">
                Reflections from the family who shared the journey
              </p>
            </div>

            <div className="space-y-8">
              {familyLetters.map((letter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-2xl ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="bg-navy-deep/50 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-6 relative">
                      {/* Letter content */}
                      <blockquote className="text-control-gray italic leading-relaxed mb-4">
                        "{letter.content}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="text-right">
                        <div className="text-atomic-white font-heading">
                          {letter.from}
                        </div>
                      </div>
                      
                      {/* Letter styling */}
                      <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-6 h-6 bg-radiation-gold/20 rounded-full flex items-center justify-center`}>
                        <SafeIcon icon={FiHeart} className="text-radiation-gold text-sm" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Family values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-radiation-gold/10 to-reactor-blue/10 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-8">
              <h3 className="text-2xl font-heading text-atomic-white mb-4">
                The Nuclear Family Creed
              </h3>
              <blockquote className="text-lg text-control-gray italic leading-relaxed max-w-3xl mx-auto">
                "In the nuclear navy, we learn that safety is paramount, precision is essential, and excellence is the standard. But at home, we learn that love is unconditional, patience is a virtue, and family is the mission that matters most. The reactor may power the ship, but family powers the soul."
              </blockquote>
              <div className="mt-4 text-radiation-gold font-heading">
                — Family motto
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background family elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="none" stroke="#f5cb5c" strokeWidth="2" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="#f5cb5c" strokeWidth="1" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="#f5cb5c" strokeWidth="1" />
          <circle cx="100" cy="100" r="20" fill="none" stroke="#f5cb5c" strokeWidth="1" />
          <path d="M 100 80 L 120 120 L 80 120 Z" fill="#f5cb5c" />
        </svg>
      </div>
    </section>
  );
};

export default FamilySection;