import variables from "../../../public/data"

const ContentSalEnt = () => {

    const cate = variables.salent.map(item => {
        return(
            <tr key={item.codigo}>
                <td>{item.codigo}</td>
                <td>{item.fecha}</td>
                {
                    JSON.parse(localStorage.getItem("sesion")).status !== "Gerencia"?
                    <td>
                    <button className="delete">Eliminar</button>
                    <button className="mod">Modificar</button>
                </td>:
                    null
                }
            </tr>
        )
    });

    const evalu = () => {
        if(variables.categoria.length > 0){
            return(
                <table>
                    <tr>
                        <th>Codigo</th>
                        <th>Fecha</th>
                        {
                    JSON.parse(localStorage.getItem("sesion")).status !== "Gerencia"?
                    <th>Acciones</th>:
                    null
                }
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
                <div className="content_titulo" id="SalEnt">
                    <h3>Salidas / Entradas</h3>
                </div>
                <div className="content_conte">
                    <h4>Nuevo Registro:</h4>
                    <form action="" id="form">
                        <div className="form">
                            <div className="grupo" id="clave">
                                <input className="IDash" type="text" id="codigo" required/><span className="barra"></span>
                                <label className="LDash">Codigo de Productos</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="date" id="categoria" required/><span className="barra"></span>
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
               <div className="content_titulo" id="SalEnt">
                    <h3  id="Titulo">Sal/Ent Registradas</h3>
                </div>
                <div className="content_conte over">
                  {evalu()}
                </div>
            </div>
        </div>
        </>
    )
}

export default ContentSalEnt;