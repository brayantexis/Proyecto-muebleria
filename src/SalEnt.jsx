import "./assets/css/style_Dashboard.css"
import "./assets/css/footer.css"
import "./assets/css/Dasboard.css"
import Header_Dashboard from "./assets/components/Header_Dashboard"
import ContentSalEnt from "./assets/components/ContentSalEnt"
import Footer from "./assets/components/Footer"
import { Navigate } from "react-router-dom"


const SalEnt = () => {
  return (
    <>
      {
      JSON.parse(localStorage.getItem("sesion")).status !== "Operador de almacen"?
        <>
        <Header_Dashboard />
        <ContentSalEnt />
        <Footer />
        </>:
      <Navigate to="/Categorias"/>
    }
    </>
    
  )
}

export default SalEnt;