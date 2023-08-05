/* eslint-disable react/prop-types */
const UsuariosTableRow = ({ el, setDataToEdit, deleteData }) => {

    let { ClaveEmpleado, Nombre, Puesto, Fotografia, Usuario, Contrasena, FechaRegistro } = el;

  return (
       <tr>
          <td>{Nombre}</td>
          <td>{Puesto}</td>
          <td>{Fotografia}</td>
          <td>{Usuario}</td>
          <td>{Contrasena}</td>
          <td>{FechaRegistro}</td>
            {JSON.parse(localStorage.getItem("sesion")).Puesto !== "Gerencia" ? (
              <td>
                  <button className="mod" onClick={() => setDataToEdit(el)}><img src="./src/assets/img/editar.png"></img></button>
                  <button className="delete" onClick={() => deleteData(ClaveEmpleado)}><img src="./src/assets/img/borrar.png"></img></button>
              </td>
            ) : (
              null   
            )
            }
      </tr>
  )
}

export default UsuariosTableRow
