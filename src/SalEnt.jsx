import "./assets/css/style_Dashboard.css"
import "./assets/css/footer.css"
import "./assets/css/Dasboard.css"
import Header_Dashboard from "./assets/components/Header_Dashboard"
import ContentSalEnt from "./assets/components/ContentSalEnt"
import Footer from "./assets/components/Footer"


const SalEnt = () => {
  return (
    <>
        <Header_Dashboard/>
        <ContentSalEnt/>        
        <Footer/>
    </>
  )
}

export default SalEnt;