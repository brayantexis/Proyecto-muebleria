//Creación de el header para los dashboards
//metodo
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
                <li><a href="#">Categorias</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Sal/ent</a></li>
                <li><a href="#">Usuarios</a></li>
                <li><a href="#">Salir</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header_Dashboard;