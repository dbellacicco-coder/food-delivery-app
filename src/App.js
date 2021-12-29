import React, { useState } from "react";
import ProductsListContainer from "./Components/ProductsListContainer";
import CartBasquet from "./Components/CartBasquet";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="bg-grey  mx-auto">
      <NavBar />
      <div className="mt-12 md:flex">
        <ProductsListContainer />

        <CartBasquet />
      </div>
      
    </div>
  );
}

export default App;
