import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPlay, FiPause, FiVolume2, FiFileText } = FiIcons;

const WhyNuclear = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const essayContent = `
    The decision to pursue nuclear power wasn't made lightly. It was a calling that demanded everything—intellectual rigor, unwavering precision, and an acceptance that the margin for error was absolute zero.

    When I first walked into Nuclear Power School, I understood that I was entering a world where theoretical physics would meet operational reality in the most demanding environment imaginable. The reactor doesn't forgive mistakes. It doesn't accept "good enough." It demands perfection, every watch, every evolution, every decision.

    But it was more than the technical challenge that drew me. It was the responsibility—knowing that thousands of sailors depended on the safe operation of the reactor plant. That every meal cooked, every light illuminated, every catapult shot was powered by the controlled nuclear reaction under my watch.

    The nuclear navy teaches you that true leadership isn't about commanding respect—it's about earning it through competence, integrity, and an unwavering commitment to the safety of your crew. Every junior officer who stood watch under my guidance, every sailor who trusted my decisions during a reactor startup, every inspection that validated our procedures—these were the moments that defined not just my career, but my character.

    Nuclear power taught me that excellence isn't a destination—it's a discipline. It's the daily commitment to standards that never compromise, to training that never ends, and to a vigilance that never sleeps. In the reactor compartment, there are no shortcuts, no politics, no excuses. There is only the physics, the procedures, and the people who make it all work.

    This is why I chose nuclear. Not for the prestige or the challenge, but for the privilege of serving alongside the finest technical minds in the Navy, and the honor of keeping the fleet powered and the mission alive.
  `;

  return (
    <section className="py-20 bg-gradient-to-b from-navy-deep to-reactor-blue relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header styled like Naval Reactors report */}
          <div className="bg-control-gray/10 border-l-4 border-radiation-gold p-6 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <SafeIcon icon={FiFileText} className="text-2xl text-radiation-gold" />
              <div>
                <h2 className="text-2xl font-heading text-atomic-white">
                  Personal Statement: Why I Chose Nuclear
                </h2>
                <p className="text-control-gray text-sm">
                  Classification: UNCLASSIFIED • Distribution: Unlimited
                </p>
              </div>
            </div>
          </div>

          {/* Audio controls */}
          <div className="bg-navy-deep/50 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-heading text-atomic-white">Audio Narration</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 bg-radiation-gold text-navy-deep px-4 py-2 rounded-md font-medium hover:bg-radiation-gold/90 transition-colors"
                >
                  <SafeIcon icon={isPlaying ? FiPause : FiPlay} />
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <SafeIcon icon={FiVolume2} className="text-control-gray" />
              </div>
            </div>
            
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-reactor-blue/20 rounded-md p-4"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-radiation-gold rounded-full animate-pulse"></div>
                  <span className="text-sm text-control-gray">Now playing...</span>
                </div>
                <div className="w-full bg-control-gray/20 rounded-full h-2">
                  <motion.div
                    className="bg-radiation-gold h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 30, ease: 'linear' }}
                  />
                </div>
              </motion.div>
            )}
          </div>

          {/* Essay content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-atomic-white/5 backdrop-blur-sm rounded-lg border border-control-gray/20 p-8"
          >
            <div className="prose prose-invert max-w-none">
              {essayContent.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-control-gray leading-relaxed mb-6 first-letter:text-4xl first-letter:font-heading first-letter:text-radiation-gold first-letter:float-left first-letter:mr-2 first-letter:mt-1"
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-8 pt-6 border-t border-control-gray/20 text-right"
            >
              <div className="text-radiation-gold font-heading text-xl mb-2">
                Nathaniel D. Cross
              </div>
              <div className="text-control-gray text-sm">
                Lieutenant Commander, USN<br />
                Nuclear Engineering Officer
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background technical elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <defs>
            <pattern id="reactor-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="#f5cb5c" strokeWidth="1" />
              <circle cx="50" cy="50" r="15" fill="none" stroke="#f5cb5c" strokeWidth="1" />
              <circle cx="50" cy="50" r="5" fill="#f5cb5c" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#reactor-pattern)" />
        </svg>
      </div>
    </section>
  );
};

export default WhyNuclear;