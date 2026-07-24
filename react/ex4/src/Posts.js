import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            hasError: false,
            errorMessage: ''
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP error ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                // Map the JSON objects to instances of the Post class
                const postsList = data.map(item => new Post(item.userId, item.id, item.title, item.body));
                this.setState({ posts: postsList });
            })
            .catch(error => {
                alert("Error loading posts: " + error.message);
                this.setState({ hasError: true, errorMessage: error.message });
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("componentDidCatch caught: " + error.toString());
        this.setState({ hasError: true, errorMessage: error.toString() });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>
                    <h2>Something went wrong loading the posts.</h2>
                    <p>{this.state.errorMessage}</p>
                </div>
            );
        }

        return (
            <div className="posts-list" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
                <h1 style={{ textAlign: 'center', color: '#61dafb', borderBottom: '2px solid #61dafb', paddingBottom: '10px' }}>Blog Posts</h1>
                {this.state.posts.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#888' }}>Loading blog posts...</p>
                ) : (
                    this.state.posts.slice(0, 10).map(post => ( // Display first 10 for clean look
                        <div key={post.id} className="post-item" style={{ background: '#20232a', color: 'white', padding: '20px', margin: '20px 0', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ margin: '0 0 10px 0', color: '#61dafb' }}>{post.title}</h3>
                            <p style={{ margin: '0', color: '#e0e0e0', lineHeight: '1.6' }}>{post.body}</p>
                        </div>
                    ))
                )}
            </div>
        );
    }
}

export default Posts;
