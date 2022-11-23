<<<<<<< HEAD



import { AppCarousel } from '../appcarousel/AppCarousel';
import { Categoria } from '../categoria/Categoria';
import CategoriaModels from '../models/CategoriaModels';

export const Inicio=()=>{
  var categorias= CategoriaModels();
=======
import { AppCarousel } from '../appcarousel/AppCarousel';



export const Inicio=()=>{

>>>>>>> 7912b5048d7c96936a627033a1b29ec923cffd48


    return(
  <>
<<<<<<< HEAD
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

=======
  <AppCarousel></AppCarousel>
  <div className='container'>
    <div className='row'>
    
    </div>
  </div>
  </>

>>>>>>> 7912b5048d7c96936a627033a1b29ec923cffd48


    )
}