
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Categoria=(props)=>{

    return(
        
        <div className='col mt-2'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.info.imagen} />
        <Card.Body>
          <Card.Title>{props.info.nombre}</Card.Title>
          <Card.Text>
            {props.info.descripcion}
          </Card.Text>
          <Link className='btn btn-success' to={props.info.nombre}>Compra Ahora</Link>
        </Card.Body>
      </Card>
      </div>
     
     


    )
 


    


}