
import React from 'react';
import { Link } from 'react-router-dom';

const Products = (props) => {
    let allProducts = (
        <div>
            <h1>Estás viendo todos los productos</h1>
            <ul>
                <Link to="/products/1">Producto 1</Link>
                <Link to="/products/2">Producto 2</Link>
                <Link to="/products/3">Producto 3</Link>
            </ul>
            <Link to="/">Regresar a home</Link>
        </div>
    )
    let singleProduct = (
        <div>
            <h1>Estás viendo el producto #{props.match.params.id}</h1>
            <Link to="/products">Regresar a lista de todos los productos</Link>
        </div>
    )
    return (
        <div>
          {props.match.params.id ? singleProduct : allProducts}
        </div>
    )
}
export default Products;