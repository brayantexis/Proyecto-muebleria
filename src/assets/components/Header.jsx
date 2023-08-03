import { Link } from "react-router-dom";

//Creacion del componente header
const Header = () => {
  return (
      <>
      <header className="segmento">
        <div className="logo">
            <img src="./src/assets/img/sofa.png" alt=""/>
            <p>Desktop shoppy</p>
        </div>
        <nav className="menu">
            <ul>
            <Link id="home" to="/">Home</Link>
            </ul>
        </nav>
        <div className="btn-login">
            <Link to="/Login">Inicio de sesión</Link>
        </div>
    </header>
      </>
  )
}

export default Header
