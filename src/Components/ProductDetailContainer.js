import React from 'react';
import ProductDetail from './ProductDetail';

const ProductDetailContainer = ({product}) => {
    return ( <div>
        <ProductDetail
        product={product}
         />
    </div> );
}
 
export default ProductDetailContainer;