/* eslint-disable react/prop-types */
import UsuariosTableRow from "./UsuariosTableRow"

const UsuariosTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div className="content_registro ver">
    < div className="content_titulo">
         <h3>Usuarios Registrados</h3>
     </div>
     <div className="content_conte over">
     <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Fotografia</th>
            <th>Usuarios</th>
            <th>Password</th>
            <th>Fecha Registro</th>
            {JSON.parse(localStorage.getItem("sesion")).Puesto !== "Gerencia" ? 
                (<th>Acciones</th>) : null
            }
          </tr>
              </thead>
              <tbody>
                  {data && data.length > 0 ? (
                      data.map((el) => (
                      <UsuariosTableRow
                          key={el.id_Categoria}
                          el={el}
                          setDataToEdit={setDataToEdit}
                          deleteData={deleteData}
                      />
                    ))
                  ) : (
                        <tr>
                              <td colSpan="4">No hay datos en BD</td>
                        </tr>
                  )
                }
              </tbody>
        </table>
     </div>
   </div>
  )
}

export default UsuariosTable
