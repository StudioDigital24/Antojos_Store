
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Electrodomesticos= ()=>{

    const listadoElectrodomesticos=[
       {
        id:1,
        name:"Horno Electrico",
        descripcion:"horno asador",
        precio:"1000000",
        imagen:""

       },
       {
        id:2,
        name:"Estufa a gas",
        descripcion:"Estufa gas natural",
        precio:"1500000",
        imagen:""

       },
       {
        id:3,
        name:"Televisor",
        descripcion:"Televisor lcd",
        precio:"60000",
        imagen:""

       },


    ]
return(
   <>
   {
    listadoVestuario.map((value,key)=>{
        return  <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{value.name}</Card.Title>
          <Card.Text>
            {value.descripcion}
          </Card.Text>
          <Card.Text>
           ${value.precio}
          </Card.Text>
          <Button variant="primary">Agregar al carrito
          <box-icon name='cart-add'></box-icon>
          </Button>
        </Card.Body>
      </Card>
    })


    }
   
       
  </>

    )

}