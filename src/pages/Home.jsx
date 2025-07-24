import React from 'react';
import HeroSection from '../components/HeroSection';
import CareerTimeline from '../components/CareerTimeline';
import WhyNuclear from '../components/WhyNuclear';
import PhotoGallery from '../components/PhotoGallery';
import Certifications from '../components/Certifications';
import LeadershipQuotes from '../components/LeadershipQuotes';
import ReactorSystemMap from '../components/ReactorSystemMap';
import FamilySection from '../components/FamilySection';
import TimeCapsule from '../components/TimeCapsule';
import GuestbookWall from '../components/GuestbookWall';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-navy-deep text-atomic-white">
      <HeroSection />
      <CareerTimeline />
      <WhyNuclear />
      <PhotoGallery />
      <Certifications />
      <LeadershipQuotes />
      <ReactorSystemMap />
      <FamilySection />
      <TimeCapsule />
      <GuestbookWall />
      <Footer />
    </div>
  );
};

export default Home;