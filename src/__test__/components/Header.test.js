/*import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import renderer from 'react-test-renderer'; // de este utils usamoscreate para renderizar.



describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock> {/*ponemos dentro del mock el componente que vaya a adquirir los datos del provider , asi aplicamos este mock
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1); /*aca comprobamos que este renderizad oel header 
  });
  test('Render del Titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find(".Header-title").text()).toEqual('Platzi Store'); //aca vemos si el tittle de header esta bien.
  });
},

describe('header snapshot',() => {

  test('comprobar snapshot', () => {

   const header = renderer.create(
    <ProviderMock>
    <Header />
  </ProviderMock>, //aca como usamos el context para header tenemos que usar el providemock
   );
   expect(header.toJSON()).toMatchSnapshot(); 

  })


})

);
*/
import React from "react";
import {shallow} from 'enzyme';
import Footer from '../../components/Footer';
import renderer from 'react-test-renderer'; // de este utils usamoscreate para renderizar.

///lo mejor es usar act cuando se renderiza el componente en un dom creado. ya que act asegura que antes de hacer el expect el renderizado qhay terminado.
describe("render de componentes",() => {  //en el curso usan describe yo uso it, pero no puedo por que test van con describe y act con it.
          const footer =  shallow(<Footer/>) ; //asi guardamo lo que devuelve el renderizado. en la documentacion de react hacen el renderizado en uncontainer que es un div creado en el momento. ver cual es mejor forma.

    test("render de footer",()=> {  //en el curso usna test , yo voy a usar act ,cuando usamos act el expect debe estar afuera y aca no puede estar afuera por que el render se hace en una variable que el scope es en la funcion nomas, por lo tanto tengo que usar test
    expect(footer.length).toEqual(1);  //aca decimos la cantidad que hay en el footer osea 1.
    })

    test("render del tittle",() => {
        expect(footer.find(".Footer-title").text()).toEqual("proyecto hooks");  //aca lo que hacemos es usar find para buscar el elemento atraves de su class y ver si su texto es igual al toEqual.
    })

},


describe('footer snapshot', () => {
    test('Comprobar la UI del componente Footer', () => {
      const footer = renderer.create(<Footer />).toJSON(); //aca renderizamos el footer con el create y lo transformamos  en objeto json.
  
      expect(footer).toMatchSnapshot(); // y aca comprobamos el snapshot y si es la primera ves se crea.
    });
  })

)