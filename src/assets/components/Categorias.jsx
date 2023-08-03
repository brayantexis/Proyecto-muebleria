import variables from "../../../public/data"
import { useState, useEffect } from "react";
//creación del componente Categorias
const Categorias = () => {

    const cate = variables.categoria.map(item => {
        return(
            <tr key={item.codigo}>
                <td>{item.codigo}</td>
                <td>{item.tipo}</td>
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
                        <th>Tipo</th>
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

    const [codigos, setCodigo] = useState("");
    const [tipos, setTipo] = useState("");
    const [fechas, setFecha] = useState("");

    const enviar = (e) => {
        e.preventDefault();
        variables.categoria.push(
            {
                codigo : codigos,
                tipo : tipos,
                fecha : fechas
            }
        )
        setCodigo("");
        setFecha("");
        setTipo("");
        // document.getElementById("codigo").value = "";
        // document.getElementById("categoria").value = "";
        // document.getElementById("fecha").value = "";
    }

    

    useEffect(() => {

        //! apartado para colocar la pedida de la api.

    },[codigos,fechas,tipos])

    return (
        <>
        <div className="content">
            <div className="content_registro nuevo">
                <div className="content_titulo" id="cate">
                    <h3>Categorias</h3>
                </div>
                <div className="content_conte">
                    <h4>Nuevo Registro:</h4>
                    <form id="form" onSubmit={enviar}>
                        <div className="form">
                            <div className="grupo" id="clave">
                                <input className="IDash" type="text" id="codigo" value={codigos}
                                onChange={(e) => {
                                    setCodigo(e.target.value);
                                }}
                                required/><span className="barra"></span>
                                <label className="LDash">Codigo de categoria</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="text" id="categoria" value={tipos}
                                onChange={(e) => {
                                    setTipo(e.target.value);
                                }}
                                required/><span className="barra"></span>
                                <label className="LDash">Tipo de Categoria</label>
                            </div>
                            <div className="grupo">
                                <input className="IDash" type="date" id="fecha" value={fechas}
                                onChange={(e) => {
                                    setFecha(e.target.value);
                                }}
                                required/><span className="barra"></span>
                            </div>
                            <button type="submit">Registro</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="content_registro ver">
               <div className="content_titulo" id="cate">
                    <h3  id="Titulo">Categorias Registradas</h3>
                </div>
                <div className="content_conte over">
                    {evalu()}
                </div>
            </div>
        </div>
        </>
    )
}

export default Categorias;