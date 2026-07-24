import React from 'react';
import './App.css';

function App() {
  // Single Office Object Details
  const featuredOffice = {
    name: "Elite Co-Working Corporate Suite",
    rent: 55000,
    address: "Infotech Park, Block A, Bangalore - 560066"
  };

  // List of Office Objects for Looping
  const officeList = [
    { id: 1, name: "Downtown Startup Studio", rent: 45000, address: "MG Road, Suite 404, Bangalore" },
    { id: 2, name: "Skyline Executive Center", rent: 85000, address: "UB City, Level 15, Bangalore" },
    { id: 3, name: "Creative Loft Workspace", rent: 58000, address: "Indiranagar, 12th Main, Bangalore" },
    { id: 4, name: "Metro Heights Hub", rent: 72000, address: "Koramangala, 80 Feet Road, Bangalore" }
  ];

  return (
    <div className="App" style={{ backgroundColor: '#1a1c20', minHeight: '100vh', padding: '40px 20px', color: 'white', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
      {/* 1. Heading element */}
      <h1 style={{ color: '#61dafb', textAlign: 'center', marginBottom: '40px', fontSize: '2.5rem', fontWeight: 'bold' }}>
        Office Space Rental Portal
      </h1>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Featured Office Space (Single Object Card) */}
        <div style={{ background: '#20232a', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 16px rgba(0,0,0,0.3)', marginBottom: '45px' }}>
          {/* 2. Image Attribute */}
          <img 
            src="/office.png" 
            alt="Premium Office Space" 
            style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
          />
          <div style={{ padding: '30px' }}>
            <h2 style={{ color: '#61dafb', margin: '0 0 15px 0' }}>Featured Space: {featuredOffice.name}</h2>
            <p style={{ fontSize: '1.1rem', margin: '8px 0' }}><b>Address:</b> {featuredOffice.address}</p>
            {/* 3. Rent Display Color Logic (< 60000 Red, >= 60000 Green) */}
            <p style={{ fontSize: '1.3rem', margin: '8px 0' }}>
              <b>Monthly Rent:</b>{' '}
              <span style={{ color: featuredOffice.rent < 60000 ? '#ff4d4d' : '#2ecc71', fontWeight: 'bold' }}>
                ₹{featuredOffice.rent.toLocaleString()}
              </span>
            </p>
          </div>
        </div>

        {/* 4. List of Office Space Items */}
        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px', marginBottom: '25px', color: '#e2e8f0' }}>
          Available Office Spaces
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {officeList.map(office => (
            <div key={office.id} style={{ background: '#20232a', borderRadius: '8px', padding: '20px', border: '1px solid #333', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ color: '#61dafb', margin: '0 0 10px 0' }}>{office.name}</h3>
                <p style={{ fontSize: '0.95rem', color: '#ccc', margin: '5px 0' }}>{office.address}</p>
              </div>
              <div style={{ marginTop: '15px', borderTop: '1px solid #333', paddingTop: '10px' }}>
                <p style={{ margin: '0', fontSize: '1.1rem' }}>
                  Rent:{' '}
                  <span style={{ color: office.rent < 60000 ? '#ff4d4d' : '#2ecc71', fontWeight: 'bold' }}>
                    ₹{office.rent.toLocaleString()}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
