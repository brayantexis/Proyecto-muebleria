/* eslint-disable no-unused-vars */
import { useState } from "react"
import ContentLogin from "./assets/components/ContentLogin";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import "./assets/css/Login.css"
import './assets/css/footer.css'
import "./assets/css/header.css"


const Login = () => {
  
  const [dataUser, setDataUser] = useState(null);

  const getUser = async (user) => {
    try {
      const url = "http://localhost/muebleria-api/index.php/Api/Usuarios/login";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Ocurrio un error");
      }

      if (responseData != null || responseData != 1) {
        setDataUser(responseData.data);
        console.log(responseData.data.Nombre);

        localStorage.setItem("sesion", JSON.stringify(responseData.data));
        console.log(JSON.parse(localStorage.getItem("sesion")));

        window.location.href = "/Categorias";
      }

    } catch (err) {
      console.log(err.message);
      alert('Usuario no valido');
    } 
  }

  return (
    <>
      <Header/>
      <ContentLogin
        getUser={getUser}
      />
       {/* {redirectToCategories && <Redirect to="/Categorias" />} */}
        <Footer/>
    </>

  )
}

export default Login;