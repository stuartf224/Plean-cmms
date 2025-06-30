import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import './App.css';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_KEY
);

function App() {
  const [user, setUser] = useState(null);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const fetchAssets = async () => {
    const { data } = await supabase.from('assets').select('*');
    setAssets(data || []);
  };

  useEffect(() => {
    if (user) {
      fetchAssets();
    }
  }, [user]);

  return (
    <div className="app">
      <header>
        <img src="/logo.png" alt="Plean Precast Logo" className="logo" />
        <h1>Plean CMMS</h1>
        {user && <button onClick={signOut}>Logout</button>}
      </header>
      <main>
        {!user ? (
          <button className="login-btn" onClick={signIn}>Log in with Google</button>
        ) : (
          <>
            <p className="welcome">Welcome, {user.email}</p>
            <div className="card">
              <h2>Assets</h2>
              <ul>
                {assets.map(asset => (
                  <li key={asset.id}>{asset.name} – {asset.status}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
