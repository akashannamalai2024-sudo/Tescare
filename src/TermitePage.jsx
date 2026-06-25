import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import TermiteHero from './TermiteHero.jsx';
import TermiteSigns from './TermiteSigns.jsx';
import TermiteSolutions from './TermiteSolutions.jsx';
import TermiteBenefits from './TermiteBenefits.jsx';
import PestCTA from './PestCTA.jsx';
import TermiteFAQ from './TermiteFAQ.jsx';
import Footer from './Footer.jsx';

const TermitePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="termite-page-wrapper">
      <Navbar />
      <TermiteHero />
      <TermiteSigns />
      <TermiteSolutions />
      <TermiteBenefits />
      <PestCTA />
      <TermiteFAQ />
      <Footer />
    </div>
  );
};

export default TermitePage;
