import { Route, Routes } from 'react-router'
import HomePage from './features/home/HomePage'
import ProductListingPage from './features/products/ProductListingPage'
import ProductDetailsPage from './features/product_details/ProductDetailsPage'
import CartPage from './features/cart/CartPage'
import CheckoutPage from './features/checkout/CheckoutPage'
import UserProfile from './features/UserProfile/UserProfile'

function App() {

  return (
    <body  className="bg-[#101922] font-display text-gray-100 antialiased transition-colors duration-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path="/account" element={<UserProfile />} />
        <Route path="*" element={<h1 className='text-center text-3xl mt-20'>404 - Page Not Found</h1>} />
      </Routes>
    </body>
  )
}

export default App
