import React, { useState } from 'react';
import './App.css';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');

  // Dummy flight details data
  const flightsData = [
    { id: 1, airline: "Indigo", flightNo: "6E-204", departure: "Delhi (DEL)", destination: "Mumbai (BOM)", price: 5500 },
    { id: 2, airline: "Air India", flightNo: "AI-101", departure: "Mumbai (BOM)", destination: "New York (JFK)", price: 65000 },
    { id: 3, airline: "SpiceJet", flightNo: "SG-302", departure: "Bangalore (BLR)", destination: "Delhi (DEL)", price: 4800 },
    { id: 4, airline: "Vistara", flightNo: "UK-812", departure: "Chennai (MAA)", destination: "Bangalore (BLR)", price: 3200 }
  ];

  // Callback to handle booking ticket
  const handleBookTicket = (flight) => {
    alert(`Ticket successfully booked for Flight ${flight.flightNo} (${flight.airline}) to ${flight.destination}!`);
    setBookingMessage(`Successfully booked ticket for Flight ${flight.flightNo} (${flight.airline})!`);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setBookingMessage('');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setBookingMessage('');
  };

  return (
    <div className="App" style={{ backgroundColor: '#181a1b', minHeight: '100vh', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      {/* Header Authentication Navigation Bar */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 40px', background: '#20232a', borderBottom: '1px solid #444' }}>
        <h1 style={{ margin: '0', fontSize: '1.5rem', color: '#61dafb' }}>Ticket Booking Portal</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ fontSize: '1rem', color: isLoggedIn ? '#2ecc71' : '#ffc107' }}>
            {isLoggedIn ? '● Logged In (User)' : '○ Guest Mode'}
          </span>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              style={{ padding: '8px 16px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Logout
            </button>
          ) : (
            <button 
              onClick={handleLogin}
              style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              Login
            </button>
          )}
        </div>
      </header>

      {/* Main content display based on isLoggedIn state */}
      <main style={{ padding: '20px' }}>
        {bookingMessage && (
          <div style={{ maxWidth: '850px', margin: '20px auto', padding: '15px', background: 'rgba(46, 204, 113, 0.15)', borderLeft: '4px solid #2ecc71', borderRadius: '4px', textAlign: 'center' }}>
            <p style={{ margin: '0', fontSize: '1.1rem', color: '#2ecc71', fontWeight: 'bold' }}>{bookingMessage}</p>
          </div>
        )}

        {isLoggedIn ? (
          <UserPage flights={flightsData} onBookTicket={handleBookTicket} />
        ) : (
          <GuestPage flights={flightsData} />
        )}
      </main>
    </div>
  );
}

export default App;
