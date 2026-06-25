import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import WoodBorerHero from './WoodBorerHero.jsx';
import WoodBorerSigns from './WoodBorerSigns.jsx';
import WoodBorerProcess from './WoodBorerProcess.jsx';
import WoodBorerWhyChoose from './WoodBorerWhyChoose.jsx';
import WoodBorerCTA from './WoodBorerCTA.jsx';
import WoodBorerFAQ from './WoodBorerFAQ.jsx';
import Footer from './Footer.jsx';

const WoodBorerPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wb-page-wrapper">
      <Navbar />
      <WoodBorerHero />
      <WoodBorerSigns />
      <WoodBorerProcess />
      <WoodBorerWhyChoose />
      <WoodBorerCTA />
      <WoodBorerFAQ />
      <Footer />
    </div>
  );
};

export default WoodBorerPage;
