import React, {useState} from "react";
import Item from "./Item";


const ProductItemList = ({products,setItemSelected}) => {

  const createID = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36)
    return random + date
  }

  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
      {products.map( product => {
      return <Item
      key={createID()}
        product={product}
        setItemSelected={setItemSelected}
       />
    })}
    </div>


  );
};

export default ProductItemList;
