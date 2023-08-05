
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
                  <button className="mod" onClick={() => setDataToEdit(el)}><img src="./src/assets/img/borrar.png"></img></button>
                  <button className="delete" onClick={() => deleteData(id_Categoria)}><img src="./src/assets/img/editar.png"></img></button>
              </td>
            ) : (
              null   
            )
            }
   </tr>
  )
}

export default CategTableRow
