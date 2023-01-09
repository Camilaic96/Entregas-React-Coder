import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import ComoComprar from "./components/ComoComprar";
import QuienesSomos from "./components/QuienesSomos";
import Contacto from "./components/Contacto";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import MensajeEnviado from "./components/MensajeEnviado";

function App() {
  return (
    <CartContextProvider>
          <div>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path={"/"} element={<ItemListContainer />} />
                <Route path={"/category/:id"} element={<ItemListContainer />} />
                <Route path={"/item/:id"} element={<ItemDetailContainer />} />
                <Route path={"/cart"} element={<Cart />} />
                <Route path={"/checkout"} element={<Checkout />} />
                <Route path={"/thankyou/:id"} element={<ThankYou />} />
                <Route path={"/mensaje-enviado"} element={<MensajeEnviado />} />
                <Route path={"/como-comprar"} element={<ComoComprar />} />
                <Route path={"/quienes-somos"} element={<QuienesSomos />} />
                <Route path={"/contacto"} element={<Contacto />} />
                <Route path={"*"} element={<Error404 />} />
              </Routes>
              <Jumbotron />
              <Footer />
            </BrowserRouter>
          </div>
      </CartContextProvider>
  );
}

export default App;
