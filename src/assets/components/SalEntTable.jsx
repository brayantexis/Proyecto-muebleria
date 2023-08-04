/* eslint-disable react/prop-types */
import SalEntTableRow from "./SalEntTableRow"

const SalEntTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div className="content_registro ver">
    <div className="content_titulo" id="SalEnt">
         <h3  id="Titulo">Sal/Ent Registradas</h3>
     </div>
     <div className="content_conte over">
     <table>
        <thead>
          <tr>
            <th>Codigo Producto</th>
            <th>Fecha Salida</th>
            <th>Fecha Entrada</th>
            {JSON.parse(localStorage.getItem("sesion")).Puesto !== "Gerencia" ? 
                (<th>Acciones</th>) : null
            }
          </tr>
              </thead>
              <tbody>
                  {data && data.length > 0 ? (
                      data.map((el) => (
                      <SalEntTableRow
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

export default SalEntTable
