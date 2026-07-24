import React from 'react';

function GuestPage({ flights }) {
    return (
        <div style={{ padding: '20px', maxWidth: '850px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#ffc107', borderBottom: '2px solid #ffc107', paddingBottom: '10px' }}>
                Flight Search (Guest Mode)
            </h2>
            <p style={{ color: '#ccc', fontStyle: 'italic', marginBottom: '20px' }}>
                You are currently browsing as a guest. Please log in using the button above to book tickets.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                {flights.map(flight => (
                    <div key={flight.id} style={{ background: '#20232a', color: 'white', border: '1px solid #444', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#ffc107' }}>{flight.airline}</h3>
                        <p style={{ margin: '5px 0' }}><b>Flight No:</b> {flight.flightNo}</p>
                        <p style={{ margin: '5px 0' }}><b>Route:</b> {flight.departure} → {flight.destination}</p>
                        <p style={{ margin: '5px 0', fontSize: '1.2rem', color: '#ffc107' }}><b>Price:</b> ₹{flight.price.toLocaleString()}</p>
                        <div style={{ marginTop: '15px' }}>
                            <button 
                                disabled
                                style={{ width: '100%', padding: '10px', background: '#555', color: '#aaa', border: 'none', borderRadius: '4px', cursor: 'not-allowed', fontWeight: 'bold' }}
                            >
                                Book Ticket (Requires Login)
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GuestPage;
