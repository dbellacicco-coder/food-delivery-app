import React from 'react';

const Item = ({product}) => {
    return ( 
        <div className='bg-blue-200 flex flex-col text-center'>
            <h3> {product.name}</h3>
            <img src="../../public/img/unnamed-1.png" alt="imagen"/>
            <p>{product.price} </p>
            <p>Descripcion   </p>
        </div>
     );
}
 
export default Item;