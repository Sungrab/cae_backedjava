import React, { useState, useEffect } from "react";
import LoginPage from "./login/Login";  

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ username: "Utilisateur" }); // Tu peux améliorer avec une requête API
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div>
      <h1>Mon application</h1>
      {user ? (
        <div>
          <p>Tu es connecté en tant que {user.username}</p>
          <button onClick={handleLogout}>Se déconnecter</button>
        </div>
      ) : (
        <LoginPage onLogin={setUser} />
      )}
    </div>
  );
};

export default App;