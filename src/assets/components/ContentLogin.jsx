import {useState} from "react"
//craación del contenido de login

let user; 

const ContentLogin = () => {

  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const obtener = (e) => {
    e.preventDefault();
    // let api = fetch(URL)
    if(Username === "jahir" && password === "12345"){
      user = {
        nombre : Username,
        passw : password,
        status : "Gerencia"
      }      
      // window.location.href = "http://localhost:5173/Categorias";
      localStorage.setItem("sesion", JSON.stringify(user));
      console.log( JSON.parse(localStorage.getItem("sesion")).status)
      // console.log( (await api).json())
      history.pushState(null, null, "Categorias");
      history.go();
    }
    else{
      alert("usuario no encontrado")
    }
  };


  return (
    <>
        <main id="mainLogin">
        <div id='conteLogin'>
            <h1>Inicio de sesión</h1>
            <form onSubmit={obtener}>
                <label className="Llogin" htmlFor="userName"><img className="login" src="./src/assets/img/user_white.png" alt="" /> <input type="text" name="" id="userName" placeholder="Username or email" value={Username} onChange={
                  (e) => {
                    setUsername(e.target.value);
                  }
                }/></label>
                <label className="Llogin" htmlFor="password"><img className="login" src="./src/assets/img/pass.png" alt="" /> <input type="password" name="" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/></label>
                {/* <Link to="/Usuarios"></Link> */}
                <input type="submit" value="Ingresar" id="entrar"/>             
            </form>
        </div>
        </main>
    </>
  )
}

export default ContentLogin;