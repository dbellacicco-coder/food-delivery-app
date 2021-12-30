import React, { useState } from "react";
import Data from "../data.json";
import ProductsItemList from "./ProducstItemList";

const ProductsListContainer = ({setItemSelected}) => {
  const [products, setProducts] = useState([]);

  const obtenerDatos = new Promise((res, rej) => {
    res(Data);
  });
  obtenerDatos.then((Data) => {
    setProducts(Data);
  });
  obtenerDatos.catch(() => {});



  return (
    <div className="mx-2 md:w-3/5 lg:w-4/5">
    <h1 className="text-center p-3 text-lg font-bold text-black">Our Popular <span className=" font-bold text-green-500">Categories</span> </h1>
      <ProductsItemList setItemSelected={setItemSelected} products={products} />
    </div>
  );
};

export default ProductsListContainer;
