import React,{useContext} from 'react';
import './styles/Checkout.css';

import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext'
import HandleSumTotal from '../utils/index'


const Checkout = () => {

  const {state,removeFromCart} = useContext(AppContext);

  const {cart} = state;

  const handleRemove = (product, i) => ()=>{ //se pone asi como una funcion dentro de otra funcion, se usa asi para llamar a funciones que vienen del contexto.
removeFromCart(product, i)//esta funcion hadnle recibe el producto que queremos eliminar del carrito.
  }

 

  return (

    

    <div className="container">  {/* aca vamos a mostrar el pedido completo con su precios.*/}
      <div className="Checkout-content">
       {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>no hay pedidos</h3>}
       
        
        {cart.map((product,i)=>(
         
           <div className="Checkout-item"  key={i}>
          <div className="Checkout-element">
           
        <h4>{product.title}</h4>
        <span>{product.price}</span> 
           
          </div>
         
          <button type="button" onClick={handleRemove(product, i)}><i className="fas fa-trash-alt"></i></button>
          </div>
        ))}
       
      </div>
{cart.length > 0 && ( <div className="Checkout-sidebar">
        <h3>{`Precio Total: $ ${HandleSumTotal()}`}</h3>
       <Link to='/checkout/information'> <button type="button">Continuar pedido</button></Link>
      </div>)}

     
    </div>
  );
};

export default Checkout;