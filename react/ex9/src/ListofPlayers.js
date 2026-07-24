import React from 'react';

function ListofPlayers() {
    const players = [
        { name: "Sachin Tendulkar", score: 120 },
        { name: "MS Dhoni", score: 95 },
        { name: "Virat Kohli", score: 110 },
        { name: "Rohit Sharma", score: 85 },
        { name: "KL Rahul", score: 55 },
        { name: "Shikhar Dhawan", score: 65 },
        { name: "Hardik Pandya", score: 75 },
        { name: "Ravindra Jadeja", score: 45 },
        { name: "Rishabh Pant", score: 60 },
        { name: "Jasprit Bumrah", score: 15 },
        { name: "Mohammed Shami", score: 10 }
    ];

    // Filter players with scores below 70 using arrow functions
    const playersBelow70 = players.filter(player => player.score < 70);

    return (
        <div style={{ padding: '20px', maxWidth: '600px', margin: '20px auto', background: '#20232a', borderRadius: '8px', color: 'white', textAlign: 'left', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#61dafb', borderBottom: '2px solid #61dafb', paddingBottom: '10px' }}>List of Players</h2>
            
            <h3>All Players:</h3>
            <ul style={{ listStyleType: 'square', lineHeight: '1.6' }}>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} : <span style={{ color: '#61dafb', fontWeight: 'bold' }}>{player.score}</span>
                    </li>
                ))}
            </ul>

            <h3 style={{ marginTop: '25px', color: '#ff6b6b', borderTop: '1px solid #444', paddingTop: '15px' }}>
                Players with Score Below 70 (Filtered List):
            </h3>
            <ul style={{ listStyleType: 'circle', lineHeight: '1.6', color: '#ff8b8b' }}>
                {playersBelow70.map((player, index) => (
                    <li key={index}>
                        {player.name} : <span style={{ fontWeight: 'bold' }}>{player.score}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;
