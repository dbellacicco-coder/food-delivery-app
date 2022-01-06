import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import ProducDetailContainer from "./Components/ProductDetailContainer";
import Main from "./Components/Main";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [product, setProduct] = useState({});

  // setBasquetContainer([...basquetContainer,itemSelected])

  const links = ["Inicio", "Categorias", "Contacto"];
  return (
    <BrowserRouter>
      <div className="container bg-white  mx-auto">
        <NavBar links={links} />
        {/*afafffa
       
        */}

        <Hero />

        <ProducDetailContainer product={product} />
        <Main setProduct={setProduct} product={product} />
        {/*<div className="mt-12 md:flex">

          <ProductsListContainer setProduct={setProduct} />

          <CartBasquet product={product} />
          
          </div> */}

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
