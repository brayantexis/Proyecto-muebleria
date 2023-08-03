import variables from "../../../public/data";

const ContentUsuarios = () => {

    const cate = variables.usuario.map(item => {
        return(
            <tr key={item.clave}>
                <td>{item.clave}</td>
                <td>{item.nombre}</td>
                <td>{item.puesto}</td>
                <td>{item.usuario}</td>
                <td>
                    <button className="delete">Eliminar</button>
                    <button className="mod">Modificar</button>
                </td>
            </tr>
        )
    });

    const evalu = () => {
        if(variables.categoria.length > 0){
            return(
                <table>
                    <tr>
                        <th>Clave</th>
                        <th>Nombre</th>
                        <th>Puesto</th>
                        <th>Usuario</th>
                        <th>Acciones</th>
                    </tr>
                    {cate}
                </table>
            )
        }
    }
    

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
                                <input className="IDash" type="text" id="nombre" required/><span className="barra"></span>
                                <label className="LDash">Nombre</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="puesto" required/><span className="barra"></span>
                                <label className="LDash">Puesto</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="usuario" required/><span className="barra"></span>
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
                    {evalu()}
                </div>
            </div>
        </div>
    </>
  )
}

export default ContentUsuarios;