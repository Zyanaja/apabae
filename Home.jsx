// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center py-20 px-4 bg-gradient-to-b from-purple-600 to-indigo-700 min-h-screen text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">Selamat Datang di Zyan to Web</h1>
      <p className="text-lg md:text-xl mb-8">Kumpulan fitur AI & tools kekinian yang bisa lo pake GRATIS!</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/features" className="bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">Lihat Fitur</Link>
        <Link to="/premium" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition">Fitur Premium</Link>
      </div>
    </div>
  );
};

export default Home;