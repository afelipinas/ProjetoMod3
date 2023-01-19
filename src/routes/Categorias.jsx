import blogFetch from '../server/api';

import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import "./Categorias.css"

const categorias = () => {
  const [categ, setCateg] = useState([])

  const getCateg = async() => {
    
    try {

      const response = await blogFetch.get("/Categorias")
      
      const data = response.data;

      setCateg(data);
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    getCateg();

  }, []);

  return (
    <div className='home'>
      <h1>Categorias</h1>
      {categ.length === 0 ? (<span className="loader"></span>) : (
        categ.map((pcateg) => (
          <div className="pcateg" key={pcateg.id}>
            <h2>{pcateg.nome}</h2>
            <img className='imgs' src={pcateg.imagem} alt="" />
            <p>{pcateg.corpo}</p>
            <Link to={`/${pcateg.nome}`} className="btn" >Ver Produtos</Link>
          </div>
        ))
      )}
    </div>
  )
}

export default categorias