/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import SalEntTable from "./SalEntTable";

const initialForm = {
    id_SalEntrada: null,
    CodigoProducto: "",
    FechaSalida: "",
    FechaEntrada: "",
  };

const ContentSalEnt = ({ createData, updateData, dataToEdit, setDataToEdit, deleteData, data }) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) {
          setForm(dataToEdit);
        } else {
          setForm(initialForm);
        }
      }, [dataToEdit])
    
      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!form.CodigoProducto || !form.FechaSalida || !form.FechaEntrada) {
          alert("Datos incompletos");
          return;
        }
    
        if (form.id_SalEntrada === null) {
          createData(form);
        } else {
          updateData(form);
        }
    
        handleReset();
      };
    
      const handleReset = () => {
        setForm(initialForm);
        setDataToEdit(null);
      };

  return (
        <>
            <div className="content">
            <div className="content_registro nuevo">
                <div className="content_titulo" id="SalEnt">
                    <h3>Salidas / Entradas</h3>
                </div>
                <div className="content_conte">
                    <h4>{ dataToEdit? 'Editar Entrada/Salida:' : 'Nueva Entrada/Salida:'}</h4>
                    <form action="" onSubmit={handleSubmit} id="form">
                        <div className="form">
                            <div className="grupo" id="clave">
                                <input className="IDash" type="text" id="CodigoProducto" value={form.CodigoProducto} name='CodigoProducto' onChange={handleChange} required/><span className="barra"></span>
                                <label className="LDash">Codigo de Productos</label>
                            </div>
                            <div className="grupo">
                                  <input className="IDash" type="date" id="FechaSalida" value={form.FechaEntrada} name='FechaEntrada' onChange={handleChange} required /><span className="barra"></span>
                                  <label className="LDash">Fecha de Entrada</label>
                            </div>
                            <div className="grupo">
                                  <input className="IDash" type="date" id="FechaEntrada" value={form.FechaSalida} name='FechaSalida' onChange={handleChange} required /><span className="barra"></span>
                                  <label className="LDash">Fecha de Salida</label>
                            </div>
                            <div className="container-buttons">
                               <button type="submit" onClick={handleSubmit}>Registro</button>
                               <button type="submit" onClick={handleReset}>Limpiar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
              <SalEntTable
               data={data}
               setDataToEdit={setDataToEdit}
               deleteData={deleteData}/>
        </div>
        </>
    )
}

export default ContentSalEnt;