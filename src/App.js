import React, { useState } from "react";
import ProductsListContainer from "./Components/ProductsListContainer";
import CartBasquet from "./Components/CartBasquet";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";

function App() {




// setBasquetContainer([...basquetContainer,itemSelected])

  return (
    <div className="container bg-white  mx-auto">
      <NavBar />
      <Hero/>
      

      <div className="mt-12 md:flex">
        <ProductsListContainer
         />

        <CartBasquet
      
         />
      </div>
      <Footer />
    </div>
  );
}

export default App;
