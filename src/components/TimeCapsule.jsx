import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiLock, FiUnlock, FiCalendar, FiMail, FiClock } = FiIcons;

const TimeCapsule = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);

  const letters = [
    {
      id: 1,
      title: "To Future Nuclear Officers",
      recipient: "The Next Generation",
      unlockDate: "2025-01-01",
      isUnlocked: true,
      preview: "The path you've chosen isn't just a career—it's a calling that will define your character...",
      content: `Dear Future Nuclear Officer,

The path you've chosen isn't just a career—it's a calling that will define your character, test your limits, and ultimately reveal who you truly are. As you stand on the threshold of Nuclear Power School, I want you to know what lies ahead.

The technical knowledge you'll acquire is vast and unforgiving. Reactor physics, thermodynamics, electrical systems, chemistry—each subject builds upon the last, creating a foundation that must be absolutely solid. There are no shortcuts, no "good enough" answers. The reactor doesn't care about your previous achievements or your confidence. It only responds to competence.

But beyond the technical mastery, you'll discover something profound: the weight of responsibility. Every decision you make, every procedure you follow, every watch you stand affects not just you, but hundreds of sailors who trust you with their lives. This responsibility isn't a burden—it's a privilege. It's what separates the nuclear navy from every other technical field.

You'll face moments of doubt. The material is challenging, the standards are impossibly high, and the pressure is relentless. In those moments, remember that thousands before you have walked this path. We've all questioned our abilities, wondered if we were smart enough, strong enough, dedicated enough. The answer is yes—if you're willing to work for it.

The nuclear navy will teach you that excellence isn't about being perfect—it's about being prepared. It's about knowing your systems so well that you can operate them in the dark. It's about training so thoroughly that emergency procedures become second nature. It's about building a team so cohesive that trust flows as naturally as coolant through the primary loop.

Take care of your sailors. They'll teach you more about leadership than any textbook ever could. Listen to their concerns, invest in their development, and never ask them to do something you wouldn't do yourself. The best nuclear officers I've known were those who understood that their job wasn't to be the smartest person in the room—it was to make everyone else better.

The hours will be long. The pressure will be intense. The margin for error will be zero. But you'll also experience something extraordinary: the quiet satisfaction of knowing that you're part of something larger than yourself. You're keeping the fleet moving, the mission alive, and the nation safe.

Twenty years from now, when you're writing your own letter to the next generation, you'll understand that the nuclear navy didn't just teach you about reactors—it taught you about yourself. It showed you that you're capable of more than you ever imagined.

Fair winds and following seas,
LCDR Nathaniel D. Cross`
    },
    {
      id: 2,
      title: "To My Children",
      recipient: "Emma & Michael",
      unlockDate: "2030-06-15",
      isUnlocked: false,
      preview: "When you read this, you'll be adults with your own challenges and dreams...",
      content: "This letter will be unlocked on June 15th, 2030."
    },
    {
      id: 3,
      title: "To My Younger Self",
      recipient: "ENS Cross, circa 2001",
      unlockDate: "2024-12-31",
      isUnlocked: true,
      preview: "You're about to embark on a journey that will challenge everything you think you know...",
      content: `Dear Nathaniel,

You're about to embark on a journey that will challenge everything you think you know about yourself, about leadership, and about what it means to serve. I'm writing this twenty years into the future, and I want to share some truths that might help you navigate the path ahead.

First, Nuclear Power School will be harder than you expect. Your Naval Academy education prepared you well, but this is different. The pace is relentless, the material is dense, and the standards are absolute. Don't let your pride get in the way of asking for help. The instructors aren't there to break you—they're there to forge you into something stronger.

When you get to your first ship, remember that the sailors you'll lead know more about the actual operation of the plant than you do. This isn't a weakness—it's an opportunity. Learn from them. Listen to their concerns. Respect their experience. The best leaders I've known were those who understood that rank doesn't equal knowledge.

You'll face your first real test during your first reactor startup. Your heart will race, your palms will sweat, and you'll question every decision. This is normal. The responsibility is enormous, but you're prepared for it. Trust your training, trust your procedures, and trust your team.

The nuclear navy will teach you that leadership isn't about having all the answers—it's about creating an environment where the right answers emerge. It's about building teams that function under pressure, fostering a culture where people feel safe to raise concerns, and maintaining standards that never compromise safety.

You'll make mistakes. Everyone does. The key is learning from them and ensuring they never happen again. The nuclear navy's approach to error is not punishment—it's prevention. Embrace this mindset. It will serve you well beyond your naval career.

There will be times when you question your choice to go nuclear. The hours are long, the pressure is intense, and the lifestyle is demanding. But you'll also experience moments of profound satisfaction: when a young sailor grasps a complex concept because of your teaching, when your team executes a flawless evolution, when you realize that you're part of something truly exceptional.

The nuclear navy will change you. It will make you more precise, more thoughtful, and more disciplined. It will teach you that excellence isn't a destination—it's a daily practice. These lessons will serve you throughout your life, whether you stay in the Navy for 20 years or transition to civilian life.

Take care of yourself. The nuclear navy is demanding, but it's not supposed to consume you. Make time for family, for hobbies, for the things that remind you who you are outside of your uniform. The best nuclear officers I've known were those who maintained their humanity while mastering their profession.

Finally, remember why you chose this path. It wasn't for the prestige or the challenge—it was for the opportunity to serve something greater than yourself. That sense of purpose will sustain you through the difficult times and amplify the good ones.

The journey ahead is extraordinary. Embrace it.

Your future self,
LCDR Cross`
    },
    {
      id: 4,
      title: "To My Mentees",
      recipient: "Officers I've Trained",
      unlockDate: "2035-05-20",
      isUnlocked: false,
      preview: "Leadership isn't about the rank on your collar—it's about the trust in your heart...",
      content: "This letter will be unlocked on May 20th, 2035."
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isDatePassed = (dateString) => {
    return new Date(dateString) <= new Date();
  };

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
            Time Capsule Letters
          </h2>
          <p className="text-xl text-control-gray max-w-2xl mx-auto">
            Messages sealed for future generations, unlocking wisdom across time
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Letters grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {letters.map((letter, index) => (
              <motion.div
                key={letter.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-navy-deep/50 backdrop-blur-sm rounded-lg border p-6 cursor-pointer transition-all duration-300 ${
                  letter.isUnlocked 
                    ? 'border-radiation-gold/30 hover:border-radiation-gold/50' 
                    : 'border-control-gray/20 hover:border-control-gray/30'
                }`}
                onClick={() => letter.isUnlocked && setSelectedLetter(letter)}
              >
                {/* Lock/Unlock indicator */}
                <div className="absolute top-4 right-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    letter.isUnlocked 
                      ? 'bg-radiation-gold/20 text-radiation-gold' 
                      : 'bg-control-gray/20 text-control-gray'
                  }`}>
                    <SafeIcon icon={letter.isUnlocked ? FiUnlock : FiLock} className="text-sm" />
                  </div>
                </div>

                {/* Letter content */}
                <div className="mb-4">
                  <h3 className="text-xl font-heading text-atomic-white mb-2">
                    {letter.title}
                  </h3>
                  <p className="text-control-gray text-sm mb-3">
                    To: {letter.recipient}
                  </p>
                  
                  {letter.isUnlocked ? (
                    <p className="text-control-gray text-sm leading-relaxed">
                      {letter.preview}
                    </p>
                  ) : (
                    <div className="text-control-gray/50 text-sm">
                      <SafeIcon icon={FiLock} className="inline mr-2" />
                      This letter is sealed until {formatDate(letter.unlockDate)}
                    </div>
                  )}
                </div>

                {/* Unlock date */}
                <div className="flex items-center gap-2 text-xs">
                  <SafeIcon icon={FiCalendar} className="text-control-gray" />
                  <span className={`font-mono ${
                    letter.isUnlocked ? 'text-radiation-gold' : 'text-control-gray'
                  }`}>
                    {letter.isUnlocked ? 'Unlocked' : `Unlocks ${formatDate(letter.unlockDate)}`}
                  </span>
                </div>

                {/* Sealed envelope effect */}
                {!letter.isUnlocked && (
                  <div className="absolute inset-0 bg-gradient-to-br from-control-gray/5 to-control-gray/10 rounded-lg pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-control-gray/20">
                      <SafeIcon icon={FiMail} className="text-6xl" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Letter reader modal */}
          <AnimatePresence>
            {selectedLetter && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedLetter(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="relative max-w-4xl w-full max-h-[90vh] bg-navy-deep rounded-lg overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="bg-radiation-gold/10 border-b border-radiation-gold/30 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-2xl font-heading text-atomic-white">
                          {selectedLetter.title}
                        </h3>
                        <p className="text-control-gray">
                          To: {selectedLetter.recipient}
                        </p>
                      </div>
                      <button
                        onClick={() => setSelectedLetter(null)}
                        className="text-control-gray hover:text-atomic-white transition-colors"
                      >
                        <SafeIcon icon={FiLock} className="text-2xl" />
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
                    <div className="prose prose-invert max-w-none">
                      {selectedLetter.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-control-gray leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Upcoming unlocks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-control-gray/5 backdrop-blur-sm rounded-lg border border-control-gray/20 p-6"
          >
            <div className="text-center mb-6">
              <SafeIcon icon={FiClock} className="text-3xl text-radiation-gold mx-auto mb-2" />
              <h3 className="text-xl font-heading text-atomic-white">
                Upcoming Letter Unlocks
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {letters.filter(letter => !letter.isUnlocked).map((letter, index) => (
                <div key={letter.id} className="flex items-center gap-3 p-3 bg-navy-deep/50 rounded-md">
                  <SafeIcon icon={FiLock} className="text-control-gray" />
                  <div>
                    <div className="text-atomic-white font-medium text-sm">
                      {letter.title}
                    </div>
                    <div className="text-control-gray text-xs">
                      Unlocks {formatDate(letter.unlockDate)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <defs>
            <pattern id="envelope-pattern" width="150" height="150" patternUnits="userSpaceOnUse">
              <path d="M 25 50 L 75 50 L 75 100 L 25 100 Z M 25 50 L 50 70 L 75 50" 
                    fill="none" stroke="#f5cb5c" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#envelope-pattern)" />
        </svg>
      </div>
    </section>
  );
};

export default TimeCapsule;