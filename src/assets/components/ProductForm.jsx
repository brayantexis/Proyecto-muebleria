/* eslint-disable react/prop-types */
import ProductTable from './ProductTable'
import { useState, useEffect } from 'react';

const initialForm = {
    id_Producto: null,
    CodigoProducto: "",
    Categoria: "",
    Marca: "",
    NombreProducto: "",
    Piezas: "",
    Color: "",
    Material: "",
    Unidades: "",
    Dimensiones: "",
    Precio: "",
    Descripcion: "",
    FechaAlta: "",
    Fotografia: "",
  };

const ProductForm = ({ createData, updateData, dataToEdit, setDataToEdit, deleteData, data }) => {
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
    
          if (!form.CodigoProducto ||
              !form.Categoria ||
              !form.Marca ||
              !form.NombreProducto ||
              !form.Piezas ||
              !form.Color ||
              !form.Material || 
              !form.Unidades ||
              !form.Dimensiones ||
              !form.Precio ||
              !form.Descripcion ||
              !form.FechaAlta ||
              !form.Fotografia) {
          alert("Datos incompletos");
          return;
        }
    
        if (form.id_Producto === null) {
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

    return(
        <>
         <div className="content">
            <div className="content_registro produc">
                <div className="content_titulo" id="producto">
                    <h3>Productos</h3>
                </div>
                <div className="content_conte">
                        <h4>{ dataToEdit? 'Editar Producto:' : 'Nuevo Producto:'}</h4>
                    <form onSubmit={handleSubmit} id="form">
                            <div className="form">
                        <div className="form-container">
                                <div className="grupo">
                                <input  type="text" id="CodigoProducto" onChange={handleChange} value={form.CodigoProducto} name='CodigoProducto' className="IDash" required/><span className="Pbarra"></span>
                                <label className="LDash">Codigo de producto</label>
                            </div>
                            <div className="grupo">
                                <input  type="text" id="Categoria" onChange={handleChange} value={form.Categoria} name='Categoria' className="IDash" required/><span className="Pbarra"></span>
                                <label className="LDash">Categoria</label>
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="grupo">
                                <input  type="text" id="NombreProducto" onChange={handleChange} value={form.NombreProducto} name='NombreProducto' className="IDash" required/><span className="Pbarra"></span>
                                <label className="LDash">Nombre</label>
                            </div>
                            <div className="grupo">
                                <input  type="text" id="Piezas" onChange={handleChange} value={form.Piezas} name='Piezas' className="IDash" required/><span className="Pbarra"></span>
                                <label className="LDash">Piezas</label>
                            </div>
                        </div>
                        <div className="form-container">
                           <div className="grupo">
                                <input  type="text" id="Marca" onChange={handleChange} value={form.Marca} name='Marca' className="IDash" required/><span className="Pbarra"></span>
                                <label className="LDash">Marca</label>
                            </div>
                            <div className="grupo">
                                <input  type="text" id="Unidades" onChange={handleChange} value={form.Unidades} name='Unidades' className="IDash" required/><span className="Pbarra"></span>
                                <label className="LDash">Unidades</label>
                            </div>
                        </div>
                        <div className="form-container">
                           <div className="grupo">
                                <input type="text" id="Color" onChange={handleChange} value={form.Color} name='Color' className="IDash" required /><span className="Pbarra"></span>
                                <label className="LDash">Color</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="Material" onChange={handleChange} value={form.Material} name='Material' className="IDash" required /><span className="Pbarra"></span>
                                <label className="LDash">Material</label>
                            </div>
                        </div>
                        <div className="form-container">
                           <div className="grupo">
                                <input type="text" id="Dimensiones" onChange={handleChange} value={form.Dimensiones} name='Dimensiones' className="IDash" required /><span className="Pbarra"></span>
                                <label className="LDash">Dimensiones</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="Precio" onChange={handleChange} value={form.Precio} name='Precio' className="IDash" required /><span className="Pbarra"></span>
                                <label className="LDash">Precio</label>
                            </div>
                        </div>   
                        <div className="form-container">
                           <div className="grupo">
                                <input type="text" id="Descripcion" onChange={handleChange} value={form.Descripcion} name='Descripcion' className="IDash" required /><span className="Pbarra"></span>
                                <label className="LDash">Descripción</label>
                            </div>
                            <div className="grupo">
                                <input type="date" id="FechaAlta" onChange={handleChange} value={form.FechaAlta} name='FechaAlta' className="IDash" required /><span className="Pbarra"></span>
                            </div>
                        </div>        
                            <div className="grupo">
                                <input  type="file" id="Fotografia" onChange={handleChange} name='Fotografia' className="IDash" required/><span className="Pbarra"></span>
                            </div>      
                            <div className="container-buttons">
                               <button type="submit" onClick={handleSubmit}>Registro</button>
                               <button type="submit" onClick={handleReset}>Limpiar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
                <ProductTable
                    data={data}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />
        </div>
        </>
    )
}

export default ProductForm;