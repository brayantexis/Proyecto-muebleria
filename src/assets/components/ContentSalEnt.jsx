
const ContentSalEnt = () => {
  return (
        <>
            <div className="content">
            <div className="content_registro nuevo">
                <div className="content_titulo" id="SalEnt">
                    <h3>Salidas / Entradas</h3>
                </div>
                <div className="content_conte">
                    <h4>Nuevo Registro:</h4>
                    <form action="" id="form">
                        <div className="form">
                            <div className="grupo" id="clave">
                                <input type="text" id="codigo" required/><span className="barra"></span>
                                <label>Codigo de Productos</label>
                            </div>
                            <div className="grupo">
                                <input type="date" id="categoria" required/><span className="barra"></span>
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
               <div className="content_titulo" id="SalEnt">
                    <h3  id="Titulo">Sal/Ent Registradas</h3>
                </div>
                <div className="content_conte over">
                  
                </div>
            </div>
        </div>
        </>
    )
}

export default ContentSalEnt;