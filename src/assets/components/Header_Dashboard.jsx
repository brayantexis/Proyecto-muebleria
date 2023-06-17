//Creación de el header para los dashboards
//metodo
import { Link } from "react-router-dom";
const Header_Dashboard = () => {
  return (
    <>
    <header id="nav">
        <div id="logo">
            <img src="./src/assets/img/sofa.png" alt=""/>
            <p>Nombre del usuario</p>
        </div>
        <nav id="menu">
            <ul id="line">
                <li><Link to="/Categorias">Categorias</Link></li>
                <li><Link to="/Producto">Productos</Link></li>
                <li><Link to="/SalEnt">Sal/ent</Link></li>
                <li><Link to="/Usuarios">Usuarios</Link></li>
                <li><Link to="/">Salir</Link></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header_Dashboard;