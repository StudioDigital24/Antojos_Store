

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from "react";

import ProductoModels from '../models/ProductoModels';
import { DataContext } from '../../Context/DataProvider';

export const ProductoCategoria=(props)=>{
var productos=ProductoModels();

//importo el contexto
const provider=useContext(DataContext);

//afecto el datacontext por el click al boton
const adicionarProductoCarrito=(producto)=>{
provider.setCarrito([...provider.carritoCompras,producto]);

}
const productosCategoria=productos.filter(x=>x.categoriaid==props.categoria.id);
return(
    <div className="container">
        <div className="row">
            <h2>Productos de la categoria {props.categoria.nombre}</h2>

        </div>
        <div className="row">
    {
    productosCategoria.map((object,index)=>{

        return( 
            <div className="col">
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={object.imagen} />
        <Card.Body>
        <Card.Title>{object.nombre}</Card.Title>
        <Card.Text>
            {object.descripcion}
        </Card.Text>
        <Card.Text>
            ${object.valor}
        </Card.Text>
        <Button onClick={()=>{
            adicionarProductoCarrito(object)
        }} variant="primary">Agregar al carrito</Button>
        </Card.Body>
    </Card>
     </div>
        )
    })
    
    }
    </div>
        </div>
    )

}