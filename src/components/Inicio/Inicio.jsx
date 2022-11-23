


import { AppCarousel } from '../appcarousel/AppCarousel';
import { Categoria } from '../categoria/Categoria';
import CategoriaModels from '../models/CategoriaModels';

export const Inicio=()=>{
  var categorias= CategoriaModels();


    return(
  <>
   <AppCarousel></AppCarousel>
  <div className='container'>
    <div className='row'>
    {
       categorias.map((object,index)=>{

        return<Categoria info={object}></Categoria>
       })

    }
    </div>
  </div>
  </>



    )
}