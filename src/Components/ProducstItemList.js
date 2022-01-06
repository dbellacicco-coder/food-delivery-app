import React from "react";
import Item from "./Item";

const ProductItemList = ({
  products
  ,setProduct
}) => {


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
      {products.map((product) => {
        return (
          <Item
          setProduct={setProduct}
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ProductItemList;
