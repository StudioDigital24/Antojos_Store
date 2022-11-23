import './Header.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { useContext } from "react"
import { DataContext } from '../../Context/DataProvider';
import CategoriaModels from '../models/CategoriaModels';


export const Header = () =>{
    const Titulo = "Antojos Store";
    const provider = useContext(DataContext);
    const categorias=CategoriaModels();
    return (
        <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{Titulo}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='nav-link active' to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/nuevo">Nuevo Producto</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/productos">Lista Productos</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/modificar">Modificar</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/carrito">Lista Ventas</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorias
              </a>
              <ul className="dropdown-menu">
                {
                  categorias.map((object,key) => {
                     return  <li><Link class="dropdown-item" to={object.nombre}>{object.nombre}</Link></li>
                  })
                }
              </ul>
            </li>
          </ul>
         
          <box-icon name='log-out'></box-icon>
        </div>
      </div>
    </nav>
    </>
      )
}