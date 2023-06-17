
const ContentUsuarios = () => {
  return (
    <>
        <div className="content">
            <div className="content_registro nuevo">
                <div className="content_titulo">
                    <h3>Usuarios</h3>
                </div>
                <div className="content_conte">
                    <h4>Nuevo Registro:</h4>
                    <form action="" id="form">
                        <div className="form">
                            <div className="grupo" id='clave'>
                                <input className="IDash" type="text" id="codigo" required/><span className="barra"></span>
                                <label className="LDash">Clave de empleado</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="categoria" required/><span className="barra"></span>
                                <label className="LDash">Nombre</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="categoria" required/><span className="barra"></span>
                                <label className="LDash">Puesto</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="categoria" required/><span className="barra"></span>
                                <label className="LDash">Usuario</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="categoria" required/><span className="barra"></span>
                                <label className="LDash">Contraseña</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="date" id="categoria" required/><span className="barra"></span>
                            </div>
                            <button type="submit">Registro</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="content_registro ver">
               <div className="content_titulo">
                    <h3>Usuarios Registrados</h3>
                </div>
                <div className="content_conte over">
                    {/* tabla */}
                </div>
            </div>
        </div>
    </>
  )
}

export default ContentUsuarios;