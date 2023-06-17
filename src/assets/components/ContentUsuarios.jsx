import React from 'react'

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
                                <input type="text" id="codigo" required/><span className="barra"></span>
                                <label>Clave de empleado</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" required/><span className="barra"></span>
                                <label>Nombre</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" required/><span className="barra"></span>
                                <label>Puesto</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" required/><span className="barra"></span>
                                <label>Usuario</label>
                            </div>
                            <div className="grupo">
                                <input type="text" id="categoria" required/><span className="barra"></span>
                                <label>Contraseña</label>
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