import React, { useState } from 'react';

function BookDetails() {
    const [showReviews, setShowReviews] = useState(false);
    const book = { title: "React Design Patterns", author: "Alex Banks", price: 899, rating: 4.8 };

    return (
        <div style={{ padding: '20px', background: '#20232a', borderRadius: '8px', color: 'white', border: '1px solid #444', textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#61dafb', marginTop: '0', borderBottom: '1px solid #444', paddingBottom: '10px' }}>Book Details</h2>
            <div style={{ marginTop: '15px' }}>
                <p style={{ margin: '8px 0' }}><b>Title:</b> {book.title}</p>
                <p style={{ margin: '8px 0' }}><b>Author:</b> {book.author}</p>
                <p style={{ margin: '8px 0' }}><b>Price:</b> ₹{book.price}</p>
                <p style={{ margin: '8px 0', marginBottom: '20px' }}><b>Rating:</b> {book.rating} / 5.0</p>
                
                {/* Conditional Rendering Method: Logical AND (&&) operator */}
                <button 
                    onClick={() => setShowReviews(!showReviews)}
                    style={{ padding: '8px 16px', background: '#61dafb', color: '#20232a', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    {showReviews ? "Hide Reviews" : "Show Reviews (Logical && Demo)"}
                </button>

                {showReviews && (
                    <div style={{ marginTop: '15px', background: '#1c1e22', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #61dafb' }}>
                        <h4 style={{ margin: '0 0 10px 0', color: '#61dafb' }}>User Reviews:</h4>
                        <p style={{ margin: '5px 0', fontStyle: 'italic', fontSize: '0.95rem' }}>★ "An excellent deep-dive into state patterns!" - User A</p>
                        <p style={{ margin: '5px 0', fontStyle: 'italic', fontSize: '0.95rem' }}>★ "Must read for intermediate React developers." - User B</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookDetails;
