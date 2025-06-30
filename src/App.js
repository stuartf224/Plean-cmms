import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header>
        <img src="/logo.png" alt="Plean Logo" className="logo" />
        <h1>Plean CMMS</h1>
      </header>
      <main className="dashboard">
        <a className="card" href="/assets">Assets</a>
        <a className="card" href="/maintenance">Maintenance</a>
        <a className="card" href="/parts">Parts Catalog</a>
        <a className="card" href="/work-requests">Work Requests</a>
        <a className="card" href="/utilities">Utility Readings</a>
      </main>
    </div>
  );
}

export default App;
