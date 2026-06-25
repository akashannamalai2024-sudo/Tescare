import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import MosquitoHero from './MosquitoHero.jsx';
import MosquitoRisks from './MosquitoRisks.jsx';
import MosquitoProcess from './MosquitoProcess.jsx';
import MosquitoWhyChoose from './MosquitoWhyChoose.jsx';
import PestCTA from './PestCTA.jsx';
import MosquitoFAQ from './MosquitoFAQ.jsx';
import Footer from './Footer.jsx';

const MosquitoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mosq-page-wrapper">
      <Navbar />
      <MosquitoHero />
      <MosquitoRisks />
      <MosquitoProcess />
      <MosquitoWhyChoose />
      <PestCTA />
      <MosquitoFAQ />
      <Footer />
    </div>
  );
};

export default MosquitoPage;
