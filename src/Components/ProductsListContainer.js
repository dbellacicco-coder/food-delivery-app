import React, { useState } from "react";
import Data from "../data.json";
import ProductsItemList from "./ProducstItemList";

const ProductsListContainer = () => {
  const [products, setProducts] = useState([]);

  const obtenerDatos = new Promise((res, rej) => {
    res(Data);
  });
  obtenerDatos.then((Data) => {
    setProducts(Data);
  });
  obtenerDatos.catch(() => {});



  return (
    <div className=" md:w-3/5 lg:w-4/5">
      <ProductsItemList products={products} />
    </div>
  );
};

export default ProductsListContainer;
