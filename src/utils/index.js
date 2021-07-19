import React,{useContext} from 'react';
import AppContext from '../context/AppContext'




const HandleSumTotal = () => {//esta funcion es para hacer la suma de los precios de los pedidos del carritos
    const {state} = useContext(AppContext);
const {cart} = state;

    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;//este es el reducer o acumulador que le pasamos a la funcion reduce
    const sum = cart.reduce(reducer, 0);//aca la funcion reduce va a hacer la suma de los precios de los productos que esten en el carro.
    return sum;
  }

  export default HandleSumTotal