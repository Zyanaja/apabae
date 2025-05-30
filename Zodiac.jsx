// Zodiac.jsx
import React, { useState } from 'react';

export const Zodiac = () => {
  const [sign, setSign] = useState('');
  const [result, setResult] = useState('');

  const handleZodiac = () => setResult(`Ramalan zodiak ${sign}: Hari ini kamu harus sabar yaa 😆`);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Cek Zodiak Kamu</h2>
      <input
        type="text"
        placeholder="Masukkan Zodiak (contoh: Aries)"
        value={sign}
        onChange={(e) => setSign(e.target.value)}
        className="border px-4 py-2 rounded mr-2"
      />
      <button onClick={handleZodiac} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Cek</button>
      {result && <p className="mt-4">{result}</p>}
    </div>
  );
};