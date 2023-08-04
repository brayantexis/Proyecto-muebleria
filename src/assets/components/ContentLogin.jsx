import {useState} from "react"

const initialForm = {
  Usuario: "",
  Contrasena: "",
};

// eslint-disable-next-line react/prop-types
const ContentLogin = ({getUser}) => {

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.Usuario || !form.Contrasena) {
      alert("Datos incompletos");
      return;
    }

    getUser(form);

  };
  
  return (
    <>
        <main id="mainLogin">
        <div id='conteLogin'>
            <h1>Inicio de sesión</h1>
            <form onSubmit={handleSubmit}>
            <label className="Llogin" htmlFor="userName"><img className="login" src="./src/assets/img/user_white.png" alt="" />
              <input type="text" name="Usuario" id="userName" placeholder="Username or email"
              onChange={handleChange} value={form.Usuario} /></label>
              <label className="Llogin" htmlFor="password"><img className="login" src="./src/assets/img/pass.png" alt="" />
              <input type="password" name="Contrasena" id="password" placeholder="Password" value={form.Contrasena} onChange={handleChange} /></label>
              <input type="submit" value="Ingresar" id="entrar" onClick={handleSubmit}/>             
            </form>
        </div>
        </main>
    </>
  )
}

export default ContentLogin;