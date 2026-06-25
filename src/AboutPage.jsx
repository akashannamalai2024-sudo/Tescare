import React from 'react';
import Navbar from './Navbar.jsx';
import AboutHero from './AboutHero.jsx';
import OurStory from './OurStory.jsx';
import MissionVision from './MissionVision.jsx';
import StatsSection from './StatsSection.jsx';
import InstantBooking from './InstantBooking.jsx';
import Footer from './Footer.jsx';

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <Navbar />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <StatsSection />
      <InstantBooking />
      <Footer />
    </div>
  );
};

export default AboutPage;
