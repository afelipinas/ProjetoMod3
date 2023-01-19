import blogFetch from "../server/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./EditarProduto.css";

const Edits = () => {
const navigate = useNavigate()
const {id} = useParams()
const [produto, setProduto] = useState()
const [preco, setPreco] = useState()
const [imagem, setImagem] = useState()
const [categoriaId, setcategoriaId] = useState()

const[prods, setProds] = useState([])
useEffect(() =>{

    const getProd = async () =>{
        await blogFetch.get(`/${categoriaId}/${id}`)
        .then((data) => {
            setProds(data.data);
            console.log(data.data)
        })
        console.log(prods)
    }
    getProd()

},[])

const createPatch = async (e) => {
    e.preventDefault()

    await blogFetch.put(`/${categoriaId}/${id}`,{
        produto: produto,
        preco: preco,
        imagem: imagem,
        categoriaId: categoriaId,
    })
    .then((sucesso) => { console.log(sucesso)
    navigate("/")})

}


return (
    <div className="new-edit">
    <h2>Editar Produto</h2>
    <form onSubmit={(e) => createPatch(e)}>
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

export default Edits