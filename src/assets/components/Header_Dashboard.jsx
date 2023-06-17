//Creación de el header para los dashboards

//metodo
const mostrar = () => {
  const men = document.getElementById("line");
  const im = document.getElementById("menMovil");
  const then = document.getElementById("delMovil");
  men.style.display = "flex";
  im.style.display = "none";
  then.style.display = "block";
}
const eliminar = () => {
  const men = document.getElementById("line");
  const im = document.getElementById("menMovil");
  const then = document.getElementById("delMovil");
  men.style.display = "none";
  im.style.display = "block";
  then.style.display = "none";
}
const Header_Dashboard = () => {
  return (
    <>
    <header id="nav">
        <div id="logo">
            <img src="./src/assets/img/sofa.png" alt=""/>
            <p>Nombre del usuario</p>
        </div>
        <nav id="menu">
          <img id="delMovil" onClick={() => eliminar()} src="./src/assets/img/cruz.png" alt="" />
          <img id="menMovil" onClick={() => mostrar()} src="./src/assets/img/menu.png" alt="" />
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