import { Route, Routes } from 'react-router'
import HomePage from './features/home/HomePage'
import ProductListingPage from './features/products/ProductListingPage'
import ProductDetailsPage from './features/product_details/ProductDetailsPage'

function App() {

  return (
    <body  className="bg-[#101922] font-display text-gray-100 antialiased transition-colors duration-300">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
      </Routes>
    </body>
  )
}

export default App
