import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiImage, FiX, FiChevronLeft, FiChevronRight, FiMapPin, FiCalendar, FiUsers } = FiIcons;

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos', icon: FiImage },
    { id: 'reactor', label: 'Reactor Operations', icon: FiImage },
    { id: 'training', label: 'Training', icon: FiImage },
    { id: 'control', label: 'Control Room', icon: FiImage },
    { id: 'mentorship', label: 'Mentorship', icon: FiUsers },
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      title: 'Reactor Plant Inspection',
      location: 'USS Enterprise Engine Room',
      date: '2004-03-15',
      category: 'reactor',
      description: 'Conducting routine reactor plant inspection with engineering team'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=800&h=600&fit=crop',
      title: 'Control Room Operations',
      location: 'Nuclear Training Facility',
      date: '2003-08-22',
      category: 'control',
      description: 'Training junior officers on reactor control procedures'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop',
      title: 'Technical Training Session',
      location: 'Naval Nuclear Power School',
      date: '2002-11-10',
      category: 'training',
      description: 'Advanced reactor physics training session'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&h=600&fit=crop',
      title: 'Mentoring Junior Officers',
      location: 'USS George Washington',
      date: '2007-05-18',
      category: 'mentorship',
      description: 'Guidance session with nuclear engineering division'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&h=600&fit=crop',
      title: 'Reactor Startup Procedures',
      location: 'Nuclear Prototype Facility',
      date: '2003-01-12',
      category: 'reactor',
      description: 'Leading reactor startup evolution during training'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop',
      title: 'Engineering Department Meeting',
      location: 'USS Nimitz',
      date: '2013-09-03',
      category: 'mentorship',
      description: 'Monthly engineering department leadership meeting'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-reactor-blue to-navy-deep">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading text-atomic-white mb-4">
            Mission Gallery
          </h2>
          <p className="text-xl text-control-gray max-w-2xl mx-auto">
            Documenting excellence in nuclear operations and leadership
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-radiation-gold text-navy-deep'
                  : 'bg-control-gray/20 text-control-gray hover:bg-control-gray/30'
              }`}
            >
              <SafeIcon icon={category.icon} className="text-sm" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="relative overflow-hidden rounded-lg bg-control-gray/20 aspect-[4/3]">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-atomic-white font-heading text-lg mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-control-gray text-sm">
                        {photo.location}
                      </p>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 bg-radiation-gold/90 text-navy-deep px-2 py-1 rounded text-xs font-medium">
                    {categories.find(cat => cat.id === photo.category)?.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox modal */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full bg-navy-deep rounded-lg overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <SafeIcon icon={FiX} className="text-xl" />
                </button>

                {/* Image */}
                <div className="aspect-[4/3] bg-control-gray/20">
                  <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Metadata */}
                <div className="p-6 bg-navy-deep border-t border-control-gray/20">
                  <h3 className="text-2xl font-heading text-atomic-white mb-2">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-control-gray mb-4">
                    {selectedPhoto.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-control-gray">
                    <div className="flex items-center gap-2">
                      <SafeIcon icon={FiMapPin} />
                      {selectedPhoto.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <SafeIcon icon={FiCalendar} />
                      {new Date(selectedPhoto.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhotoGallery;