import { Inicio } from "./components/Inicio/Inicio";
import { AddProducto } from "./components/AddProducto/AddProducto";
import { Route, Routes } from "react-router-dom";
import { ListaProducto } from "./components/ListaProducto/ListaProducto";
import { ProductoCategoria } from "./components/productocategoria/ProductoCategoria"
import { CarritoCompras } from "./components/CarritoCompras/CarritoCompras";
import CategoriaModels from "./components/models/CategoriaModels";

export const Ruteos = () =>{
const categorias=CategoriaModels();
    return(
        <Routes>
            <Route path="/" element={<Inicio/>}></Route>
            <Route path="/nuevo" element={<AddProducto/>}></Route>
            <Route path="/productos" element={<ListaProducto/>}></Route>
            <Route path="/carrito" element={<CarritoCompras/>}></Route>

            {
                     categorias.map((object,index)=>{
                       return <Route key={index}path={object.nombre} element={<ProductoCategoria categoria={object}/>}></Route>


                     })



                 }

           

        </Routes>
    )

}
