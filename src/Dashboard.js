import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

export default function Dashboard() {
  return (
    <main className="dashboard">
      <Link className="card" to="/assets">Assets</Link>
      <Link className="card" to="/maintenance">Maintenance</Link>
      <Link className="card" to="/parts">Parts Catalog</Link>
      <Link className="card" to="/work-requests">Work Requests</Link>
      <Link className="card" to="/utilities">Utility Readings</Link>
    </main>
  );
}
