import React, { useState,useEffect } from "react";
import ProductsItemList from "./ProducstItemList";

const ProductsListContainer = ({setProduct}) => {

  const [products, setProducts] = useState([]);

 

 useEffect(() => {
   
  const API_URL = 'https://fakestoreapi.com/products'

  const getData = () => {
   fetch(API_URL)
   .then(res=>res.json())
   .then(data=>setProducts(data))
 }
  if( products.length === 0 ) {
    getData()
  }


 }, [products])
 



  return (
    <div className="mx-2 md:w-3/5 lg:w-4/5">
    <h1 className="text-center p-3 text-lg font-bold text-black">Our Popular <span className=" font-bold text-green-500">Categories</span> </h1>
      <ProductsItemList setProduct={setProduct}  products={products} />
    </div>
  );
};

export default ProductsListContainer;
