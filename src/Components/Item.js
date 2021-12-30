import React,{useState} from "react";

const Item = ({ product,setItemSelected }) => {

    

    

  return (
    <div className="p-3 bg-slate-200 h-auto flex flex-col gap-2 text-center border-2 rounded border-green-500">
      <h4 className="text-black font-bold text-lg"> {product.name}</h4>
      <img src="../../public/img/unnamed-1.png" alt="imagen" />
      <p className="text-black font-bold text-lg">{product.price} $ </p>
      <p className="text-black text-base">
        {" "}
        epebus, corporis, officiis debitis quidem culpa provident iure enim hic
        maxime blanditiis iusto.
      </p>
      <button  className="text-white p-2 bg-green-600 rounded-md hover:bg-green-800">
        Add to cart
      </button>
    </div>
  );
};

export default Item;
