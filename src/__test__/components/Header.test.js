import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';
import renderer from 'react-test-renderer'; // de este utils usamoscreate para renderizar.



describe('<Header />', () => {
  test('Render del componente Header', () => {
    const header = shallow(
      <ProviderMock> {/*ponemos dentro del mock el componente que vaya a adquirir los datos del provider , asi aplicamos este mock*/}
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1); /*aca comprobamos que este renderizad oel header */
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
