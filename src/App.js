import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Assets from './Assets';
import Maintenance from './Maintenance';
import Parts from './Parts';
import WorkRequests from './WorkRequests';
import Utilities from './Utilities';

export default function App() {
  return (
    <HashRouter>
      <header>
        <h1>Plean CMMS</h1>
        <nav>
          <Link to="/">Dashboard</Link> | 
          <Link to="/assets">Assets</Link> | 
          <Link to="/maintenance">Maintenance</Link> | 
          <Link to="/parts">Parts</Link> | 
          <Link to="/work-requests">Requests</Link> | 
          <Link to="/utilities">Utilities</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/work-requests" element={<WorkRequests />} />
        <Route path="/utilities" element={<Utilities />} />
      </Routes>
    </HashRouter>
  );
}
