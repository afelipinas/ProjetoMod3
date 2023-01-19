import blogFetch from "../server/api";

import { useState, useEffect } from 'react';



import { Link } from "react-router-dom";

import "./Smartphones.css";



const smartphones = () => {
  const [smart, setSmart] = useState([])

  const getSmart = async() => {
    
    try {

      const response = await blogFetch.get("/Smartphones")
      
      const data = response.data;

      setSmart(data);
      
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(()=>{
    getSmart();

  }, []);

//Requisição Deletar

const deleteProduto = async (id) => {

  

await blogFetch.delete(`/Smartphones/${id}`)
  .then(
    alert("Item deletado!"),
    navigate("/Smartphones")
  )
  .catch((error) => {
    console.log(error)
  })
}


  return (
    <div className='home'>
      <h1>Smartphones</h1>
      {smart.length === 0 ? (<span className="loader"></span>) : (
        smart.map((psmart) => (
          <div className="psmart" key={psmart.id}>
            <img className='imgs' src={psmart.imagem} alt="" />
            <h2>{psmart.produto}</h2>            
            <p>R$ {psmart.preco}</p>
            <div className="divbtn">
            <div>
              <button className="btn"><Link className="btnedit" to={`/EditarProduto/${psmart.id}`}> Editar Produto</Link></button>
            {/* <Link to={`/`} className="btn">Editar Produto</Link> */}
            </div>
            <div>
            <button onClick={() => deleteProduto(psmart.id)} className="btn">Excluir Produto</button>
            {/* <Link onClick={(e) => deleteProduto(e)} className="btn">Excluir Produto</Link> */}
            </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}

export default smartphones