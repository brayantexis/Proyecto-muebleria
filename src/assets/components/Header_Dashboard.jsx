//Creación de el header para los dashboards
//metodo
import { Link } from "react-router-dom";
const Header_Dashboard = () => {

  const check = () => {
    switch(JSON.parse(localStorage.getItem("sesion")).status){
      case "Administrador":
        return (
          <>
                <li><Link to="/Categorias">Categorias</Link></li>
                <li><Link to="/Producto">Productos</Link></li>
                <li><Link to="/SalEnt">Sal/ent</Link></li>
                <li><Link to="/Usuarios">Usuarios</Link></li>
                <li><Link to="/">Salir</Link></li>
          </>
        )
      case "Operador de almacen":
        return(
          <>
                <li><Link to="/Categorias">Categorias</Link></li>
                <li><Link to="/Producto">Productos</Link></li>
                <li><Link to="/">Salir</Link></li>
          </>
        )
      case "jefe de almacen":
        return(
          <>
                <li><Link to="/Categorias">Categorias</Link></li>
                <li><Link to="/Producto">Productos</Link></li>
                <li><Link to="/SalEnt">Sal/ent</Link></li>
                <li><Link to="/">Salir</Link></li>
          </>
        )
      case "Gerencia":
        return(
          <>
                <li><Link to="/Categorias">Categorias</Link></li>
                <li><Link to="/Producto">Productos</Link></li>
                <li><Link to="/SalEnt">Sal/ent</Link></li>
                <li><Link to="/">Salir</Link></li>
          </>
        )
    }
  }

  return (
    <>
    <header id="nav">
        <div id="logo">
            <img src="./src/assets/img/sofa.png" alt=""/>
            <p>Nombre del usuario</p>
        </div>
        <nav id="menu">
            <ul id="line">
                {/* <li><Link to="/Categorias">Categorias</Link></li>
                <li><Link to="/Producto">Productos</Link></li>
                <li><Link to="/SalEnt">Sal/ent</Link></li>
                <li><Link to="/Usuarios">Usuarios</Link></li>
                <li><Link to="/">Salir</Link></li> */}
                {
                  check()
                }
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header_Dashboard;