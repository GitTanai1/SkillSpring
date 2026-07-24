import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';
import './Stylesheets/mystyle.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1c20' }}>
        <CalculateScore 
          Name="John Doe" 
          School="Greenwood High School" 
          Total={450} 
          goal={5} 
        />
      </header>
    </div>
  );
}

export default App;
