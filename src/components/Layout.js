import React from 'react';

import Header from './Header';
import Footer from './Footer';

function Layout(props) {//layout recibe props , el que vamos utilizar es childhen.
  // const children = props.children;

  return (
    <React.Fragment >{/*es porque tiene que devolver una cosa y para no poner un div ponemos react.fragment.*/}
      <Header/>{/*header va a aparecer en todas las spaginas que se incluya layout.*/}
      {props.children}{/*aca mostramos todo el contenido de los hijos de layout qu esten renderizados*/}
      <Footer/>
    </React.Fragment>
  );
}//layout funciona como hacemos en este proyecto con el carousel y categories que utiliza el contenido de sus hijos

export default Layout;
