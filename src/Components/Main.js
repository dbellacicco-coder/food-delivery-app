import React from 'react';
import ProductsListContainer from './ProductsListContainer';
import CartBasquet from './CartBasquet';

const Main = ({product,setProduct}) => {
    return ( 
        <div className="mt-12 md:flex">
          <ProductsListContainer setProduct={setProduct} />

          <CartBasquet product={product} />
        </div>
      );
}
 
export default Main;