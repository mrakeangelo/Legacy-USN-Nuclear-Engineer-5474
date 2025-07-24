import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiEdit3, FiSend, FiUser, FiCalendar, FiHeart, FiStar } = FiIcons;

const GuestbookWall = () => {
  const [showForm, setShowForm] = useState(false);
  const [newMessage, setNewMessage] = useState({
    name: '',
    rank: '',
    message: '',
    relationship: 'colleague'
  });

  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "ET1 Michael Rodriguez",
      rank: "Petty Officer First Class",
      relationship: "former_subordinate",
      message: "LCDR Cross taught me that being a nuclear operator isn't just about following procedures—it's about understanding the why behind every action. His attention to detail and commitment to training saved my career and made me a better sailor.",
      date: "2024-01-15",
      approved: true
    },
    {
      id: 2,
      name: "CAPT Jennifer Walsh",
      rank: "Captain",
      relationship: "former_superior",
      message: "Nathaniel was the kind of Engineering Officer every CO hopes for. His technical expertise was matched only by his leadership ability. The reactor plant ran flawlessly under his watch, and his division was always the most prepared during inspections.",
      date: "2024-01-10",
      approved: true
    },
    {
      id: 3,
      name: "Dr. Sarah Chen",
      rank: "Civilian Engineer",
      relationship: "colleague",
      message: "Working with LCDR Cross at Naval Reactors was a privilege. His insights into reactor safety and his ability to translate complex technical concepts into actionable policy made him invaluable to our team.",
      date: "2024-01-08",
      approved: true
    },
    {
      id: 4,
      name: "LT David Kim",
      rank: "Lieutenant",
      relationship: "mentee",
      message: "He didn't just teach me to be a nuclear officer—he taught me to be a leader. His patience during my qualification process and his guidance through my first ORSE made all the difference in my career.",
      date: "2024-01-05",
      approved: true
    },
    {
      id: 5,
      name: "MMCS Robert Johnson",
      rank: "Master Chief Petty Officer",
      relationship: "colleague",
      message: "In 25 years in the nuclear navy, I've worked with many officers. LCDR Cross stood out because he genuinely cared about his sailors. He knew our names, our families, and our goals. That's the mark of a true leader.",
      date: "2024-01-03",
      approved: true
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = {
      id: messages.length + 1,
      ...newMessage,
      date: new Date().toISOString().split('T')[0],
      approved: false
    };
    setMessages([message, ...messages]);
    setNewMessage({ name: '', rank: '', message: '', relationship: 'colleague' });
    setShowForm(false);
  };

  const getRelationshipIcon = (relationship) => {
    switch (relationship) {
      case 'former_superior': return FiStar;
      case 'former_subordinate': return FiUser;
      case 'colleague': return FiHeart;
      case 'mentee': return FiUser;
      default: return FiUser;
    }
  };

  const getRelationshipColor = (relationship) => {
    switch (relationship) {
      case 'former_superior': return 'text-radiation-gold';
      case 'former_subordinate': return 'text-green-400';
      case 'colleague': return 'text-blue-400';
      case 'mentee': return 'text-purple-400';
      default: return 'text-control-gray';
    }
  };

  const getRelationshipLabel = (relationship) => {
    switch (relationship) {
      case 'former_superior': return 'Former Superior';
      case 'former_subordinate': return 'Former Subordinate';
      case 'colleague': return 'Colleague';
      case 'mentee': return 'Mentee';
      default: return 'Colleague';
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
            Engineering Log
          </h2>
          <p className="text-xl text-control-gray max-w-2xl mx-auto">
            Share your memories, tributes, and reflections
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Add message button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-3 bg-radiation-gold text-navy-deep px-6 py-3 rounded-lg font-heading font-medium hover:bg-radiation-gold/90 transition-colors"
            >
              <SafeIcon icon={FiEdit3} className="text-xl" />
              Add Your Message
            </button>
          </motion.div>

          {/* Message form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-12 overflow-hidden"
              >
                <div className="bg-navy-deep/50 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-6">
                  <h3 className="text-xl font-heading text-atomic-white mb-6">
                    Add Your Message to the Engineering Log
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-atomic-white mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          value={newMessage.name}
                          onChange={(e) => setNewMessage({...newMessage, name: e.target.value})}
                          className="w-full px-3 py-2 bg-navy-deep border border-control-gray/30 rounded-md text-atomic-white focus:outline-none focus:ring-2 focus:ring-radiation-gold"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-atomic-white mb-2">
                          Rank/Title
                        </label>
                        <input
                          type="text"
                          value={newMessage.rank}
                          onChange={(e) => setNewMessage({...newMessage, rank: e.target.value})}
                          className="w-full px-3 py-2 bg-navy-deep border border-control-gray/30 rounded-md text-atomic-white focus:outline-none focus:ring-2 focus:ring-radiation-gold"
                          placeholder="e.g., LT, ET1, Dr."
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-atomic-white mb-2">
                        Relationship
                      </label>
                      <select
                        value={newMessage.relationship}
                        onChange={(e) => setNewMessage({...newMessage, relationship: e.target.value})}
                        className="w-full px-3 py-2 bg-navy-deep border border-control-gray/30 rounded-md text-atomic-white focus:outline-none focus:ring-2 focus:ring-radiation-gold"
                      >
                        <option value="colleague">Colleague</option>
                        <option value="former_superior">Former Superior</option>
                        <option value="former_subordinate">Former Subordinate</option>
                        <option value="mentee">Mentee</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-atomic-white mb-2">
                        Message
                      </label>
                      <textarea
                        value={newMessage.message}
                        onChange={(e) => setNewMessage({...newMessage, message: e.target.value})}
                        rows="4"
                        className="w-full px-3 py-2 bg-navy-deep border border-control-gray/30 rounded-md text-atomic-white focus:outline-none focus:ring-2 focus:ring-radiation-gold"
                        placeholder="Share your memories, reflections, or tribute..."
                        required
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        className="flex items-center gap-2 bg-radiation-gold text-navy-deep px-4 py-2 rounded-md font-medium hover:bg-radiation-gold/90 transition-colors"
                      >
                        <SafeIcon icon={FiSend} />
                        Submit Message
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-4 py-2 bg-control-gray/20 text-control-gray rounded-md hover:bg-control-gray/30 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Messages */}
          <div className="space-y-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-navy-deep/50 backdrop-blur-sm rounded-lg border p-6 ${
                  message.approved 
                    ? 'border-radiation-gold/30' 
                    : 'border-yellow-500/50 bg-yellow-500/5'
                }`}
              >
                {!message.approved && (
                  <div className="mb-4 px-3 py-1 bg-yellow-500/20 text-yellow-500 text-sm rounded-full inline-block">
                    Pending Approval
                  </div>
                )}
                
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center bg-control-gray/20 ${getRelationshipColor(message.relationship)}`}>
                    <SafeIcon icon={getRelationshipIcon(message.relationship)} className="text-xl" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="text-lg font-heading text-atomic-white">
                        {message.name}
                      </h4>
                      {message.rank && (
                        <span className="text-control-gray text-sm">
                          {message.rank}
                        </span>
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full ${getRelationshipColor(message.relationship)} bg-current bg-opacity-20`}>
                        {getRelationshipLabel(message.relationship)}
                      </span>
                    </div>
                    
                    <p className="text-control-gray leading-relaxed mb-3">
                      {message.message}
                    </p>
                    
                    <div className="flex items-center gap-2 text-xs text-control-gray/70">
                      <SafeIcon icon={FiCalendar} />
                      <span>{new Date(message.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-control-gray/5 backdrop-blur-sm rounded-lg border border-control-gray/20 p-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-heading text-radiation-gold">
                  {messages.filter(m => m.approved).length}
                </div>
                <div className="text-sm text-control-gray">Messages</div>
              </div>
              <div>
                <div className="text-2xl font-heading text-radiation-gold">
                  {messages.filter(m => m.relationship === 'former_subordinate').length}
                </div>
                <div className="text-sm text-control-gray">From Sailors</div>
              </div>
              <div>
                <div className="text-2xl font-heading text-radiation-gold">
                  {messages.filter(m => m.relationship === 'former_superior').length}
                </div>
                <div className="text-sm text-control-gray">From Superiors</div>
              </div>
              <div>
                <div className="text-2xl font-heading text-radiation-gold">
                  {messages.filter(m => m.relationship === 'colleague').length}
                </div>
                <div className="text-sm text-control-gray">From Peers</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background technical elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <defs>
            <pattern id="log-pattern" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 10 20 L 90 20 M 10 40 L 90 40 M 10 60 L 90 60 M 10 80 L 90 80" 
                    stroke="#f5cb5c" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#log-pattern)" />
        </svg>
      </div>
    </section>
  );
};

export default GuestbookWall;