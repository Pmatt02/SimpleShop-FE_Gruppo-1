
import CartPage from './pages/CartPage'
import { CartProvider, useCart } from './context/CartContext'
import React from "react";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderReceivedPage } from "./pages/OrderReceivedPage";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      {/* /<HomePage / > */}
      {/* <ProductDetailPage id={1}/> */}
      {/* <CheckoutPage /> */}
      <CartProvider>
        <CartPage></CartPage>
      </CartProvider>
      {/* <OrderReceivedPage /> */}
    </>
  );
};

export default App;
