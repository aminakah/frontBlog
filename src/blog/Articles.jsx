
import { useEffect, useRef, useState } from "react";
import "../App.css";
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'

function Articles() {
  const [articles, setArticles] = useState([]);
  const [displayArticles, setDisplayArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const input = useRef();

  useEffect(() => {
    getTodos();
  }, []);

 
  async function getTodos() {
    setLoading(true);
    const url = "http://127.0.0.1:8000/api/posts";
    const data = await fetch(url,);
    const response = await data.json();
    setArticles(response);
    setDisplayArticles(response);
    setLoading(false);
  }
  
  return (
    <>
     <Navbar></Navbar> 
    <div className="container">
        <Link   to="/ajoutArticle">Ajouter un Post</Link>
        
      <h1 className="text-white">Liste d'articles</h1>
      <div className="card" >
      <div className="card-body">
        {articles.map(article => (
          <div key={article.id}>
            <h5 className="card-title">{article.titre}</h5>
            <p className="card-text">{article.description}</p>
            <p>{article.user_id}</p>
          </div>
        ))}
      
      </div>
      </div>
     
      
    </div>
    </>
  );
}

export default Articles;
