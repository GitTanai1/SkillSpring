import React, { useState } from 'react';

function CourseDetails() {
    const [isEnrolled, setIsEnrolled] = useState(false);
    const course = { title: "Full-Stack React & Node Course", duration: "12 Weeks", level: "Advanced" };

    // Conditional Rendering Method: Helper function using standard If-Else statements
    const renderEnrollmentStatus = () => {
        if (isEnrolled) {
            return (
                <div style={{ padding: '12px', background: 'rgba(46, 204, 113, 0.15)', color: '#2ecc71', border: '1px solid #2ecc71', borderRadius: '6px', marginTop: '20px', fontWeight: 'bold', textAlign: 'center' }}>
                    ✓ Enrolled in Course! Access Granted.
                </div>
            );
        } else {
            return (
                <button 
                    onClick={() => setIsEnrolled(true)}
                    style={{ padding: '12px 20px', background: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', width: '100%', marginTop: '20px', fontSize: '1rem' }}
                >
                    Enroll Now (If-Else Demo)
                </button>
            );
        }
    };

    return (
        <div style={{ padding: '20px', background: '#20232a', borderRadius: '8px', color: 'white', border: '1px solid #444', textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#e74c3c', marginTop: '0', borderBottom: '1px solid #444', paddingBottom: '10px' }}>Course Details</h2>
            <div style={{ marginTop: '15px' }}>
                <p style={{ margin: '8px 0' }}><b>Course:</b> {course.title}</p>
                <p style={{ margin: '8px 0' }}><b>Duration:</b> {course.duration}</p>
                <p style={{ margin: '8px 0' }}><b>Difficulty:</b> {course.level}</p>
                
                {renderEnrollmentStatus()}
            </div>
        </div>
    );
}

export default CourseDetails;
