import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';





function Map({data}) {


    const containerStyle = {
        width: '400px',
        height: '400px'
      };
      
      const center = {
        lat:data.latitude,
        lng:data.longitude
      };

    const { isLoaded } = useJsApiLoader({//aca  usamos esta hook de la api para cargar nuestara clave de la api
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB7OQEXUAudFxRIt32g5Kon0Ml7SxALOcI"
      })

    return isLoaded ? (//aca decimos que si esta isLoaded qu es nuestra clave de la api se carga el mapa
        <GoogleMap //este es el mapa y recibe configuarciones
          mapContainerStyle={containerStyle}  //esto son los estilo
          center={center} //esta la latitud de donde va aparecer el mapa
          zoom={10}
         // onLoad={onLoad} // esta es una funcio para configuar cuando esta cargando el map para mientras carga el mapa se haga la traduccion a lat y lng de la dirrcion del comprador para marcarlo en el mapa
         // onUnmount={onUnmount} // y esta funcion para cuando se va el mapa 
        >
                    <Marker position={center} />

          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
}

export default Map
