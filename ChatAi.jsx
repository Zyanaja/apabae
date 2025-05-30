// ChatAI.jsx
import React, { useState } from 'react';

export const ChatAI = () => {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const sendChat = () => {
    if (!input.trim()) return;
    setChat([...chat, { sender: 'user', text: input }, { sender: 'ai', text: `Balasan dari AI: ${input}` }]);
    setInput('');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Chat dengan AI</h2>
      <div className="border p-4 h-64 overflow-y-auto bg-gray-100 mb-4">
        {chat.map((msg, i) => (
          <p key={i} className={`${msg.sender === 'user' ? 'text-right' : 'text-left'} mb-2`}>
            <span className={`inline-block px-3 py-1 rounded ${msg.sender === 'user' ? 'bg-blue-200' : 'bg-gray-300'}`}>{msg.text}</span>
          </p>
        ))}
      </div>
      <input
        type="text"
        placeholder="Tanya apa kek..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border px-4 py-2 rounded mr-2 w-2/3"
      />
      <button onClick={sendChat} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Kirim</button>
    </div>
  );
};