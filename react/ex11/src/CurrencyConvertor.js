import React, { useState } from 'react';

function CurrencyConvertor() {
    const [inr, setInr] = useState('');
    const [eur, setEur] = useState('');
    const [convertedEur, setConvertedEur] = useState(null);
    const [convertedInr, setConvertedInr] = useState(null);

    // Rate configuration
    const EUR_TO_INR = 90.91;
    const INR_TO_EUR = 0.011;

    // Handles the conversion submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inr !== '') {
            const result = (parseFloat(inr) * INR_TO_EUR).toFixed(2);
            setConvertedEur(result);
        } else {
            setConvertedEur(null);
        }

        if (eur !== '') {
            const result = (parseFloat(eur) * EUR_TO_INR).toFixed(2);
            setConvertedInr(result);
        } else {
            setConvertedInr(null);
        }
    };

    const handleClear = () => {
        setInr('');
        setEur('');
        setConvertedEur(null);
        setConvertedInr(null);
    };

    return (
        <div style={{ padding: '25px', background: '#20232a', borderRadius: '10px', color: 'white', maxWidth: '500px', margin: '20px auto', textAlign: 'left', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', fontFamily: 'Arial, sans-serif' }}>
            <h2 style={{ color: '#61dafb', borderBottom: '2px solid #61dafb', paddingBottom: '10px', marginTop: '0' }}>
                Currency Converter (INR ↔ EUR)
            </h2>

            <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                {/* INR to EUR */}
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Convert Indian Rupees (INR) to Euro (€):
                    </label>
                    <input 
                        type="number"
                        step="any"
                        value={inr}
                        onChange={(e) => { setInr(e.target.value); setConvertedEur(null); }}
                        placeholder="Enter INR amount"
                        style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #555', background: '#1c1e22', color: 'white', boxSizing: 'border-box' }}
                    />
                </div>

                {/* EUR to INR */}
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                        Convert Euro (€) to Indian Rupees (INR):
                    </label>
                    <input 
                        type="number"
                        step="any"
                        value={eur}
                        onChange={(e) => { setEur(e.target.value); setConvertedInr(null); }}
                        placeholder="Enter EUR amount"
                        style={{ padding: '10px', width: '100%', borderRadius: '4px', border: '1px solid #555', background: '#1c1e22', color: 'white', boxSizing: 'border-box' }}
                    />
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        type="submit"
                        style={{ flex: 1, padding: '12px', background: '#2ecc71', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
                    >
                        Convert
                    </button>
                    <button 
                        type="button"
                        onClick={handleClear}
                        style={{ padding: '12px', background: '#e0e0e0', color: '#20232a', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
                    >
                        Clear
                    </button>
                </div>
            </form>

            {/* Results displaying */}
            {(convertedEur !== null || convertedInr !== null) && (
                <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(97, 218, 251, 0.1)', border: '1px solid #61dafb', borderRadius: '6px' }}>
                    <h4 style={{ margin: '0 0 10px 0', color: '#61dafb' }}>Conversion Results:</h4>
                    
                    {convertedEur !== null && (
                        <p style={{ margin: '5px 0', fontSize: '1.1rem' }}>
                            ₹{inr} INR = <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>€{convertedEur} EUR</span>
                        </p>
                    )}

                    {convertedInr !== null && (
                        <p style={{ margin: '5px 0', fontSize: '1.1rem' }}>
                            €{eur} EUR = <span style={{ color: '#2ecc71', fontWeight: 'bold' }}>₹{convertedInr} INR</span>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
}

export default CurrencyConvertor;
