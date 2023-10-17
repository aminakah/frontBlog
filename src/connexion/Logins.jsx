import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AccountService from '../service/AccountService';
// import { useHistory ,Link} from 'react-router-dom';
export default function 
() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // const history = useHistory();

    const handleLogin = () => {
       axios.post('http://127.0.0.1:8000/api/login', { email, password })
            .then((response) => { 
                AccountService.savetoken(response.data.access_token)
                // localStorage.setItem('token', response.data.access_token,response.data.user.id);
                setMessage('Connexion réussie');
              
               console.log(response.data);
               console.log(response.data.user.id);
                navigate('/articles');
            })
            .catch((error) => {
                setError('Échec de la connexion. Vérifiez vos informations d\'identification.');
                setMessage('');
            });
    };
  return (
    <div>
         <div className='container'>
            
                <h1>Bienvenue sur la page de connexion</h1>
                
                
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Adresse e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Mot de passe"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button className="btn mb-3 btn-success" onClick={handleLogin}>
                        Connexion
                    </button>
                    
                    <div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {message && <p>{message}</p>}
                    </div>
            
      

        </div>
        </div>
    );
    
  
}
