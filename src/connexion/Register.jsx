// frontend/src/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  
  const handleRegister = () => {
    axios.post('http://127.0.0.1:8000/api/register', { name,email, password })
      .then((response) => {
        // Stockez le token d'authentification dans le stockage local ou les cookies.
        localStorage.setItem('token', response.data.access_token);
        setMessage('Inscription réussie');
        
      })
      .catch((error) => {
        setMessage('Échec de la connexion');
      });
  };

  return (
    <div className='container'>
      <form action="">
      <h1>Inscription</h1>

      <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input className="form-control"
          type="text"
          placeholder="Nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="text" className="form-control"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="password" className="form-control"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button className="btn mb-3 btn-success" onClick={handleRegister}>S'inscrire</button>
        <div>
        <p>{message}</p>
      </div>
      </form>
      
    </div>
  );
};

export default Register;
