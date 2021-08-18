import {useLayoutEffect,useState} from 'react'
import initialState from '../initialState'
import axios from 'axios';


const API = "http://localhost:1337/products"; //esta es la api de strapi

const useInitialState= ()=> {//este hook devuelve las funciones que tiene dentro y el state para luego tenerlos en el context.
  const [state,setState] = useState(initialState);//aca en estate se guarda el initial state con los productos. y si la llamamos devuelve el state cigual con el producto en el cart. se guarda aca para poder actualizar el state y agregarle cosas

  const [products,setProducts] = useState([]); //aca vamos aguardar los productos que llamemos de la api de strapi


  useLayoutEffect(() => {
    
    async function apiCall() {  //asi usamos el async function en el useEffect
    const  response = await axios(API) // con axios se puede pero con fetch no
    

    setProducts(response.data) //guardamosen product el llamdo a la api

    
    }
    // Execute the created function directly
    apiCall();
  }, []);

const addToCart = (payload) => {//esta funcion va a guardar en el carrito del state lo que le pasemos.
   setState({ ...state,//aca se guardae en el estate el estado actualizado.
    cart: [...state.cart, payload]//se guarda en carrito el producto que le pasemos.
})
}

const removeFromCart = (payload,indexToRemove) => {//esta funcion va a remover en el carrito del state lo que le pasemos.y si la llamamos de cuelve el estate igual con el cambio removido.
    setState({ ...state,
     cart: state.cart.filter((items,indexCurrent)=> indexCurrent !== indexToRemove) , //el filter devuelve solo los productos del carrito que sean distintos al id del producto que enviamos para remover. asi para que ya no este ese producto en el cart.
 })//vamosa usar un index para eliminar del carro para que solo se elimine uno y no todos los mismos productos, por lo tanto cada producto va a tner su index. y cuando toquemos eliminar va a enviar el numero que sigue ya que se suma de a 1 y cuando el index que queremos eliminar sea como uno de los que esta en cart no se devolvera por el filter.
 }

 const addToBuyer = (payload)=> {
setState({...state,
    buyer:[...state.buyer, payload]//agregamos en el array de buyer le pasamos la info del formulario
})
 }

const addNewOrder = (payload)=>{//guardanos la nueva orden ene el estado

    setState({...state,
        order:[...state.order,payload]

    })
}

 return{//este hook devuelve esto para poder usarlos si queremos, el estado con los productos actualizados o la funcion para quitar o agregar al carrito del state.
     addToCart,
     removeFromCart,
     addToBuyer,
     addNewOrder,
    products, //todo esto devuelve el estado y esto se le pasa a la api de context para poder usarlo entoda la app
     state //aca le pasamos el state a toda nuestra aplicacion luego de hacerle los cambios. esto que devuelve se usa en el app para darle el value al context.
 }

}

export default useInitialState;
