import React, { useState } from "react";

const Item = ({
  product
}) => {


  const { title, price,image,description} = product;

  

  return (
    <div className="p-3 bg-slate-200 h-auto flex flex-col gap-2 text-center border-2 rounded border-green-500">
      <h4 className="text-black font-bold text-lg"> {title}</h4>
      <img src={image} alt="imagen" />
      <p className="text-black font-bold text-lg">{price} $ </p>
      <p className="text-black text-base">
        {description}
      </p>
      <button
        className="text-white p-2 bg-green-600 rounded-md hover:bg-green-800"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Item;
