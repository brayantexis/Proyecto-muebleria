
//creación del componente Categorias
const Categorias = () => {
    return (
        <>
        <div className="content" id="CateC">
            <div className="content_registro nuevoo" id="CateR">
                <div className="content_titulo " id="CateT">
                    <h3 id="Titulo">Categorias</h3>
                </div>
                <div className="content_conte" id="CateCC">
                    <h4>Nuevo Registro:</h4>
                    <form action="" id="form">
                        <div className="form">
                            <div className="grupo_f">
                                <input type="text" id="codigo" required/><span className="barra"></span>
                                <label>Codigo de categoria</label>
                            </div>
                            <div className="grupo_f">
                                <input type="text" id="categoria" required/><span className="barra"></span>
                                <label>Tipo de Categoria</label>
                            </div>
                            <div className="grupo_f">
                                <input type="date" id="categoria" required/><span className="barra"></span>
                            </div>
                            <button type="submit">Registro</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="content_registro veer" id="CateR">
               <div className="content_titulo" id="CateT">
                    <h3  id="Titulo">Categorias Registradas</h3>
                </div>
                <div className="content_conte" id="CateCC">
                  
                </div>
            </div>
        </div>
        </>
    )
}

export default Categorias;