import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
        <h2>
        <Link to={`/`}>informaticaApi</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/`}>Categorias</Link>
            </li>
            <li>
                <Link to={`/new`} className="new-btn">Novo Produto</Link>
            </li>
            <li>
                <Link to={`/notebooks`} className="new-btn">Notebooks</Link>
            </li>
            <li>
                <Link to={`/perifericos`} className="new-btn">Periféricos</Link>
            </li>
            <li>    
                <Link to={`/smartphones`} className="new-btn">Smartphones</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar