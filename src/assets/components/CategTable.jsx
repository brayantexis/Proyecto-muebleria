/* eslint-disable react/prop-types */
import CategTableRow from "./CategTableRow";

// eslint-disable-next-line react/prop-types
const CategTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div className="content_registro ver">
    <div className="content_titulo" id="cate">
         <h3  id="Titulo">Categorias Registradas</h3>
     </div>
     <div className="content_conte over">
     <table>
        <thead>
          <tr>
            <th>Codigo Categoria</th>
            <th>Tipo</th>
            <th>Fecha Alta</th>
            {JSON.parse(localStorage.getItem("sesion")).Puesto !== "Gerencia" ? 
                (<th>Acciones</th>) : null
            }
          </tr>
              </thead>
              <tbody>
                  {data && data.length > 0 ? (
                      data.map((el) => (
                      <CategTableRow
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

export default CategTable
