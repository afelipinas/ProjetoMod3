import blogFetch from "../server/api";

import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import "./Notebooks.css";

const notebooks = () => {
  const [noteb, setNoteb] = useState([])

  const getNoteb = async() => {
    
    try {

      const response = await blogFetch.get("/Notebooks")
      
      const data = response.data;

      setNoteb(data);
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    getNoteb();

  }, []);

//Requisição Deletar

const deleteProduto = async (id) => {

  

  await blogFetch.delete(`/Notebooks/${id}`)
    .then(
      alert("Item deletado!"),
      navigate("/Notebooks")
    )
    .catch((error) => {
      console.log(error)
    })
  } 


  return (
    <div className='home'>
      <h1>Notebooks</h1>
      {noteb.length === 0 ? (<span className="loader"></span>) : (
        noteb.map((pnoteb) => (
          <div className="pnoteb" key={pnoteb.id}>
            <img className='imgs' src={pnoteb.imagem} alt="" />
            <h2>{pnoteb.produto}</h2>            
            <p>R$ {pnoteb.preco}</p>
            <div className="divbtn">
            <div>
              <button className="btn"><Link className="btnedit" to={`/EditarProduto/${pnoteb.id}`}> Editar Produto</Link></button>
            {/* <Link to={`/`} className="btn">Editar Produto</Link> */}
            </div>
            <div>
              <button onClick={() => deleteProduto(pnoteb.id)} className="btn">Excluir Produto</button>
            {/* <Link to={`/`} className="btn">Excluir Produto</Link> */}
            </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default notebooks