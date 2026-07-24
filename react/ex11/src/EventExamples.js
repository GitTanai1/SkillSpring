import React, { useState } from 'react';

function EventExamples() {
    const [counter, setCounter] = useState(0);
    const [helloMessage, setHelloMessage] = useState('');
    const [welcomeMessage, setWelcomeMessage] = useState('');
    const [clickMessage, setClickMessage] = useState('');

    // Method a: Increment the value of the counter
    const incrementVal = () => {
        setCounter(prev => prev + 1);
    };

    // Method b: Say Hello followed by a static message
    const sayHello = () => {
        setHelloMessage("Hello! You clicked the Increment button.");
    };

    // Decrement method to decrease the value of the counter
    const decrementVal = () => {
        setCounter(prev => prev - 1);
    };

    // Invokes the function with an argument
    const sayWelcome = (arg) => {
        setWelcomeMessage(`Welcome function invoked with argument: "${arg}"`);
    };

    // Synthetic event click handler (referred to as OnPress)
    const handlePress = (e) => {
        setClickMessage("OnPress invoked (Synthetic event triggered)");
        alert("I was clicked");
    };

    return (
        <div style={{ padding: '25px', background: '#20232a', borderRadius: '10px', color: 'white', maxWidth: '500px', margin: '20px auto', textAlign: 'left', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#61dafb', borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginTop: '0' }}>
                React Event Handlers
            </h2>

            {/* 1. Counter (Increment/Decrement) */}
            <div style={{ margin: '20px 0' }}>
                <h3>Counter Value: <span style={{ color: '#61dafb' }}>{counter}</span></h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {/* The increase button invokes multiple methods (incrementVal & sayHello) */}
                    <button 
                        onClick={() => { incrementVal(); sayHello(); }}
                        style={{ padding: '10px 18px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Increment (Multi-method)
                    </button>
                    <button 
                        onClick={decrementVal}
                        style={{ padding: '10px 18px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                    >
                        Decrement
                    </button>
                </div>
                {helloMessage && (
                    <p style={{ color: '#aaa', fontSize: '0.95rem', marginTop: '10px', background: '#1a1c20', padding: '8px', borderRadius: '4px' }}>
                        {helloMessage}
                    </p>
                )}
            </div>

            {/* 2. Welcome Button with Argument */}
            <div style={{ margin: '20px 0', borderTop: '1px solid #444', paddingTop: '15px' }}>
                <button 
                    onClick={() => sayWelcome('welcome')}
                    style={{ padding: '10px 18px', background: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    Say Welcome
                </button>
                {welcomeMessage && (
                    <p style={{ color: '#aaa', fontSize: '0.95rem', marginTop: '10px', background: '#1a1c20', padding: '8px', borderRadius: '4px' }}>
                        {welcomeMessage}
                    </p>
                )}
            </div>

            {/* 3. Synthetic Event click button (OnPress) */}
            <div style={{ margin: '20px 0', borderTop: '1px solid #444', paddingTop: '15px' }}>
                <button 
                    onClick={handlePress}
                    style={{ padding: '10px 18px', background: '#f59e0b', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                    OnPress (Synthetic Event)
                </button>
                {clickMessage && (
                    <p style={{ color: '#aaa', fontSize: '0.95rem', marginTop: '10px', background: '#1a1c20', padding: '8px', borderRadius: '4px' }}>
                        {clickMessage}
                    </p>
                )}
            </div>
        </div>
    );
}

export default EventExamples;
