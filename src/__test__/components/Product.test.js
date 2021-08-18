import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import Product from '../../components/product';
import productMock from '../../__mocks__/productMock' 

describe("<product/>", () => {

    test('render de product', () => {
      const product =  shallow(
            <ProviderMock>
                <Product/>
            </ProviderMock>
        );
        expect(product.length).toEqual(1)  //esto es para comprobar si se renderizo
    })

    test('comprobar boton compra',() => {

        const handleAddToCart = jest.fn();

        const wrapper = mount(
            <ProviderMock>
            <Product
            product={productMock}  //aca le pasamos los props que recibe de products, sea un producto y su funcion para añadir al carrito.
            handleAddToCart={handleAddToCart}
            />
        </ProviderMock>
        );
        wrapper.find('button').simulate('click');  //aca vamos a simular en el button un click para activar el onClick
            expect(handleAddToCart).toHaveBeenCalledTimes(1)  //esto para ver si se ejecuto la funcion y cuantas veces.
    })
    

})