import React,{useContext,useRef} from 'react';
import './styles/Information.css';
import {Link,useHistory} from 'react-router-dom'
import AppContext from '../context/AppContext'


const Information = () => {

  const {state,addToBuyer} = useContext(AppContext);//vamos a crear una funcion nueva.
const form = useRef(null)//usamos el ref para guardar la info del formulariio. y darle una referencia a los input ademas de mo usar los enventos.

  const {cart} = state;

const history = useHistory();

const handleSubmit = () =>{// se pone funcion dentro de una funcion cuand ohay argumentos.
  const formData = new FormData(form.current);//aca creamos el formData que es la info que obtenemos del formulario usando el ref form.current.
  const buyer = {
    'name': formData.get('name'),//asi guardamos en un objeto toda la info de cada input con su name
    'email': formData.get('email'),
    'address': formData.get('address'),
    'apto': formData.get('apto'),
    'city': formData.get('city'),
    'country': formData.get('country'),
    'state': formData.get('state'),
    'cp': formData.get('cp'),
    'phone': formData.get('phone'),
  }
  addToBuyer(buyer);//y aaca le pasamos el objeto con la info del formulario  para guardalos en un array en el context.
  history.push('/checkout/payment') //con esto nos enviamos a la pagina escrita ahi, luego de ejecutar la funcion handleSubmit
}

  return (
    <div className="container">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}> {/*asi se aplica el ref , tambien se puede hacer en cada input pero asi es mas facil cuando hay mucho, pero la mejor forma es usar reacthookform*/}
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
        <Link to='/checkout'> <div className="Information-back">Regresar</div></Link>
        <div className="Information-next"> <button type="button" onClick={handleSubmit}> pagar</button> </div> {/* cuando toquemos esto se activa el handlesubmit para poder guardar en el context el pedido*/}
        </div>
      </div>
      <div className="Information-sidebar">
      {cart.length > 0 ? <h3>Pedidos:</h3> : <h3>no hay pedidos</h3>}
        {cart.map((item,i) =>(
        <div className="Information-item" key={i}>
          <div className="Information-element">
        <h4>{item.title}</h4>
            <span>{item.price}</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Information;