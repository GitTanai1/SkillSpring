import React from 'react';

function UserPage({ flights, onBookTicket }) {
    return (
        <div style={{ padding: '20px', maxWidth: '850px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#2ecc71', borderBottom: '2px solid #2ecc71', paddingBottom: '10px' }}>
                Flight Search (Logged-in Mode)
            </h2>
            <p style={{ color: '#ccc', fontStyle: 'italic', marginBottom: '20px' }}>
                Welcome back! You are logged in and can now book flight tickets.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                {flights.map(flight => (
                    <div key={flight.id} style={{ background: '#20232a', color: 'white', border: '1px solid #444', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#2ecc71' }}>{flight.airline}</h3>
                        <p style={{ margin: '5px 0' }}><b>Flight No:</b> {flight.flightNo}</p>
                        <p style={{ margin: '5px 0' }}><b>Route:</b> {flight.departure} → {flight.destination}</p>
                        <p style={{ margin: '5px 0', fontSize: '1.2rem', color: '#2ecc71' }}><b>Price:</b> ₹{flight.price.toLocaleString()}</p>
                        <div style={{ marginTop: '15px' }}>
                            <button 
                                onClick={() => onBookTicket(flight)}
                                style={{ width: '100%', padding: '10px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
                            >
                                Book Ticket
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserPage;
