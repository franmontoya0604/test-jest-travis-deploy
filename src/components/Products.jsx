import React,{useContext} from 'react'
import Product from './Product'
import './styles/products.css'
import AppContext from '../context/AppContext' //asi traemos el contexto y lo indicamos en useContext

const Products = () => {
    const {addToCart,products} = useContext(AppContext);//traemos la funcion para gregar  al carrito y el estado que vamos a utilizar. cada ves que se use estos se actualiza.
   
   
   const handleAddToCart = (product)=>()=>{//esta funcion maneja para añadir ele producto a el carrito, se hace funcion de una funcion para poder manejarlo.
addToCart(product)//usamos la funcion del context que mdifica el state.
   }

    return (
        <div className="Products container">
            <div className="Products-items">
            {products.length > 0 ? (products.map(product=>(//hacemos mapeo de un componente
            <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>//le pasamos los product qu enos pasa home por el momento ya que tenemos que usar context y no los props. le pasamos la funcion mpara manejar el addtocart.

    )) ) : <div> cargando...</div> }
            </div>
           
        </div>
    )
}

export default Products
