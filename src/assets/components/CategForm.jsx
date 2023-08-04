import CategTable from './CategTable'
import { useState, useEffect } from 'react';

const initialForm = {
  id_Categoria: null,
  CodigoCategoria: "",
  Tipo: "",
  FechaAlta: "",
};

// eslint-disable-next-line react/prop-types
const CategForm = ({ createData, updateData, dataToEdit, setDataToEdit, deleteData, data }) => {
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
    
        if (!form.CodigoCategoria || !form.Tipo || !form.FechaAlta) {
          alert("Datos incompletos");
          return;
        }
    
        if (form.id_Categoria === null) {
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
                <div className="content_titulo" id="cate">
                    <h3>Categorias</h3>
                </div>
                <div className="content_conte">
                    <h4>{ dataToEdit? 'Editar Categoria:' : 'Nueva Categoria:'}</h4>
                    <form id="form" onSubmit={handleSubmit}>
                        <div className="form">
                            <div className="grupo" id="clave">
                                <input className="IDash" type="text" id="codigo" value={form.CodigoCategoria}
                                name="CodigoCategoria"
                                onChange={handleChange}
                                required/><span className="barra"></span>
                                <label className="LDash">Codigo de categoria</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="categoria" value={form.Tipo}
                                onChange={handleChange}
                                name="Tipo"
                                required/><span className="barra"></span>
                                <label className="LDash">Tipo de Categoria</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="date" id="fecha" value={form.FechaAlta}
                                name="FechaAlta"
                                onChange={handleChange}
                                required/><span className="barra"></span>
                            </div>
                            <div className="container-buttons">
                               <button type="submit" onClick={handleSubmit}>Registro</button>
                               <button type="submit" onClick={handleReset}>Limpiar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                <CategTable
                data={data}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData}
                />
        </div>
        </>
    )
}

export default CategForm;