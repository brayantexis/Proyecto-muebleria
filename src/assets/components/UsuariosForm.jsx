/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import UsuariosTable from './UsuariosTable';

const initialForm = {
    ClaveEmpleado: null,
    Nombre: "",
    Puesto: "",
    Fotografia: "",
    Usuario: "",
    Contrasena: "",
    FechaRegistro: new Date().toISOString(),
};
  
const ContentUsuarios = ({ createData, updateData, dataToEdit, setDataToEdit, deleteData, data }) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) {
          setForm(dataToEdit);
        } else {
          setForm(initialForm);
        }
      }, [dataToEdit])
    
    const handleChange = (e) => {
          
        if (e.target.type === 'file') {
            setForm({
              ...form,
              Fotografia: e.target.files[0] ? e.target.files[0].name : '', 
            });
          } else {
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            });
          }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!form.Nombre || !form.Puesto || !form.Fotografia || !form.Usuario || !form.Contrasena || !form.FechaRegistro) {
          alert("Datos incompletos");
          return;
        }
    
        if (form.ClaveEmpleado === null) {
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
                <div className="content_titulo">
                    <h3>Usuarios</h3>
                </div>
                <div className="content_conte">
                    <h4>{ dataToEdit? 'Editar Usuario:' : 'Nuevo Usuario:'}</h4>
                    <form action="" onSubmit={handleSubmit} id="form">
                        <div className="form">
                            {/* <div className="grupo" id='clave'>
                                <input className="IDash" type="text" id="codigo" required/><span className="barra"></span>
                                <label className="LDash">Clave de empleado</label>
                            </div> */}
                            <div className="grupo">
                                <input className="IDash" type="text" id="nombre" onChange={handleChange} value={form.Nombre} name='Nombre' required/><span className="barra"></span>
                                <label className="LDash">Nombre</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="puesto" onChange={handleChange} value={form.Puesto} name='Puesto' required/><span className="barra"></span>
                                <label className="LDash">Puesto</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="usuario" onChange={handleChange} value={form.Usuario} name='Usuario' required/><span className="barra"></span>
                                <label className="LDash">Usuario</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="categoria" onChange={handleChange} value={form.Contrasena} name='Contrasena' required/><span className="barra"></span>
                                <label className="LDash">Contraseña</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="file" id="puesto" onChange={handleChange} name='Fotografia' required/><span className="barra"></span>
                            </div>
                            <div className="container-buttons">
                               <button type="submit" onClick={handleSubmit}>Registro</button>
                               <button type="submit" onClick={handleReset}>Limpiar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
              <UsuariosTable
                   data={data}
                   setDataToEdit={setDataToEdit}
                   deleteData={deleteData}
              />
        </div>
    </>
  )
}

export default ContentUsuarios;