/* eslint-disable react/prop-types */

const ProductTableRow = ({ el, setDataToEdit, deleteData }) => {
    let { id_Producto,
        CodigoProducto,
        Categoria,
        Marca,
        NombreProducto,
        Piezas,
        Color,
        Material,
        Unidades,
        Dimensiones,
        Precio,
        Descripcion,
        FechaAlta, Fotografia } = el;
  return (
  <tr>
    <td>{CodigoProducto}</td>
    <td>{Categoria}</td>
    <td>{Marca}</td>
    <td>{NombreProducto}</td>
    <td>{Piezas}</td>
    <td>{Color}</td>
    <td>{Material}</td>
    <td>{Unidades}</td>
    <td>{Dimensiones}</td>
    <td>{Precio}</td>
    <td>{Descripcion}</td>
    <td>{FechaAlta}</td>
    <td>{Fotografia}</td>
      {JSON.parse(localStorage.getItem("sesion")).Puesto !== "Gerencia" ? (
        <td>
            <button className="mod" onClick={() => setDataToEdit(el)}><img src="./src/assets/img/editar.png"></img></button>
            <button className="delete" onClick={() => deleteData(id_Producto)}><img src="./src/assets/img/borrar.png"></img></button>
        </td>
      ) : (
        null   
      )
      }
   </tr>
  )
}

export default ProductTableRow
