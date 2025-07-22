import CartPage from "./pages/CartPage";
import { CartProvider, useCart } from "./context/CartContext";
import React from "react";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderReceivedPage } from "./pages/OrderReceivedPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path='/gategory/:category' element={<HomePage />}/> */}
          <Route path='/product/:id' element={<ProductDetailPage />}/>
          {/* <Route path='/cart' element={<CartPage />}/> */}
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<OrderReceivedPage />} />
        </Routes>
      </BrowserRouter>
      {/* <CartProvider>
          <CartPage></CartPage>
        </CartProvider> */}
    </>
  );
};

export default App;
