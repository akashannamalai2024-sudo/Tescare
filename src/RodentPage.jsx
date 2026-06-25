import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import RodentHero from './RodentHero.jsx';
import RodentProblems from './RodentProblems.jsx';
import RodentSolutions from './RodentSolutions.jsx';
import RodentWhyChoose from './RodentWhyChoose.jsx';
import RodentCTA from './RodentCTA.jsx';
import RodentFAQ from './RodentFAQ.jsx';
import Footer from './Footer.jsx';

const RodentPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="rodent-page-wrapper">
      <Navbar />
      <RodentHero />
      <RodentProblems />
      <RodentSolutions />
      <RodentWhyChoose />
      <RodentCTA />
      <RodentFAQ />
      <Footer />
    </div>
  );
};

export default RodentPage;
