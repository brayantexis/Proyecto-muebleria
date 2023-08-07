/* eslint-disable react/prop-types */
import { useState } from "react";
import DataTable from "react-data-table-component";
import { CSVLink } from "react-csv";
import { Link } from 'react-router-dom';


const SalEntTable = ({ data, setDataToEdit, deleteData }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectedRowsChange = (state) => {
    setSelectedRows(state.selectedRows);
  };

  const csvHeaders = [
    { label: "Codigo Producto", key: "CodigoProducto" },
    { label: "Fecha Entrada", key: "FechaEntrada" },
    { label: "Fecha Salida", key: "FechaSalida" },
  ];

  const Headers = [
    { name: "Codigo Producto", selector: "CodigoProducto", sortable: true },
    { name: "Fecha Entrada", selector: "FechaEntrada", sortable: true },
    { name: "Fecha Salida", selector: "FechaSalida", sortable: true },
  ]

  const columnsPermission = [
     ...Headers,
    {
      name: "Acciones",
      cell: (row) => (
        <div>
          <button className="btn-editar" onClick={() => setDataToEdit(row)}>
            Editar
          </button>
          <button className="btn-eliminar" onClick={() => deleteData(row.id_Categoria)}>
            Eliminar
          </button>
        </div>
      ),
      ignoreRowClick: true,
    },
  ];

  const columns = JSON.parse(localStorage.getItem("sesion")).Puesto !== "Gerencia"
  ? columnsPermission
  : Headers;

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#af781e",
        fontSize: "16px",
        fontWeight: "bold",
        color: "white"
      },
    },
  };


  return (
    <div className="content_registro ver">
    <div className="content_titulo" id="SalEnt">
         <h3  id="Titulo">Sal/Ent Registradas</h3>
     </div>
     <div className="content_conte over">
     <div className="container-files">
          <div className="files-element">
           <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/></svg>
           <CSVLink data={selectedRows} headers={csvHeaders}>
           <h5>Descargar archivo CSV...</h5>
           </CSVLink>
          </div>       
        </div>
      <DataTable
        columns={columns}
        data={data}
        highlightOnHover
        pointerOnHover
        pagination
        paginationPerPage={10}
        noHeader
        striped
        responsive
        selectableRows
        onSelectedRowsChange={handleSelectedRowsChange}
        selectableRowsHighlight
        customStyles={customStyles}
        />
        <div className="container-graficos">
          <Link to="/Informes">
          <button className="btn-graficos">Visualizar Graficos</button>
          </Link>
        </div>
     </div>
 </div>
  )
}

export default SalEntTable
