import React from 'react';

const ProductCounter = ({product,setProduct}) => {



    const addProduct = e => {
        console.log(product)
        setProduct(product)
    }

    return ( 
       <button
       onClick={addProduct}
        className="text-white p-2 bg-green-600 rounded-md hover:bg-green-800"
      >
        Add to cart
      </button>
    );
}
 
export default ProductCounter;