// ========== App.jsx ==========
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import Home from './pages/Home';
import FeatureList from './pages/FeatureList';
import PremiumFeatures from './pages/PremiumFeatures';
import Downloader from './pages/Downloader';
import Zodiac from './pages/Zodiac';
import ChatAI from './pages/ChatAI';
import JodohFinder from './pages/JodohFinder';
import QRScanner from './pages/QRScanner';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-b from-black via-gray-800 to-gray-900 text-white min-h-screen font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeatureList />} />
          <Route path="/premium" element={<PremiumFeatures />} />
          <Route path="/downloader" element={<Downloader />} />
          <Route path="/zodiac" element={<Zodiac />} />
          <Route path="/chat-ai" element={<ChatAI />} />
          <Route path="/jodoh" element={<JodohFinder />} />
          <Route path="/qr-scanner" element={<QRScanner />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;