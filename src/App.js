import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Assets from './Assets';
import Maintenance from './Maintenance';
import Parts from './Parts';
import WorkRequests from './WorkRequests';
import Utilities from './Utilities';

function App() {
  return (
    <div className="app">
      <header>
        <img src="/logo.png" alt="Plean Logo" className="logo" />
        <h1>Plean CMMS</h1>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/parts" element={<Parts />} />
          <Route path="/work-requests" element={<WorkRequests />} />
          <Route path="/utilities" element={<Utilities />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
