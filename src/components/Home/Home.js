
import React from 'react';
import { Link } from 'react-router-dom';
const Home = (props) => {
    return (
        <div>
            <h1>Estás en home!</h1>
            <Link to="/products">Ver todos los productos</Link>
        </div>
    )
 }
export default Home;