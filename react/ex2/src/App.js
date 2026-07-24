import React from 'react';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ padding: '20px', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 'calc(10px + 2vmin)', color: 'white', backgroundColor: '#282c34' }}>
        <h1>Student Management Portal</h1>
        <div className="portal-content" style={{ width: '80%', maxWidth: '800px', margin: '20px auto', textAlign: 'left', background: '#20232a', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
          <Home />
          <About />
          <Contact />
        </div>
      </header>
    </div>
  );
}

export default App;
