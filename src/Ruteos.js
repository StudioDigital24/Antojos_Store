import { Inicio } from "./components/inicio/Inicio";
import { AddProducto } from "./components/AddProducto/AddProducto";
import { Route, Routes } from "react-router-dom";
import { ListaProducto } from "./components/ListaProducto/ListaProducto";
<<<<<<< HEAD
import { ProductoCategoria } from "./components/productocategoria/ProductoCategoria"
=======


import { CarritoCompras } from "./components/CarritoCompras/CarritoCompras";

export const Ruteos = () =>{
>>>>>>> 7912b5048d7c96936a627033a1b29ec923cffd48

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
<<<<<<< HEAD
            {
                     categorias.map((object,index)=>{
                       return <Route key={index}path={object.nombre} element={<ProductoCategoria categoria={object}/>}></Route>


                     })



                 }

=======
           
>>>>>>> 7912b5048d7c96936a627033a1b29ec923cffd48
        </Routes>
    )

}