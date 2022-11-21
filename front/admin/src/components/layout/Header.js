import React, { Fragment } from 'react'
import "../../App.css"
import { Link } from "react-router-dom"
import { Search } from './Search'

const Header = () => {
    
    return (
        <Fragment>
            <nav className='navbar row'>
                <div className='col-3'>
                    <a class="navbar-brand" href="#">
                        <img src="../images/antojos.png" width="100" height="100" class="d-inline-block" alt=""/>
                        &nbsp;&nbsp;&nbsp;<span class="titulo">ANTOJOS STORE</span>
                    </a>
                </div>
                <div className='col-5'>
                    {/*Aqui va buscar*/}
                    <Search />
                </div>
                <div className='col-3'>
                    
                </div>
                <div className='col'>
                    {/*carrito*/}
                    <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                    <span  id="cart_count"></span></Link>
                </div>
                

            </nav>

        </Fragment>
    )

}

export default Header
