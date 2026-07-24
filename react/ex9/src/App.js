import React, { useState } from 'react';
import './App.css';
import ListofPlayers from './ListofPlayers';
import IndianPlayers from './IndianPlayers';

function App() {
  // A state-controlled flag to easily test both states in the browser
  const [flag, setFlag] = useState(true);

  const toggleButton = (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <button 
        onClick={() => setFlag(!flag)}
        style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: '#61dafb', color: '#20232a', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
      >
        Toggle Flag (Current View: Flag = {flag.toString().toUpperCase()})
      </button>
    </div>
  );

  // Simple if-else conditional rendering
  if (flag) {
    return (
      <div className="App" style={{ backgroundColor: '#181a1b', minHeight: '100vh', color: 'white', padding: '20px' }}>
        {toggleButton}
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div className="App" style={{ backgroundColor: '#181a1b', minHeight: '100vh', color: 'white', padding: '20px' }}>
        {toggleButton}
        <IndianPlayers />
      </div>
    );
  }
}

export default App;
