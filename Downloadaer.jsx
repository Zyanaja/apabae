// ========== Downloader.jsx ==========
import React, { useState } from 'react';

const Downloader = () => {
  const [url, setUrl] = useState('');
  const handleDownload = () => {
    if (!url) return alert("Masukin link dulu dong anjir");
    alert(`(Fake) Download dimulai dari: ${url}`); // nanti bisa ganti pake API
  };

  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-4">🎥 Video Downloader</h2>
      <input
        type="text"
        placeholder="Tempelin URL TikTok/IG/YouTube disini"
        className="px-4 py-2 rounded-md w-1/2 text-black"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleDownload} className="ml-4 px-6 py-2 bg-yellow-400 text-black font-bold rounded-md">
        Download
      </button>
    </div>
  );
};

export default Downloader;
