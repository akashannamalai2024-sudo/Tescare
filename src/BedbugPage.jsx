import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import BedbugHero from './BedbugHero.jsx';
import BedbugSigns from './BedbugSigns.jsx';
import BedbugProcess from './BedbugProcess.jsx';
import BedbugWhyChoose from './BedbugWhyChoose.jsx';
import BedbugCTA from './BedbugCTA.jsx';
import BedbugFAQ from './BedbugFAQ.jsx';
import Footer from './Footer.jsx';

const BedbugPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bedbug-page-wrapper">
      <Navbar />
      <BedbugHero />
      <BedbugSigns />
      <BedbugProcess />
      <BedbugWhyChoose />
      <BedbugCTA />
      <BedbugFAQ />
      <Footer />
    </div>
  );
};

export default BedbugPage;
