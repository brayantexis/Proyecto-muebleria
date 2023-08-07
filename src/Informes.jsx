import Footer from "./assets/components/Footer"
import Header_Dashboard from "./assets/components/Header_Dashboard"
import { useState, useEffect } from "react"
import InfoGraficos from "./assets/components/InfoGraficos";
import "./assets/css/style_Dashboard.css"
import "./assets/css/footer.css"
import "./assets/css/Dasboard.css"

const Informes = () => {
    const [data, setData] = useState([]);
    const [Product, setProduct] = useState([]);
     //Carga de datos de la base de datos a la variable useState "data"
  const reloadData = async () => {
    try {
      const response = await fetch("http://localhost/muebleria-api/index.php/Api/SalidasEntradas");
      if (response.ok) {
        const newData = await response.json();
        setData(newData);
      } else {
        console.error("Error al obtener los datos.");
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
};
    
    const reloadDataProduct = async () => {
        try {
          const response = await fetch("http://localhost/muebleria-api/index.php/Api/Productos");
          if (response.ok) {
            const newData = await response.json();
            setProduct(newData);
          } else {
            console.error("Error al obtener los datos.");
          }
        } catch (error) {
          console.error("Error de red:", error);
        }
    };
    
    useEffect(() => {
        reloadData();
        reloadDataProduct();
      }, []);

  return (
    <>
          <Header_Dashboard />
          <InfoGraficos
              data={data}
              Product={Product}/>
          <Footer/>
    </>
  )
}

export default Informes
