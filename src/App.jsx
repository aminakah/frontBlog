import React from 'react'
import { Route, Routes } from "react-router-dom";

import Register from './connexion/Register'
import Articles from './blog/Articles';
import AjouterArticles from './blog/AjouterArticles';
import Logins from './connexion/Logins';
import Dashboard from './Dashboard';

function App() {
  
  
  return (
    <div>
      {/* <Logins></Logins> */}
      {/* <Posts></Posts> */}
      {/* <Navbar></Navbar> */}
      <Routes>
      <Route path="/connexion" element={<Logins />} />
      <Route path="/register" element={<Register />} />
      <Route path="/articles" element={<Articles/>} />
      <Route path='/ajoutArticle' element={<AjouterArticles/>}/>
      <Route path='/dash' element={<Dashboard/>}/>
      
    </Routes>
    </div>
  )
}

export default App