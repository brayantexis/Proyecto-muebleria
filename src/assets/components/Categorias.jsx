
//creación del componente Categorias
const Categorias = () => {
    return (
        <>
        <div className="content">
            <div className="content_registro nuevo">
                <div className="content_titulo">
                    <h3>Categorias</h3>
                </div>
                <div className="content_conte">
                    <h4>Nuevo Registro:</h4>
                    <form action="" id="form">
                        <div className="form">
                            <div className="grupo">
                                <input type="text" id="codigo" required/><span className="barra"></span>
                                <label>Codigo de categoria</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" required/><span className="barra"></span>
                                <label>Tipo de Categoria</label>
                            </div>
                            <div className="grupo">
                                <input type="date" id="categoria" required/><span className="barra"></span>
                            </div>
                            <button type="submit">Registro</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="content_registro ver">
               <div className="content_titulo">
                    <h3>Categorias Registradas</h3>
                </div>
                <div className="content_conte">
                  
                </div>
            </div>
        </div>
        </>
    )
}

export default Categorias;