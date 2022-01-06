import React from 'react';


const ProductDetail = ({product}) => {

const {title,price,description,image} = product;

    return (<div className="p-3 bg-slate-200 w-1/4 h-1/4 flex flex-col gap-2 text-center border-2 rounded border-green-500">
    <h4 className="text-black font-bold text-lg"> {title}</h4>
    <img src={image} alt="imagen" />
    <p className="text-black font-bold text-lg">{price} $ </p>
    <p className="text-black text-base">
      {description}
    </p>
  </div> );
}
 
export default ProductDetail;