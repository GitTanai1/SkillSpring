import React from 'react';

function CalculateScore({ Name, School, Total, goal }) {
    const average = (Total / goal).toFixed(2);

    return (
        <div className="format">
            <h1>Student Score Card</h1>
            <div className="details">
                <p><b>Name:</b> {Name}</p>
                <p><b>School:</b> {School}</p>
                <p><b>Total Marks:</b> {Total}</p>
                <p><b>Goal / Subjects:</b> {goal}</p>
                <p className="average-highlight"><b>Average Score:</b> {average}</p>
            </div>
        </div>
    );
}

export default CalculateScore;
