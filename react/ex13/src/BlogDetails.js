import React, { useState } from 'react';

function BlogDetails() {
    const [isExpanded, setIsExpanded] = useState(false);
    const blog = {
        title: "The Rise of Next.js and Server Components",
        author: "Dan Abramov",
        excerpt: "Server Components are changing how we build SPA layouts by rendering on server nodes...",
        fullContent: "Server Components are changing how we build SPA layouts by rendering on server nodes. By fetching data directly on server instances, it reduces standard JS payload transfers to the browser, significantly accelerating first contentful paint (FCP) and enhancing user retention."
    };

    return (
        <div style={{ padding: '20px', background: '#20232a', borderRadius: '8px', color: 'white', border: '1px solid #444', textAlign: 'left', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#2ecc71', marginTop: '0', borderBottom: '1px solid #444', paddingBottom: '10px' }}>Blog Details</h2>
            <div style={{ marginTop: '15px' }}>
                <p style={{ margin: '8px 0' }}><b>Post Title:</b> {blog.title}</p>
                <p style={{ margin: '8px 0', marginBottom: '15px' }}><b>Author:</b> {blog.author}</p>
                
                {/* Conditional Rendering Method: Ternary Operator (? :) */}
                <div style={{ margin: '15px 0', background: '#1c1e22', padding: '15px', borderRadius: '6px', borderLeft: '4px solid #2ecc71' }}>
                    {isExpanded ? (
                        <p style={{ lineHeight: '1.6', margin: '0' }}>{blog.fullContent}</p>
                    ) : (
                        <p style={{ fontStyle: 'italic', margin: '0', color: '#aaa' }}>{blog.excerpt}</p>
                    )}
                </div>

                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{ padding: '8px 16px', background: '#2ecc71', color: '#20232a', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    {isExpanded ? "Show Less" : "Read More (Ternary Demo)"}
                </button>
            </div>
        </div>
    );
}

export default BlogDetails;
