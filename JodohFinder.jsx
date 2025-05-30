// JodohFinder.jsx
import React, { useState } from 'react';

const names = ['Cintia', 'Raisa', 'Fatur', 'Bagas', 'Luna', 'Rehan', 'Ayumi'];

export const JodohFinder = () => {
  const [result, setResult] = useState('');
  const cariJodoh = () => setResult(`Jodohmu hari ini adalah: ${names[Math.floor(Math.random() * names.length)]} 😍`);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Cari Jodoh Random</h2>
      <button onClick={cariJodoh} className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Cari Sekarang</button>
      {result && <p className="mt-4 font-semibold">{result}</p>}
    </div>
  );
};