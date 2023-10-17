import React,{useState,useEffect,useRef} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar'

export default function AjouterArticles() {


    // const [articles, setArticles] = useState([]);
    // const [displayArticles, setDisplayArticles] = useState([]);
    // const [loading, setLoading] = useState(false);
  
    // const titre = useRef();
    // const description = useRef();
    // const image = useRef();
   
  
    // useEffect(() => {
    //   getTodos();
    // }, []);
    // function randomID() {
    //     const min = 100000000;
    //     const max = 999999999;
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    //   }
    // const handleAdd = async (e) => {
        // e.preventDefault();
        // const n = titre.current.value;
        // const d = description.current.value;
        // const img = image.current.value;

        // if (titre === "") {
        //   alert("Merci de remplir le champs");
        //   return;
        // }
        // const url = "http://localhost:8080/api/v1/todos/save";
        // const todoToBeCreated = { id: randomID(), titre: n, description:d, image:img  };
    
        // await fetch(url, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(todoToBeCreated),
        // });
    
        // setTodos((prevTodos) => {
        //   return [...prevTodos, todoToBeCreated];
        // });
        // titre.current.value = null;
      // };


      
  return (
    <>
    <Navbar></Navbar>
       <div className='container'> AjouterArticles
<div className="form-floating mb-3">
  <input type="text" className="form-control"  ></input>
  <label for="floatingInputDisabled">Titre</label>
</div>

<div className="form-floating mb-3">
  <label for="floatingTextareaDisabled">Description</label>
  <input type="text" className="form-control"  ></input>
</div>
      <div className="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input  className="form-control"
              type="password"
              placeholder="Mot de passe"
              // value={titre}
              // onChange={(e) => setTitre(e.target.value)}
            />
        </div>

        <div className="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input  className="form-control"
              type="password"
              placeholder="Mot de passe"
              // value={description}
              // onChange={(e) => setDescription(e.target.value)}
            />
        </div>
        <button className="btn mb-3 btn-success" >Connexion</button>
        <Link className="btn mb-3 btn-primary"  to="/register">Mes Articles</Link>
</div>
    </>
  

  )
}
