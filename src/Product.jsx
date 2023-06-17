import Productos from './assets/components/Productos'
import Footer from './assets/components/Footer'
import Header_Dashboard from './assets/components/Header_Dashboard'
import "./assets/css/style_Dashboard.css"
import "./assets/css/footer.css"
import "./assets/css/Dasboard.css"
const Product = () =>{
    return(
        <>
         <Header_Dashboard />
         <Productos />
         <Footer />
        </>
    )
}

export default Product;