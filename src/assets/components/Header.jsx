
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
                  <li><a href="#">Home</a></li>
              </ul>
          </nav>
          <div className="btn-login">
              <a href="">Inicio de sesión</a>
          </div>
      </header>
        </>
    )
  }
  
  export default Header