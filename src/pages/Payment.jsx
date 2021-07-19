import React,{useContext} from 'react';
import './styles/Payment.css';
import {PayPalButton} from 'react-paypal-button-v2'
import AppContext from '../context/AppContext'
import HandleSumTotal from '../utils/index'
import {useHistory} from 'react-router-dom'


const Payments = () => {
  const {state} = useContext(AppContext);
  const {cart,buyer,addNewOrder} = state;

  const history = useHistory();

  const paypalOptions= {
    clientId: 'sb-djlzk6746871@personal.example.com',//este es nuestro id de paypal la cuenta para traer la api rest.y donde va la plata creo a esto ha yque tenerlo oculto y una buena opcion puede ser dotenv
    intent: 'capture',
    currency: 'USD'
  }

const buttonStyles= {//los styles ya vienen por defecto no hace falta cambiarlos
  shape: 'rect',
  layout: 'vertical'
}

const handlePaymentSucces =  (details, data) => { //sirve para añadir una funcion cuando la transaccion este completa
  
  if (details.status === 'COMPLETED') {
    console.log("Transaction completed by " + details.payer.name.given_name) //mostramos un cartel de transaccion completa, details nos da la data del que compra
 
  const newOrder = {//aca creamos la orden de la compra que vamos a guardar en nuestro backend es mejor crearla en e lservidor o base de datos con un fetch para que quede permanente ahora como no tenemos backend vamos aguardarla en el estado.
    buyer:buyer,//este es el nombre del comprador
    product: cart,
    payment:data
  }
  
  console.log(newOrder)
  history.push('/checkout/success')//para enviar a la pagina siguiente donde va a aparecer el cartel que se completo

addNewOrder(newOrder)//aca cuando guardamos la orden tendriamos que guardarla en un lugar seguro que se guarde de forma permantente
console.log(details)
  
  }

 }



  return (
    <div className="container">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item,i) =>(
        <div className="Information-item" key={i}>
          <div className="Information-element">
        <h4>{item.title}</h4>
            <span>{item.price}</span>
          </div>
        </div>
        ))}

     <div className="Payment-button">
     <PayPalButton 
     //props que le pasamos a la api de paypal
     amount={HandleSumTotal()}  //sive para saber el monto de la transacion, aca le pasamos la suma total del carrito de la compra que estan haciendo
     buttonStyles={buttonStyles}  //para darle el estilo a los botones
    paypalOptions={paypalOptions}  //aca puedne ir muchas propiedades para configurar
    onButtonReady={()=>console.log("payment star")} //sirve para añadir una funcion cuando se active el boton
    onSuccess={(details,data)=> handlePaymentSucces(details,data)}
    onError={error=> console.log(error)} //sirve para manejar el erro y mostrarlo en pantalla
    onCancel={data=> console.log(data)} //sirve para manejar el error cuandose cancele.

     />
     </div>
      </div>
      
    </div>
  );
};

export default Payments;