import React,{useContext} from 'react'
import './styles/header.css'
import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext' //asi traemos el contexto y lo indicamos en useContext



const Header = () =>{

  const {state} = useContext(AppContext);//traemos la funcion para gregar  al carrito y el estado que vamos a utilizar. cada ves que se use estos se actualiza.
const {cart} =state;

    return (
        <nav className="navbar navbar-light bg-light  container-fluid">
  <h2>
  <Link to='/' >  proyecto react con hooks</Link>
   </h2>
   <div className="Header-checkout">
    <Link to='/checkout'> 
     <i className="fas fa-shopping-basket "></i>
     </Link> 
     {cart.length > 0  && <div className="Header-alert">{cart.length} </div>}
     </div>
  
</nav>
    )
}

export default Header