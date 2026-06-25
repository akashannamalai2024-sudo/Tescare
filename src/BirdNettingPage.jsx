import React from 'react';
import Navbar from './Navbar.jsx';
import BirdNettingHero from './BirdNettingHero.jsx';
import BirdProblems from './BirdProblems.jsx';
import BirdSolutions from './BirdSolutions.jsx';
import BirdBenefits from './BirdBenefits.jsx';
import BirdProcess from './BirdProcess.jsx';
import BirdFAQ from './BirdFAQ.jsx';
import Footer from './Footer.jsx';

const BirdNettingPage = () => {
  return (
    <div className="bird-netting-page-wrapper">
      <Navbar />
      <BirdNettingHero />
      <BirdProblems />
      <BirdSolutions />
      <BirdBenefits />
      <BirdProcess />
      <BirdFAQ />
      <Footer />
    </div>
  );
};

export default BirdNettingPage;
