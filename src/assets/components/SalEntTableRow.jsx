/* eslint-disable react/prop-types */

const SalEntTableRow = ({ el, setDataToEdit, deleteData }) => {

    let { id_SalEntrada	, CodigoProducto, FechaSalida, FechaEntrada } = el;
    
  return (
    <tr>
    <td>{CodigoProducto}</td>
    <td>{FechaSalida}</td>
    <td>{FechaEntrada}</td>
      {JSON.parse(localStorage.getItem("sesion")).Puesto !== "Gerencia" ? (
        <td>
            <button className="mod" onClick={() => setDataToEdit(el)}>Editar</button>
            <button className="delete" onClick={() => deleteData(id_SalEntrada)}>Eliminar</button>
        </td>
      ) : (
        null   
      )
      }
</tr>
  )
}

export default SalEntTableRow
