import React from 'react';
import './App.css';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    { id: 1, name: 'ADM Cohort 1', startDate: '01-Aug-2026', endDate: '15-Aug-2026', status: 'ongoing' },
    { id: 2, name: 'Cloud Cohort 3', startDate: '15-Jun-2026', endDate: '30-Jun-2026', status: 'completed' },
    { id: 3, name: 'Java Cohort 2', startDate: '01-Jul-2026', endDate: '20-Jul-2026', status: 'completed' }
  ];

  return (
    <div className="App" style={{ padding: '40px', backgroundColor: '#1a1c20', minHeight: '100vh', color: 'white', textAlign: 'center' }}>
      <h1 style={{ marginBottom: '30px', color: '#61dafb', fontFamily: 'Arial, sans-serif' }}>Academy Cohorts Dashboard</h1>
      <div className="cohorts-container" style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        {cohorts.map(cohort => (
          <CohortDetails 
            key={cohort.id} 
            cohortName={cohort.name} 
            startDate={cohort.startDate} 
            endDate={cohort.endDate} 
            status={cohort.status} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
