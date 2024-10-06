import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection' ;
import FeatureSection from './components/FeatureSection';
import WorkFlow from './components/WorkFlow';
import Price from './components/Price';

function App() {
  return (
    <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <WorkFlow />
      <Price />
    </div>
    </>
  ) 
}

export default App ;
