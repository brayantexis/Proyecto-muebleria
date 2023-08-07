
import { useState, useEffect } from "react"
import UsuariosForm from './assets/components/UsuariosForm';
import Footer from './assets/components/Footer';
import Header_Dashboard from './assets/components/Header_Dashboard';
import "./assets/css/style_Dashboard.css"
import "./assets/css/Dasboard.css"

const Dashboard_users = () => {
    //variable para editar los datos de usuarios
  const [dataToEdit, setDataToEdit] = useState(null);
  //variable que almacena lps datos recibidos de la BD
  const [data, setData] = useState([]);

    //Carga de datos de la base de datos a la variable useState "data"
  const reloadData = async () => {
    try {
      const response = await fetch("http://localhost/muebleria-api/index.php/Api/Usuarios");
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

  //Creacion de nueva usuarios haciendo uso de fetch asincrono para la peticion POST
  const createData = async (data) => {
    try {
      const url = "http://localhost/muebleria-api/index.php/Api/Usuarios";
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

 //Actualizacion de usuarios haciendo uso de fetch asincrono para la peticion PUT
  const updateData = async (data) => {
    try {
      const url = `http://localhost/muebleria-api/index.php/Api/Usuarios/${data.id_Categoria}`;
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

  
  //Eliminación de usuarios haciendo uso de fetch asincrono para la peticion DELETE
  const deleteData = async (id) => {
    try {
      const response = await fetch(`http://localhost/muebleria-api/index.php/Api/Usuarios/${id}`, {
          method: "DELETE"
      });
      
      if (response.ok) {
        console.log(`usuario con el ${id} eliminado`);
        reloadData();
      } else {
          console.error("Error al eliminar el usuario.");
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
      <Header_Dashboard/>
      <UsuariosForm
       data={data}
       createData={createData}
       updateData={updateData}
       dataToEdit={dataToEdit}
       setDataToEdit={setDataToEdit}
       deleteData={deleteData}
      />
      <Footer/>
    </>
  )
}

export default Dashboard_users;