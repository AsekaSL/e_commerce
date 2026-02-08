import { Route, Routes } from "react-router-dom"
import Homepage from "./features/home/HomePage.jsx"
import ProductListingPage from "./features/products/ProductListingPage.jsx"
import ProductDetailsPage from "./features/product_details/ProductDetailsPage.jsx"

function App() {

  return (
    <body  className="bg-[#101922] font-display text-gray-100 antialiased transition-colors duration-300">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
      </Routes>
    </body>
  )
}

export default App
