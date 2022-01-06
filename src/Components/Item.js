import React, { useState } from "react";
import ProductCounter from "./ProductCounter";
import { Link } from "react-router-dom";

const Item = ({
  product,
  setProduct
}) => {


  const { title, price,image,description,id} = product;

  

  return (
    <div className="p-3 bg-slate-200 h-auto flex flex-col gap-2 text-center border-2 rounded border-green-500">
      <h4 className="text-black font-bold text-lg"> {title}</h4>
      <img src={image} alt="imagen" />
      <p className="text-black font-bold text-lg">{price} $ </p>
      <p className="text-black text-base">
        {description}
      </p>
      <Link className="text-black p-2 bg-green-300 rounded-md hover:bg-green-800" to={"/item/"+id}> Ver Mas </Link>
     <ProductCounter setProduct={setProduct} product={product}/>
    </div>
  );
};

export default Item;
