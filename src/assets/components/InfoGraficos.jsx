/* eslint-disable react/prop-types */
import EntraDateGraf from "./EntraDateGraf"
import MayorExistencias from "./MayorExistencias"
import MenorExistencia from "./MenorExistencia"
import SalDateGraf from "./SalDateGraf"
import { Link } from 'react-router-dom';

const InfoGraficos = ({data, Product}) => {

  return (
      <>
          <div className="container-title">
              <h1>Graficos</h1>
              <Link to="/SalEnt">
              <button className="btn-back">Regresar</button>
              </Link>
          </div>
      <div className="container-principal">
    <div className="contenedor-grafico">
                  <h2>No. Entradas por Fecha</h2>
                  <EntraDateGraf
                      data={data} />
        </div>
        <div className="contenedor-grafico">
                  <h2>No. Salidas por Fecha</h2>
                  <SalDateGraf
                      data={data} />
        </div>
        <div className="contenedor-grafico">
                  <h2>Productos con mayor existencia</h2>
                  <MayorExistencias
                      Product={Product} />
        </div>
        <div className="contenedor-grafico">
                  <h2>Productos con menor existencia</h2>
                  <MenorExistencia
                  Product={Product}/>
        </div>
      </div>
    </>
  )
}

export default InfoGraficos
