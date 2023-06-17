import Footer from './assets/components/Footer'
import Categorias from './assets/components/Categorias'
import './assets/css/categorias-style.css'
import "./assets/css/style_Dashboard.css"
import "./assets/css/footer.css"

import Header_Dashboard from './assets/components/Header_Dashboard'

const Categoria = () => {
  return (
    <>
      <Header_Dashboard />
      <Categorias />
      <Footer/>
    </>
  )
}

export default Categoria;
