/* eslint-disable react/prop-types */
import ProductTableRow from './ProductTableRow'
// eslint-disable-next-line react/prop-types
const ProductTable = ({data, setDataToEdit, deleteData}) => {
  return (
    <div className="content_registro ver">
    <div className="content_titulo" id="producto">
            <h3>Productos Registrados</h3>
    </div>
        <div className="content_conte over">
        <table>
        <thead>
          <tr>
            <th>Codigo Producto</th>
            <th>Categoria</th>
            <th>Marca</th>
            <th>Nombre</th>
            <th>Piezas</th>
            <th>Color</th>
            <th>Material</th>
            <th>Unidades</th>
            <th>Dimensiones</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Fecha Alta</th>
            <th>Fotografia</th>
            {JSON.parse(localStorage.getItem("sesion")).Puesto !== "Gerencia" ? 
                (<th>Acciones</th>) : null
            }
          </tr>
              </thead>
              <tbody>
                  {data && data.length > 0 ? (
                      data.map((el) => (
                      <ProductTableRow
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

export default ProductTable
