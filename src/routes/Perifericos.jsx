import blogFetch from "../server/api";

import { useState, useEffect } from 'react';



import { Link } from "react-router-dom";

import "./Perifericos.css";



const perifericos = () => {
  const [perif, setPerif] = useState([])

  const getPerif = async() => {
    
    try {

      const response = await blogFetch.get("/Perifericos")
      
      const data = response.data;

      setPerif(data);
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    getPerif();

  }, []);

//Requisição Deletar

const deleteProduto = async (id) => {

  

await blogFetch.delete(`/Perifericos/${id}`)
  .then(
    alert("Item deletado!"),
    navigate("/Perifericos")
  )
  .catch((error) => {
    console.log(error)
  })
}  


  return (
    <div className='home'>
      <h1>Perifericos</h1>
      {perif.length === 0 ? (<span className="loader"></span>) : (
        perif.map((pperif) => (
          <div className="pperif" key={pperif.id}>
            <img className='imgs' src={pperif.imagem} alt="" />
            <h2>{pperif.produto}</h2>            
            <p>R$ {pperif.preco}</p>
            <div className="divbtn">
            <div>
              <button className="btn"><Link className="btnedit" to={`/EditarProduto/${pperif.id}`}> Editar Produto</Link></button>
            {/* <Link to={`/`} className="btn">Editar Produto</Link> */}
            </div>
            <div>
            <button onClick={() => deleteProduto(pperif.id)} className="btn">Excluir Produto</button>
            {/* <Link to={`/`} className="btn">Excluir Produto</Link> */}
            </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default perifericos