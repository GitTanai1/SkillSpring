import React from 'react';

function IndianPlayers() {
    // 1. Destructuring to obtain odd and even team players
    const indianPlayersList = ["Sachin Tendulkar", "MS Dhoni", "Virat Kohli", "Rohit Sharma", "KL Rahul", "Shikhar Dhawan"];
    
    // Destructuring array elements into variables
    const [first, second, third, fourth, fifth, sixth] = indianPlayersList;
    
    const oddTeam = [first, third, fifth];   // 1st, 3rd, 5th
    const evenTeam = [second, fourth, sixth]; // 2nd, 4th, 6th

    // 2. Merging T20 and Ranji Trophy squads using ES6 Spread operator
    const t20Players = ["Hardik Pandya", "Jasprit Bumrah", "Mohammed Shami"];
    const ranjiTrophyPlayers = ["Cheteshwar Pujara", "Ajinkya Rahane", "Sarfaraz Khan"];
    const mergedPlayers = [...t20Players, ...ranjiTrophyPlayers];

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '20px auto', background: '#20232a', borderRadius: '8px', color: 'white', textAlign: 'left', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#61dafb', borderBottom: '2px solid #61dafb', paddingBottom: '10px' }}>Indian Players details (ES6 Features)</h2>
            
            <h3>Odd Team Players (1st, 3rd, 5th):</h3>
            <ul style={{ listStyleType: 'square', lineHeight: '1.6', color: '#81e6d9' }}>
                {oddTeam.map((player, index) => <li key={index}>{player}</li>)}
            </ul>

            <h3 style={{ marginTop: '20px' }}>Even Team Players (2nd, 4th, 6th):</h3>
            <ul style={{ listStyleType: 'square', lineHeight: '1.6', color: '#90cdf4' }}>
                {evenTeam.map((player, index) => <li key={index}>{player}</li>)}
            </ul>

            <h3 style={{ marginTop: '25px', color: '#61dafb', borderTop: '1px solid #444', paddingTop: '15px' }}>
                Merged Squad (T20 + Ranji Trophy using Spread):
            </h3>
            <ul style={{ listStyleType: 'circle', lineHeight: '1.6', color: '#e2e8f0' }}>
                {mergedPlayers.map((player, index) => <li key={index}>{player}</li>)}
            </ul>
        </div>
    );
}

export default IndianPlayers;
