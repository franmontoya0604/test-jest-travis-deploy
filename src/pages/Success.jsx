import React,{useContext} from 'react';
import './styles/Success.css';
import AppContext from '../context/AppContext'
import Map from '../components/Map'
import useGoogleAdress from '../hooks/useGoogleAdress'

const Success = () => {
  const {state} = useContext(AppContext);
  const {buyer} = state;
const address = useGoogleAdress(buyer[0].address)

  return (
    <div className="container">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
          <Map data={address} /> {/*aca llamamos a map y le pasamos la data que es la latitud y longitud para marcar la dirrcecion del comprador en el mapa*/}
          </div>
      </div>
    </div>
  );
};

export default Success;