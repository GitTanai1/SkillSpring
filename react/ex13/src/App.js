import React, { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState('book'); // book, blog, course, or none

  // 1. Conditional Rendering: Switch Statement
  const renderMainComponent = () => {
    switch (view) {
      case 'book':
        return <BookDetails />;
      case 'blog':
        return <BlogDetails />;
      case 'course':
        return <CourseDetails />;
      case 'none':
        return null; // 2. Conditional Rendering: Preventing rendering by returning null
      default:
        return <div style={{ color: 'red' }}>Error: Invalid view state</div>;
    }
  };

  // 3. Conditional Rendering: Element Variables
  let viewIndicator;
  if (view === 'book') {
    viewIndicator = <span style={{ color: '#61dafb', fontWeight: 'bold' }}>Showing Book details (Element Variable Demo)</span>;
  } else if (view === 'blog') {
    viewIndicator = <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>Showing Blog details (Element Variable Demo)</span>;
  } else if (view === 'course') {
    viewIndicator = <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Showing Course details (Element Variable Demo)</span>;
  } else {
    viewIndicator = <span style={{ color: '#aaa', fontStyle: 'italic' }}>Component rendering suppressed (returning null)</span>;
  }

  return (
    <div className="App" style={{ backgroundColor: '#181a1b', minHeight: '100vh', padding: '40px 20px', color: 'white', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#61dafb', marginBottom: '10px' }}>Blogger Dashboard</h1>
      <p style={{ textAlign: 'center', color: '#888', marginBottom: '35px' }}>
        Demonstrating all standard methods of Conditional Rendering in React
      </p>

      {/* Navigation Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '20px', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setView('book')}
          style={{ padding: '10px 20px', background: view === 'book' ? '#61dafb' : '#333', color: view === 'book' ? '#20232a' : 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Book Details
        </button>
        <button 
          onClick={() => setView('blog')}
          style={{ padding: '10px 20px', background: view === 'blog' ? '#2ecc71' : '#333', color: view === 'blog' ? '#20232a' : 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Blog Details
        </button>
        <button 
          onClick={() => setView('course')}
          style={{ padding: '10px 20px', background: view === 'course' ? '#e74c3c' : '#333', color: view === 'course' ? '#20232a' : 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Course Details
        </button>
        <button 
          onClick={() => setView('none')}
          style={{ padding: '10px 20px', background: view === 'none' ? '#aaa' : '#333', color: view === 'none' ? '#20232a' : 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Suppress Render
        </button>
      </div>

      {/* Element Variable Output display */}
      <div style={{ textAlign: 'center', margin: '20px 0', fontSize: '1.1rem' }}>
        {viewIndicator}
      </div>

      {/* Render dynamic component using Switch statement method */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {renderMainComponent()}
      </div>
    </div>
  );
}

export default App;
