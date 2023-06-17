
//creación del componente Productos
const Productos = () => {
    return(
        <>
       
         <div className="contenido">
            <div className="contenido_registro Cnuevo">
                <div className="contenido_titulo">
                    <h3>Productos</h3>
                </div>
                <div className="contenido_conte">
                    <h4>Nuevo Registro:</h4>
                    <form action="" id="form">
                        <div className="Pform">
                            <div className="Pgrupo">
                                <input type="text" id="codigo" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Codigo de producto</label>
                            </div>
                            <div className="Pgrupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Categoria</label>
                            </div>
                            <div className="Pgrupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Nombre</label>
                            </div>
                            <div className="Pgrupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Piezas</label>
                            </div>
                            <div className="Pgrupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Marca</label>
                            </div>
                            <div className="Pgrupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Unidades</label>
                            </div>
                            <div className="Pgrupo">
                                <input type="date" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                            </div>
                            <div className="Pgrupo">
                                <input type="file" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                            </div>
                            <button type="submit">Registro</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contenido_registro Cver">
            <div className="contenido_titulo">
                    <h3>Categorias Registradas</h3>
                </div>
                <div className="contenido_conte">
                  
                </div>
            </div>
        </div>
      
        </>
    )
}

export default Productos;