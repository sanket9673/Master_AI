import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import WorkFlow from './components/WorkFlow';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/workflow" element={<WorkFlow />} />
          <Route path="/price" element={<Price />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
      </div>
      <FooterSection />
    </Router>
  );
}

export default App;
