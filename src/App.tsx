import './App.css'
import CartPage from './pages/CartPage'
import { CartProvider, useCart } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <CartPage></CartPage>
    </CartProvider>
  )
}

export default App
