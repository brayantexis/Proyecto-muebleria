//craación del contenido de login
const ContentLogin = () => {
  return (
    <>
        <main id="mainLogin">
        <div id='conteLogin'>
            <h1>Inicio de sesión</h1>
            <form action="">
                <label htmlFor="userName"><img className="login" src="./src/assets/img/user_white.png" alt="" /> <input type="text" name="" id="userName" placeholder="Username or email"/></label>
                <label htmlFor="password"><img className="login" src="./src/assets/img/pass.png" alt="" /> <input type="password" name="" id="password" placeholder="Password"/></label>
                <input type="submit" value="Ingresar" />
            </form>
        </div>
        </main>
    </>
  )
}

export default ContentLogin;