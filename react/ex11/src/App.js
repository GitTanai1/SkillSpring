import React from 'react';
import './App.css';
import EventExamples from './EventExamples';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#181a1b', minHeight: '100vh', padding: '40px 20px', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#61dafb', marginBottom: '30px' }}>
        Event Handling and Currency Conversion Dashboard
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>
        <EventExamples />
        <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
