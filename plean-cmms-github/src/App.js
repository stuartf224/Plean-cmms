import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

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
    <div style={{ padding: 20 }}>
      <h1>Plean CMMS</h1>
      {!user ? (
        <button onClick={signIn}>Log in with Google</button>
      ) : (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={signOut}>Log out</button>
          <h2>Assets</h2>
          <ul>
            {assets.map(asset => (
              <li key={asset.id}>{asset.name} – {asset.status}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
