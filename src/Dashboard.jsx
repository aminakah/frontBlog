
import React, { useState, useEffect } from 'react';
function Dashboard() {
  const [user, setUser] = useState(null);

  // Effectuez une requête à l'API backend pour récupérer les informations de l'utilisateur.
  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      axios.get('http://127.0.0.1:8000/api/listeUser', { headers: { Authorization: `Bearer ${authToken}` } })
        .then(response => {
          setUser(response.data);
        })
        .catch(error => {
          console.error(error);
          // Gérez les erreurs de récupération des informations de l'utilisateur ici.
        });
    }
  }, []);
  return (
    <div>
      <h2>Tableau de Bord</h2>
      {user && (
        <div>
          <p>Nom complet: {user.fullName}</p>
          <p>Nom d'utilisateur: {user.username}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
