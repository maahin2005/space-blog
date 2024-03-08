import React, { useEffect } from 'react';
import Home from '../components/Home/Home';
import SecondSection from '../components/Home/SecondSection';
import ThirdSection from '../components/Home/ThirdSection';
import ShinyDivider from '../components/ShinyDivider';
import LastSection from '../components/Home/LastSection';

function MainHome() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);
  return (
    <>
      <Home />
      <ShinyDivider />
      <SecondSection />
      <ShinyDivider />
      <ThirdSection />
      <ShinyDivider />

      <LastSection />
    </>
  );
}

export default MainHome;
