
//creación del componente Productos
const Productos = () => {
    return(
        <>
         <div className="content">
            <div className="content_registro produc">
                <div className="content_titulo" id="producto">
                    <h3>Productos</h3>
                </div>
                <div className="content_conte">
                    <h4>Nuevo Registro:</h4>
                    <form action="" id="form">
                        <div className="form">
                            <div className="grupo" id='clave'>
                                <input type="text" id="codigo" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Codigo de producto</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Categoria</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Nombre</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Piezas</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Marca</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                                <label>Unidades</label>
                            </div>
                            <div className="grupo">
                                <input type="date" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                            </div>
                            <div className="grupo">
                                <input type="file" id="categoria" className="Pinput" required/><span className="Pbarra"></span>
                            </div>
                            <button type="submit">Registro</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="content_registro ver">
            <div className="content_titulo" id="producto">
                    <h3>Categorias Registradas</h3>
                </div>
                <div className="content_conte over">
                  
                </div>
            </div>
        </div>
        </>
    )
}

export default Productos;