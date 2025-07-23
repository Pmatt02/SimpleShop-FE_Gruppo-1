import CartPage from '@/pages/CartPage';
import { CheckoutPage } from '@/pages/CheckoutPage';
import HomePage from '@/pages/HomePage';
import { OrderReceivedPage } from '@/pages/OrderReceivedPage';
import { ProductDetailPage } from '@/pages/ProductDetailPage';
import {Route, Routes} from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path='/gategory/:category' element={<HomePage />}/> */}
          <Route path='/product/:id' element={<ProductDetailPage />}/>
          <Route path='/cart' element={<CartPage />}/>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<OrderReceivedPage />} />
        </Routes>
        {/* <CartProvider>
          <CartPage></CartPage>
        </CartProvider> */}
        </>
    )
}