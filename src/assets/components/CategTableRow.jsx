
// eslint-disable-next-line react/prop-types
const CategTableRow = ({ el, setDataToEdit, deleteData }) => {

    // eslint-disable-next-line react/prop-types
    let { id_Categoria, CodigoCategoria, Tipo, FechaAlta } = el;

    return (
        <tr>
          <td>{CodigoCategoria}</td>
          <td>{Tipo}</td>
          <td>{FechaAlta}</td>
            {JSON.parse(localStorage.getItem("sesion")).Puesto !== "Gerencia" ? (
              <td>
                  <button className="mod" onClick={() => setDataToEdit(el)}>Editar</button>
                  <button className="delete" onClick={() => deleteData(id_Categoria)}>Eliminar</button>
              </td>
            ) : (
              null   
            )
            }
   </tr>
  )
}

export default CategTableRow