// ========== Navbar.jsx ==========
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-lg flex justify-between items-center">
      <h1 className="text-xl font-bold text-white">Zyan to Web</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white hover:text-yellow-300">Home</Link>
        <Link to="/features" className="text-white hover:text-yellow-300">Fitur</Link>
        <Link to="/premium" className="text-white hover:text-yellow-300">Premium</Link>
        <Link to="/downloader" className="text-white hover:text-yellow-300">Downloader</Link>
        <Link to="/zodiac" className="text-white hover:text-yellow-300">Zodiac</Link>
        <Link to="/chat-ai" className="text-white hover:text-yellow-300">AI Chat</Link>
        <Link to="/jodoh" className="text-white hover:text-yellow-300">Jodoh</Link>
        <Link to="/qr-scanner" className="text-white hover:text-yellow-300">QR</Link>
      </div>
    </nav>
  );
};