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
        {/* <ProductDetailPage id={1}/> */}
        {/* <HomePage /> */}
        {/* <CheckoutPage /> */}
        <OrderReceivedPage />
    </>
  );
};

export default App;
