import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import ComoComprar from "./components/pages/ComoComprar";
import QuienesSomos from "./components/pages/QuienesSomos";
import Contacto from "./components/pages/Contacto";
import BotonSubir from "./components/BotonSubir";

function App() {
  return (
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/*"} element={<Error404 />} />
          </Routes>
          <Jumbotron />
          <ComoComprar />
          <QuienesSomos />
          <Contacto />
          <Footer />
          <BotonSubir />
        </BrowserRouter>

      </div>
  );
}

export default App;
