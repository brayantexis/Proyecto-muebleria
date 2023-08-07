
import Login from "./Login"
import Welcome from "./Welcome";
import Dashboard_Users from "./Dashboard_Users";
import SalEnt from './SalEnt';
import Categoria from './Categoria'
import Product from './Product'
import Informes from "./Informes";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const App = () => {
    return(
        <BrowserRouter>
         <Routes>
           <Route exact path="/" element= {<Welcome/>}/>
            <Route path="/Categorias" element= {<Categoria/>}/>
            <Route path="/Producto" element= {<Product />}/>
            <Route path="/SalEnt" element= {<SalEnt />}/>
            <Route path="/Usuarios" element= {<Dashboard_Users />}/>
            <Route path="/Login" element= {<Login />}/>
            <Route path="/Informes" element= {<Informes />}/>
         </Routes>
        </BrowserRouter>
    )
}

export default App;