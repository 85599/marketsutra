import React, { useState } from 'react';
import Screener from './components/Screener';
import './App.css';
function App() {
    return (
        <div className="App">
            <header className="app-header">
                <h1>📈 MarketSutra - Live Stock Screener</h1>
                <p>Real-time Indian & World Stock Market Analysis</p>
            </header>
            <Screener />
        </div>
    );
}
export default App;