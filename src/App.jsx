import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import ProductosDestacados from "./components/ProductosDestacados";

function App() {
  return (
      <div>
        <NavBar />
        <ItemListContainer greeting={"No se encontraron productos"} />
        <ProductosDestacados />
        <Jumbotron />
        <Footer />
      </div>
  );
}

export default App;
