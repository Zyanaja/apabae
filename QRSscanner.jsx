// QRScanner.jsx
import React from 'react';

export const QRScanner = () => (
  <div className="p-6">
    <h2 className="text-xl font-bold mb-4">QR Code Scanner</h2>
    <p>Fitur QR belum aktif. Nanti bisa pake kamera buat scan QR Code dan tampil hasilnya.</p>
  </div>
);

// NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => (
  <div className="p-10 text-center">
    <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
    <p className="mb-4">Halaman yang lo cari ga ada, bro 😭</p>
    <Link to="/" className="text-blue-500 underline">Balik ke Home</Link>
  </div>
);
