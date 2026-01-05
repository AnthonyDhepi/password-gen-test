// src/App.tsx
import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Copied!");
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>🔐 Super Gen</h1>
      <div style={{ background: '#0c0404ff', padding: '20px', borderRadius: '10px', width: '300px', textAlign: 'center' }}>
        
        {/* Display Area */}
        <div style={{ background: 'white', padding: '10px', borderRadius: '5px', marginBottom: '20px', minHeight: '24px', fontWeight: 'bold', color: 'black' }}>
          {password || "Click Generate"}
        </div>

        {/* Controls */}
        <div style={{ marginBottom: '20px' }}>
          <label>Length: {length}</label>
          <input 
            type="range" 
            min="6" 
            max="20" 
            value={length} 
            onChange={(e) => setLength(Number(e.target.value))} 
            style={{ width: '100%' }}
          />
        </div>

        {/* Buttons */}
        <button 
          onClick={generatePassword} 
          style={{ background: '#0070f3', color: 'black', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
        >
          Generate New
        </button>
        
        {password && (
          <button 
            onClick={copyToClipboard}
            style={{ marginTop: '10px', display: 'block', width: '100%', background: 'transparent', border: '1px solid #ccc', padding: '5px', borderRadius: '5px', cursor: 'pointer' }}
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
}

export default App;