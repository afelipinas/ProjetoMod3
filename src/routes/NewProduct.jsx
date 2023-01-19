import blogFetch from "../server/api";

import { useState } from "react";

import { useNavigate } from 'react-router-dom';

import './NewProduct.css';

const newProduct = () => {
    const navigate = useNavigate()
    const [produto, setProduto] = useState()
    const [preco, setPreco] = useState()
    const [imagem, setImagem] = useState()
    const [categoriaId, setcategoriaId] = useState()
    

  //função
  const createProduto = async (e) => {
    e.preventDefault()
    const post = {produto,preco,imagem,categoriaId};

    await blogFetch.post(`/${categoriaId}`,post);
    navigate("/")
  }


  return (
    <div className="new-post">
      <h2>Inserir novo produto:</h2>
      <form onSubmit={(e) => createProduto(e)}>
        {/* produto */}
        <div className="form-control">
          <label htmlFor="produto">Nome do Produto:</label>
          <input type="text" 
          id='title' 
          name="produto" 
          placeholder='Digite o nome do seu produto' 
          onChange={(e) => setProduto(e.target.value)} />
        </div>

        {/* preço */}
        <div className="form-control">
          <label htmlFor="preco">Preço:</label>
          <input type="text" 
          id='preco' 
          name="preco" 
          placeholder='Digite o preço do seu produto'
          onChange={(e) => setPreco(e.target.value)} />
        </div>
        <div className="form-control">

          {/* imagem */}
          <label htmlFor="imagem">Imagem:</label>
          <input type="url" 
          id='imagem' 
          name="imagem" 
          placeholder='Digite a URL da imagem do seu produto'
          onChange={(e) => setImagem(e.target.value)}  />
        </div>
        <div className="form-control">

          {/* categoria */}
          <label htmlFor="categoriaId">Categoria:</label>
          <input type="text" 
          id='categoriaId' 
          name="categoriaId" 
          placeholder='Digite a categoria do seu produto com a inicial maiúscula'
          onChange={(e) => setcategoriaId(e.target.value)}  />
        </div>

        {/* botão */}
        <input type="submit" value="Adicionar" className='btn' />
      </form>
    </div>
  )
}

export default newProduct