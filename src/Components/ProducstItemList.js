import React from "react";
import Item from "./Item";

const ProductItemList = ({
  products
}) => {


  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ProductItemList;
