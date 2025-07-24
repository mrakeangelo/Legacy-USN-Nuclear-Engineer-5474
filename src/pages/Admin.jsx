import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiSettings, FiEdit3, FiImage, FiMessageSquare, FiShield } = FiIcons;

const Admin = () => {
  const [activeTab, setActiveTab] = useState('timeline');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple authentication - in production, use proper auth
    if (credentials.username === 'admin' && credentials.password === 'nuclear123') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-navy-deep flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-reactor-blue/20 backdrop-blur-sm p-8 rounded-lg border border-radiation-gold/30 w-full max-w-md"
        >
          <div className="text-center mb-6">
            <SafeIcon icon={FiShield} className="text-4xl text-radiation-gold mx-auto mb-4" />
            <h2 className="text-2xl font-heading text-atomic-white">Admin Access</h2>
            <p className="text-control-gray">Authorized Personnel Only</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-atomic-white mb-2">Username</label>
              <input
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                className="w-full px-3 py-2 bg-navy-deep border border-control-gray/30 rounded-md text-atomic-white focus:outline-none focus:ring-2 focus:ring-radiation-gold"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-atomic-white mb-2">Password</label>
              <input
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                className="w-full px-3 py-2 bg-navy-deep border border-control-gray/30 rounded-md text-atomic-white focus:outline-none focus:ring-2 focus:ring-radiation-gold"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-radiation-gold text-navy-deep py-2 px-4 rounded-md font-medium hover:bg-radiation-gold/90 transition-colors"
            >
              Access Control Panel
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  const tabs = [
    { id: 'timeline', label: 'Timeline', icon: FiEdit3 },
    { id: 'gallery', label: 'Gallery', icon: FiImage },
    { id: 'messages', label: 'Messages', icon: FiMessageSquare },
    { id: 'settings', label: 'Settings', icon: FiSettings },
  ];

  return (
    <div className="min-h-screen bg-navy-deep text-atomic-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-heading text-radiation-gold mb-2">Admin Control Panel</h1>
          <p className="text-control-gray">Manage tribute content and settings</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-radiation-gold text-navy-deep'
                  : 'bg-reactor-blue/20 text-atomic-white hover:bg-reactor-blue/30'
              }`}
            >
              <SafeIcon icon={tab.icon} className="text-sm" />
              {tab.label}
            </button>
          ))}
        </div>

        <div className="bg-reactor-blue/20 backdrop-blur-sm rounded-lg border border-radiation-gold/30 p-6">
          {activeTab === 'timeline' && (
            <div>
              <h2 className="text-xl font-heading mb-4">Career Timeline Management</h2>
              <p className="text-control-gray mb-4">Add, edit, or remove career milestones</p>
              <div className="space-y-4">
                <div className="bg-navy-deep/50 p-4 rounded-md">
                  <h3 className="font-medium mb-2">Add New Milestone</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Title"
                      className="px-3 py-2 bg-navy-deep border border-control-gray/30 rounded-md text-atomic-white focus:outline-none focus:ring-2 focus:ring-radiation-gold"
                    />
                    <input
                      type="date"
                      className="px-3 py-2 bg-navy-deep border border-control-gray/30 rounded-md text-atomic-white focus:outline-none focus:ring-2 focus:ring-radiation-gold"
                    />
                  </div>
                  <textarea
                    placeholder="Description"
                    rows="3"
                    className="w-full mt-4 px-3 py-2 bg-navy-deep border border-control-gray/30 rounded-md text-atomic-white focus:outline-none focus:ring-2 focus:ring-radiation-gold"
                  />
                  <button className="mt-4 bg-radiation-gold text-navy-deep px-4 py-2 rounded-md font-medium hover:bg-radiation-gold/90 transition-colors">
                    Add Milestone
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div>
              <h2 className="text-xl font-heading mb-4">Photo Gallery Management</h2>
              <p className="text-control-gray mb-4">Upload and organize photos</p>
              <div className="border-2 border-dashed border-control-gray/30 rounded-lg p-8 text-center">
                <SafeIcon icon={FiImage} className="text-4xl text-control-gray mx-auto mb-4" />
                <p className="text-control-gray mb-4">Drop photos here or click to upload</p>
                <button className="bg-radiation-gold text-navy-deep px-4 py-2 rounded-md font-medium hover:bg-radiation-gold/90 transition-colors">
                  Select Photos
                </button>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div>
              <h2 className="text-xl font-heading mb-4">Message Moderation</h2>
              <p className="text-control-gray mb-4">Review and approve guestbook messages</p>
              <div className="space-y-4">
                <div className="bg-navy-deep/50 p-4 rounded-md border-l-4 border-radiation-gold">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-medium">John Smith</h3>
                    <span className="text-sm text-control-gray">2 hours ago</span>
                  </div>
                  <p className="text-control-gray mb-4">
                    "LCDR Cross was an exceptional leader who taught me the importance of precision and safety in nuclear operations..."
                  </p>
                  <div className="flex gap-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors">
                      Approve
                    </button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition-colors">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-xl font-heading mb-4">Site Settings</h2>
              <p className="text-control-gray mb-4">Configure site features and preferences</p>
              <div className="space-y-6">
                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Enable guestbook</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span>Show reactor system map</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span>Enable time capsule letters</span>
                  </label>
                </div>
                <button className="bg-radiation-gold text-navy-deep px-4 py-2 rounded-md font-medium hover:bg-radiation-gold/90 transition-colors">
                  Save Settings
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;