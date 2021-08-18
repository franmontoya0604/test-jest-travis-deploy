import React from 'react'
import './styles/products.css'


const Product = ({product,handleAddToCart}) => {
    return (
        <div className="Products-item">
            <img src={`http://localhost:1337${product.image[0].url}`} alt={product.title}/> {/*asi accedemos a la imagen desde strapi */}
            <div className="Products-item-info">
<h2 >{product.title}
    <span>$ {' '} {product.price}</span>
</h2>
    <p>{product.description}</p>
     <button type="button" onClick={handleAddToCart(product)}>añadir al carro</button> {/*al tocar se activa la funcioon y se le pasa el producto a añadir */}
            </div>
        </div>
    )
}

export default Product
