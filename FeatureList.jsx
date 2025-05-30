// FeatureList.jsx
import React from 'react';

export const FeatureList = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Fitur Gratis</h2>
    <ul className="list-disc pl-5">
      <li>Downloader Video & Lagu</li>
      <li>Zodiak Harian</li>
      <li>QR Code Scanner</li>
      <li>Chat AI sederhana</li>
      <li>Finder Jodoh (mencari random match)</li>
    </ul>
  </div>
);

// PremiumFeatures.jsx
import React from 'react';

export const PremiumFeatures = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4">Fitur Premium</h2>
    <p>Dapetin akses ke AI premium dengan kemampuan lebih tinggi dan fitur eksklusif lainnya kayak:</p>
    <ul className="list-disc pl-5 mt-3">
      <li>AI Chat lebih pintar</li>
      <li>Pencarian Jodoh yang bisa filter kriteria</li>
      <li>Downloader resolusi tinggi</li>
      <li>Analisa Zodiak mendalam</li>
    </ul>
  </div>
);
