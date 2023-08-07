import { useState, useEffect } from "react"
import "./assets/css/style_Dashboard.css"
import "./assets/css/footer.css"
import "./assets/css/Dasboard.css"
import Header_Dashboard from "./assets/components/Header_Dashboard"
import SalEntForm from "./assets/components/SalEntForm"
import Footer from "./assets/components/Footer"
import { Navigate } from "react-router-dom"


const SalEnt = () => {
  //variable para editar los datos de las Salidas/Entradas
  const [dataToEdit, setDataToEdit] = useState(null);
  //variable que almacena lps datos recibidos de la BD
  const [data, setData] = useState([]);

  //Carga de datos de la base de datos a la variable useState "data"
  const reloadData = async () => {
    try {
      const response = await fetch("http://localhost:8080/ApiFinal/muebleria-api/index.php/Api/SalidasEntradas");
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

  //Creacion de nueva Salida/Entrada haciendo uso de fetch asincrono para la peticion POST
  const createData = async (data) => {
    try {
      const url = "http://localhost:8080/ApiFinal/muebleria-api/index.php/Api/SalidasEntradas";
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Ocurrio un error");
      }
      reloadData();
      console.log(responseData);

    } catch (err) {
      console.log(err.message);
    } 
  }

  //Actualizacion de Salidas/Entradas haciendo uso de fetch asincrono para la peticion PUT
  const updateData = async (data) => {
    try {
      const url = `http://localhost:8080/ApiFinal/muebleria-api/index.php/Api/SalidasEntradas/${data.id_SalEntrada}`;
      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const response = await fetch(url, options);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Ocurrio un error");
      }
      reloadData();
      console.log(responseData);
    } catch (err) {
      console.log(err.message);
    } 
  }

  //Eliminación de Salida/Entrada haciendo uso de fetch asincrono para la peticion DELETE
  const deleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/ApiFinal/muebleria-api/index.php/Api/SalidasEntradas/${id}`, {
          method: "DELETE"
      });
      
      if (response.ok) {
        console.log(`Salida/Entrada con el ${id} eliminado`);
        reloadData();
      } else {
          console.error("Error al eliminar la Salida/Entrada.");
      }
   } catch (error) {
     console.error("Error de red:", error);
   }
  }

  useEffect(() => {
    reloadData();
  }, []);

//Se envia los datos y los metodos del CRUD por medio de las props(propiedades) a componentes hijos
  return (
    <>
      {
      JSON.parse(localStorage.getItem("sesion")).Puesto !== "operador de almacen"?
        <>
        <Header_Dashboard />
            <SalEntForm
               data={data}
               createData={createData}
               updateData={updateData}
               dataToEdit={dataToEdit}
               setDataToEdit={setDataToEdit}
               deleteData={deleteData}
            />
        <Footer />
        </>:
      <Navigate to="/Categorias"/>
    }
    </>
    
  )
}

export default SalEnt;